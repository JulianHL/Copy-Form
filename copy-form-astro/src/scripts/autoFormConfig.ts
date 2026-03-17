import { SelectDisplay } from "./SelectDisplay"
import { TargetDisplay } from "./TargetDisplay"

export const autoFormConfig: Array<SelectDisplay> = [
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
