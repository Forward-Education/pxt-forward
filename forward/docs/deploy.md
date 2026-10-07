# Deploying the Forward editor

## How it works

| Environment | Address | Cloudflare Pages project | Deployed by |
|---|---|---|---|
| Staging | `code-staging.forwardedu.com`, behind Cloudflare Access | `pxt-forward-staging` | `fwd-build.yml`, job `deploy-staging`: every push to `main`, or "Run workflow" on `main` |
| Production | `code.forwardedu.com` (later `makecode.forwardedu.com`) | `pxt-forward` (not created yet) | a separate, approval-gated workflow in M4 |

Steps of `deploy-staging`:
1. Takes the editor that the `build` job uploaded.
2. Runs `forward/scripts/prepare-pages.sh site staging`, which writes three files:
   - `_headers`: `nosniff`, a referrer policy, and `X-Robots-Tag: noindex` on staging
   - `_redirects`: serves `/static/*` from `/docs/static/*`
   - `404.html`: a real 404 for unknown paths
3. Uploads the site with Wrangler as the `main` (production) deployment of the staging project.

The build is about 3,500 files and 230 MB, with no file over 5 MiB. That's well inside Pages'
limits of 20,000 files and 25 MiB per file.

## One-time setup

### 1. Create the staging project (Cloudflare)

```bash
npx wrangler login
```

```bash
npx wrangler pages project create pxt-forward-staging --production-branch main
```

### 2. Add the domain (Cloudflare dashboard)

Workers & Pages > `pxt-forward-staging` > Custom domains > Set up a custom domain >
`code-staging.forwardedu.com`. The `forwardedu.com` zone is in the same account, so Cloudflare
adds the DNS record.

### 3. Put staging behind Cloudflare Access (Zero Trust dashboard)

Access > Applications > Add an application > Self-hosted:
- **Name:** Forward Code staging.
- **Hostnames:**
  - `code-staging.forwardedu.com`
  - `pxt-forward-staging.pages.dev`
  - `*.pxt-forward-staging.pages.dev`
  
  The `pages.dev` names otherwise stay public.
- **Policy:** Allow, where the email ends in `@forwardedu.com`.
- **Login method:** Google Workspace if it's set up in Zero Trust, otherwise one-time PIN.

### 4. API token (Cloudflare dashboard)

My Profile > API Tokens > Create Token > Custom token:
- **Permission:** Account > Cloudflare Pages > Edit.
- **Account resources:** the Forward Education account only.

Store it in Bitwarden. Never paste it into chat or commit it.

### 5. GitHub settings

```bash
gh api -X PUT repos/Forward-Education/pxt-forward/environments/staging
```

```bash
gh secret set CLOUDFLARE_API_TOKEN --env staging -R Forward-Education/pxt-forward
```

(paste the token at the prompt)

```bash
gh variable set CLOUDFLARE_ACCOUNT_ID -R Forward-Education/pxt-forward --body "<account id from the Cloudflare dashboard>"
```

Set this last; it switches the deploy job on:

```bash
gh variable set CF_PAGES_PROJECT_STAGING -R Forward-Education/pxt-forward --body "pxt-forward-staging"
```

Optionally, restrict the `staging` environment to the `main` branch under Settings >
Environments > staging > Deployment branches.

## Checking a deploy

- **Editor:** opens at `https://code-staging.forwardedu.com` after the Access login.
- **Pages project:** the deploy appears under `pxt-forward-staging` with the commit hash.
- **Headers and rewrites:**
  - `curl -I` on the site shows `x-robots-tag: noindex`;
  - `/hexcache/<any wrong sha>.hex` returns 404;
  - `/static/logo_texture.png` returns the image.
- **Access:** `https://pxt-forward-staging.pages.dev` asks for the Access login too.

## Rolling back

Workers & Pages > `pxt-forward-staging` > Deployments > pick an earlier deployment > Rollback.

## Local preview with the same rules

Cloudflare's emulator needs no account:

```bash
bash forward/scripts/prepare-pages.sh forward/.build/built/packaged staging
```

```bash
WRANGLER_SEND_METRICS=false npx wrangler@4.147.0 pages dev forward/.build/built/packaged --port 8788
```
