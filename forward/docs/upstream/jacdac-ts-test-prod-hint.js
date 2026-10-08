// Exercises RoleManagerClient.startSimulators with the roles the FIFA kit and a Forward dial use,
// before and after adding ?prod= hints. Run against a jacdac-ts build: node test-prod-hint.js <dist/jacdac.cjs>
const jd = require(process.argv[2]);
const { JDBus, RoleManagerClient, ControlReg, SRV_SERVO, SRV_RELAY, SRV_DC_VOLTAGE_MEASUREMENT, SRV_ROTARY_ENCODER } = jd;

function run(label, roles) {
    const bus = new JDBus([], { disableRoleManager: true });
    const rm = Object.create(RoleManagerClient.prototype);
    Object.defineProperty(rm, "bus", { value: bus });
    rm.log = () => {};
    rm._roles = roles.map(r => {
        const [name, query] = r.full.split("?", 2);
        return { deviceId: "0000000000000000", serviceClass: r.serviceClass, serviceIndex: 1, name, query };
    });
    rm.startSimulators();
    const providers = bus.serviceProviders();
    console.log(`\n${label}: ${providers.length} simulated device(s)`);
    for (const p of providers) {
        const pid = p.controlService?.register(ControlReg.ProductIdentifier)?.values()?.[0];
        const services = p.services().slice(1).map(s => s.specification?.shortName || s.serviceClass.toString(16));
        console.log(`  product id ${pid ? "0x" + pid.toString(16) : "0 (none)"}  services: ${services.join(", ")}`);
    }
    bus.stop?.();
}

const fifa = suffix => [
    { full: `fifaBrain/servo1?srvo=0${suffix}`, serviceClass: SRV_SERVO },
    { full: `fifaBrain/servo2?srvo=1${suffix}`, serviceClass: SRV_SERVO },
    { full: `fifaBrain/servo3?srvo=2${suffix}`, serviceClass: SRV_SERVO },
    { full: `fifaBrain/relay${suffix ? "?" + suffix.slice(1) : ""}`, serviceClass: SRV_RELAY },
    { full: `fifaBrain/battery${suffix ? "?" + suffix.slice(1) : ""}`, serviceClass: SRV_DC_VOLTAGE_MEASUREMENT },
];
run("FIFA roles as today", fifa(""));
run("FIFA roles with &prod=0x37a2f1fb", fifa("&prod=0x37a2f1fb"));
run("Dial role as today", [{ full: "dial1", serviceClass: SRV_ROTARY_ENCODER }]);
run("Dial role with ?prod=0x378f7673", [{ full: "dial1?prod=0x378f7673", serviceClass: SRV_ROTARY_ENCODER }]);
process.exit(0);
