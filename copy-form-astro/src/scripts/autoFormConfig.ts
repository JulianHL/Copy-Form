import { SelectDisplay } from "./SelectDisplay"
import { TargetDisplay } from "./TargetDisplay"
import { TargetType } from "./TargetType"


export const autoFormConfigSelectDisplay: Array<SelectDisplay> = [
    new SelectDisplay("selectBoxAutoInjuries", [
        new TargetDisplay("selectBoxAutoABContainer", "Yes")
    ]),
    new SelectDisplay("selectBoxAutoWitness", [
        new TargetDisplay("selectBoxAutoWitnessContainer", "Yes", "grid")
    ]),
    new SelectDisplay("selectBoxAutoRestriction", [
        new TargetDisplay("selectBoxAutoRestrictionContainer", "Yes")
    ]),
    new SelectDisplay("selectBoxAutoThirdParty", [
        new TargetDisplay("selectBoxAutoThirdPartyReasonContainer", "No"),
        new TargetDisplay("selectBoxAutoThirdPartyContainer", "Yes", "grid")
    ]),
    new SelectDisplay("selectBoxAutoPolice", [
        new TargetDisplay("selectBoxAutoPoliceContainer", "Yes", "grid")
    ]),
    new SelectDisplay("selectBoxAutoService", [
        new TargetDisplay("selectBoxAutoServiceReasonContainer", "No"),
        new TargetDisplay("selectBoxAutoServiceContainer", "Yes", "grid")
    ]),
    new SelectDisplay("selectBoxBodyShopAccepted", [
        new TargetDisplay("selectBoxBodyShopAcceptedContainer", "Yes", "grid"),
        new TargetDisplay("generalBoxAutoShopRejectedReasonContainer", "No", "block" ,"peer-checked/bodyshop:hidden")
    ]),
    
]

export const autoFormConfigSelectType: Array<SelectDisplay> = [
    new SelectDisplay("selectBoxAutoLocation", [new TargetType("generalBoxAutoTowRejectedReason", "Scene of the accident", "Vehicle moved from the scene of the accident")]),
    new SelectDisplay("selectBoxAutoDrivable",[new TargetType("generalBoxAutoTowRejectedReason", "No", "Vehicle is drivable"), new TargetType("generalBoxAutoRentalRejectedReason", "No", "Vehicle is drivable")])
]
