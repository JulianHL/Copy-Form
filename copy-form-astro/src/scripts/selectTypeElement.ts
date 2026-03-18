import type { SelectDisplay } from "./SelectDisplay";
import type { TargetType } from "./TargetType";

export function selectTypeElement(
    selectInput: string,
    targetTypeElement: TargetType,
) {
    const isExpectedValue = selectInput === targetTypeElement.expectedValue;
    if (!isExpectedValue) {
        targetTypeElement.lastText = targetTypeElement.targetElement.value;
        targetTypeElement.targetElement.value = targetTypeElement.text
    } else {
        targetTypeElement.targetElement.value = targetTypeElement.lastText.replace(targetTypeElement.text, "")
    }
}