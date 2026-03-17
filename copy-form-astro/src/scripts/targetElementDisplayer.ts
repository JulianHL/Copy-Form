import { SelectDisplay } from "./SelectDisplay";
import { TargetDisplay } from "./TargetDisplay";
import { selectShowElement } from "./selectShowElement";

export function targetElementDisplayer(selectDisplayElements: Array<SelectDisplay>) {
    selectDisplayElements.forEach((selectDisplay) => {
        selectShowElementApplier(selectDisplay.selectComponentValue, selectDisplay.targetDisplayElements)
        selectDisplay.selectComponent.addEventListener("change", function (e) {
            selectShowElementApplier(this.value, selectDisplay.targetDisplayElements)
        })
    })
}

function selectShowElementApplier(selectComponentValue: string, targetDisplayElements: Array<TargetDisplay>) {
    targetDisplayElements.forEach((targetDisplay) => {
        selectShowElement(targetDisplay.displayElement, selectComponentValue, targetDisplay.expectedValue, targetDisplay.displayClass, targetDisplay.hiddenClass);
    })
}