function get(data: FormData, key: string, fallback = "Unable to provide"): string {
    return (data.get(key) as string) || fallback;
}

function checked(data: FormData, key: string): boolean {
    return data.get(key) === "on";
}

function selected(data: FormData, key: string, value: string): boolean {
    return data.get(key) === value;
}

function formatDate(data: FormData): string {
    const raw = data.get("dateBoxBodyShopAppointment") as string;
    const [y, m, d] = raw.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    const monthName = date.toLocaleDateString("en-US", { month: "long" });
    return `${dayName}, ${monthName} ${date.getDate()}, ${date.getFullYear()}`;
}

function buildInsuredInfo(data: FormData): string {
    return "*Caller Authentication Completed (PIPEDA): Yes\n"
        + `*Phone & Email: ${get(data, "telBoxAuto")} - ${get(data, "emailBoxAuto")}\n\n`;
}

function buildVehicleInfo(data: FormData): string {
    return `*Vehicle: ${get(data, "generalBoxAutoVehicle")} (${get(data, "generalBoxAutoPlate")} / ${get(data, "generalBoxAutoColor")})\n`
        + `*Current vehicle Location: ${get(data, "selectBoxAutoLocation")} (${get(data, "generalBoxAutoCurrentLocation")})\n\n`;
}

function buildInjuriesInfo(data: FormData): string {
    const injuries = get(data, "selectBoxAutoInjuries");
    const ab = selected(data, "selectBoxAutoInjuries", "Yes")
        ? get(data, "selectBoxAutoAB")
        : "No";
    return `*Injuries to insured? ${injuries}\n`
        + `*Insured wish to pursue an Accident Benefits (A/B) claim? ${ab}\n`;
}

function buildVehicleDetailsInfo(data: FormData): string {
    return `*vehicle used for any commercial purposes? ${get(data, "selectBoxAutoCommercial")}\n`
        + `*Any Dash Camera footage of the accident? ${get(data, "selectBoxAutoDashCam")}\n`;
}

function buildWitnessInfo(data: FormData): string {
    let info = `*Any witnesses? ${get(data, "selectBoxAutoWitness")}`;
    const name = data.get("generalBoxAutoWitnessName") as string;
    const tel = data.get("telBoxAutoWitness") as string;
    if (name) info += `\n-Witness name: ${name}`;
    if (tel) info += ` - Witness phone: ${tel}`;
    return info + "\n";
}

function buildDriverInfo(data: FormData): string {
    const restriction = selected(data, "selectBoxAutoRestriction", "Yes")
        ? ` (${get(data, "generalBoxAutoRestriction")})\n`
        : "\n";
    return `*Car seats (Baby seats): ${get(data, "selectBoxAutoSeats")}\n`
        + `*Alcohol/Medication/Drugs: ${get(data, "selectBoxAutoDrugs")}\n`
        + `*Any license restrictions? ${get(data, "selectBoxAutoRestriction")}${restriction}`
        + `*Anti-theft Device (TOTAL THEFT)? ${get(data, "selectBoxAutoDevice")}\n\n`;
}

function buildThirdPartyInfo(data: FormData): string {
    if (!selected(data, "selectBoxAutoThirdParty", "Yes")) {
        return `****Third-party info not provided (${get(data, "generalBoxAutoThirdPartyReason")})****\n\n`;
    }
    return "****Third-party Info****\n"
        + `-Name & Phone: ${get(data, "generalBoxAutoThirdPartyName")} - ${get(data, "generalBoxAutoThirdPartyTel")}\n`
        + `-Driver's license #: ${get(data, "generalBoxAutoThirdPartyLicense")}\n`
        + `-Insurance Companny & Policy #: ${get(data, "generalBoxAutoThirdPartyInsurance")} - ${get(data, "generalBoxAutoThirdPartyInsurancePolicy")}\n`
        + `-Vehicle: ${get(data, "generalBoxAutoThirdPartyVehicle", "Unable to provide vehicle")} (${get(data, "generalBoxAutoThirdPartyVehiclePlate", "Unable to provide plate")} / ${get(data, "generalBoxAutoThirdPartyVehicleColor", "Unable to provide color")})\n\n`;
}

function buildPoliceInfo(data: FormData): string {
    if (!selected(data, "selectBoxAutoPolice", "Yes")) {
        return `*Police report #: Unable to provide\n\n`;
    }
    return `*Police report #: ${get(data, "generalBoxAutoPoliceReport")} `
        + `(Badge: ${get(data, "generalBoxAutoPoliceBadge", "N/A")} | `
        + `Contact: ${get(data, "generalBoxAutoPoliceContact", "N/A")} | `
        + `City: ${get(data, "generalBoxAutoPoliceCity", "N/A")})\n\n`;
}

function buildBodyShopInfo(data: FormData): string {
    if (!checked(data, "checkboxBodyShop")) {
        return `****Preferred Shop Benefits Not Discussed (${get(data, "generalBoxAutoShopRejectedReason")})****\n\n`;
    }
    const accepted = selected(data, "selectBoxBodyShopAccepted", "Yes")
        ? `-Body shop accepted: Yes\n-Scheduled Appraisal Date: ${formatDate(data)} (${get(data, "timeBoxBodyShopAppointment")})\n\n`
        : `-Body shop accepted: No\n-Reason: ${get(data, "generalBoxAutoShopRejectedReason")}\n\n`;
    return "*Advised preferred shop benefits: Yes\n" + accepted;
}

function buildTowingInfo(data: FormData): string {
    if (!checked(data, "checkboxTow")) {
        return `****No Primary Tow Assigned (${get(data, "generalBoxAutoTowRejectedReason")})****\n\n`;
    }
    return `*Primary Tow Assigned to Assistenza Agent: ${get(data, "generalBoxTowAgent")}\n`
        + `*Primary Tow Destination: ${get(data, "generalBoxTowDestination")}\n`
        + `*Primary Tow Contact info: ${get(data, "telBoxTow")}\n`
        + `*Where are the vehicle keys? ${get(data, "generalBoxTowKeys")}\n\n`;
}

function buildRentalInfo(data: FormData): string {
    if (!checked(data, "checkboxRental")) {
        return `****No Rental Offered (${get(data, "generalBoxAutoRentalRejectedReason")})****`;
    }
    return `*Enterprise Rental Offered: Yes\n-Enterprise Rental Location: ${get(data, "generalBoxRentalLocation")}`;
}

function buildServicesInfo(data: FormData): string {
    if (!selected(data, "selectBoxAutoService", "Yes")) {
        return `****No services offered (${get(data, "generalBoxAutoNoServiceReason")})****`;
    }
    return buildBodyShopInfo(data) + buildTowingInfo(data) + buildRentalInfo(data);
}

export function autoFormater(data: FormData): string {
    return [
        buildInsuredInfo(data),
        buildVehicleInfo(data),
        buildInjuriesInfo(data),
        buildVehicleDetailsInfo(data),
        buildWitnessInfo(data),
        buildDriverInfo(data),
        buildThirdPartyInfo(data),
        buildPoliceInfo(data),
        `*Claim Assigned to ADJ: ${get(data, "generalBoxAutoADJ")}\n\n`,
        buildServicesInfo(data),
    ].join("");
}