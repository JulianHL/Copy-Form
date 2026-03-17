import { SelectDisplay } from "./SelectDisplay";
import { Target } from "./Target";
import type { TargetDisplay } from "./TargetDisplay";
import { selectShowElement } from "./selectShowElement";

export function targetElementDisplayer(selectDisplayElements: Array<SelectDisplay>) {
    selectDisplayElements.forEach((selectDisplay) => {
        selectShowElementApplier(selectDisplay.selectComponentValue, selectDisplay.targetDisplayElements)
        selectDisplay.selectComponent.addEventListener("change", function (e) {
            selectShowElementApplier(this.value, selectDisplay.targetDisplayElements)
        })
    })
}

function selectShowElementApplier(selectComponentValue: string, targetDisplayElements: Array<Target>) {
    targetDisplayElements.forEach((targetDisplay) => {
        selectShowElement(targetDisplay.targetElement, selectComponentValue, targetDisplay.expectedValue, (targetDisplay as TargetDisplay).displayClass, (targetDisplay as TargetDisplay).hiddenClass);
    })
}