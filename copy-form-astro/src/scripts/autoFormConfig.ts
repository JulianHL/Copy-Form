import { SelectBinding } from "./SelectBinding"
import { selectBindingDisable } from "./SelectBindingDisable"
import { selectBindingDisplay } from "./SelectBindingDisplay"
import { selectBindingType } from "./SelectBindingType"
import { TargetDisable } from "./TargetDisable"
import { TargetDisplay } from "./TargetDisplay"
import { TargetType } from "./TargetType"



export const autoFormConfigSelectDisplay: Array<selectBindingDisplay> = [
    new selectBindingDisplay("selectBoxAutoInjuries", [
        new TargetDisplay("selectBoxAutoABContainer", "Yes")
    ]),
    new selectBindingDisplay("selectBoxAutoWitness", [
        new TargetDisplay("selectBoxAutoWitnessContainer", "Yes", "grid")
    ]),
    new selectBindingDisplay("selectBoxAutoRestriction", [
        new TargetDisplay("selectBoxAutoRestrictionContainer", "Yes")
    ]),
    new selectBindingDisplay("selectBoxAutoThirdParty", [
        new TargetDisplay("selectBoxAutoThirdPartyReasonContainer", "No"),
        new TargetDisplay("selectBoxAutoThirdPartyContainer", "Yes", "grid")
    ]),
    new selectBindingDisplay("selectBoxAutoPolice", [
        new TargetDisplay("selectBoxAutoPoliceContainer", "Yes", "grid")
    ]),
    new selectBindingDisplay("selectBoxAutoService", [
        new TargetDisplay("selectBoxAutoServiceReasonContainer", "No"),
        new TargetDisplay("selectBoxAutoServiceContainer", "Yes", "grid")
    ]),
    new selectBindingDisplay("selectBoxBodyShopAccepted", [
        new TargetDisplay("selectBoxBodyShopAcceptedContainer", "Yes", "grid"),
        new TargetDisplay("generalBoxAutoShopRejectedReasonContainer", "No", "block" ,"peer-checked/bodyshop:hidden")
    ]),
    
]

export const autoFormConfigSelectType: Array<selectBindingType> = [
    new selectBindingType("selectBoxAutoLocation", [new TargetType("generalBoxAutoTowRejectedReason", "Scene of the accident", "Vehicle moved from the scene of the accident")]),
    new selectBindingType("selectBoxAutoDrivable",[new TargetType("generalBoxAutoTowRejectedReason", "No", "Vehicle is drivable"), new TargetType("generalBoxAutoRentalRejectedReason", "No", "Vehicle is drivable")])
]

export const autoFormConfigSelectDisable: Array<selectBindingDisable> = [
    new selectBindingDisable("selectBoxAutoLocation", [new TargetDisable("checkboxTow", "Scene of the accident", false, "checkboxTowLabel")]),
    new selectBindingDisable("selectBoxAutoDrivable",[new TargetDisable("checkboxTow", "No", false, "checkboxTowLabel"), new TargetDisable("checkboxRental", "No", false, "checkboxRentalLabel")])
]
