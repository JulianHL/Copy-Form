import { SelectDisplay } from "./SelectDisplay";
import type { Target } from "./Target";
import type { TargetType } from "./TargetType";
import { selectTypeElement } from "./selectTypeElement";

export function targetElementTyper(seclectDisplayElements: Array<SelectDisplay>) {
    seclectDisplayElements.forEach((selectDisplay) => {
        selectTypeElementApplier(selectDisplay.selectComponentValue, selectDisplay.targetDisplayElements)

        selectDisplay.selectComponent.addEventListener("change", function (e) {
            selectTypeElementApplier(selectDisplay.selectComponentValue, selectDisplay.targetDisplayElements);
        })
    })
}

function selectTypeElementApplier(selectComponentValue: string, targetTypeElements: Array<Target>) {
    targetTypeElements.forEach((targetType) => {
        selectTypeElement(selectComponentValue, targetType as TargetType);
    });
}