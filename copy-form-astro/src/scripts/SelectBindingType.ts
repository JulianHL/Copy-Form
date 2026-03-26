import { SelectBinding } from "./SelectBinding";
import type { TargetType } from "./TargetType";

export class selectBindingType extends SelectBinding{
        typeTarget() {
        this._targetElements.forEach((target) => {
            if (target.expectedValue !== this._selectComponent.value) {
                (target as TargetType).targetElement.value = (target as TargetType).text;
                return
            }
            if ((target as TargetType).targetElement.value === (target as TargetType).text) {
                (target as TargetType).targetElement.value = ""
                return
            } 
        })
    }
}