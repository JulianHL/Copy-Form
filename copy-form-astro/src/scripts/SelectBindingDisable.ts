import { SelectBinding } from "./SelectBinding";
import type { TargetDisable } from "./TargetDisable";


export class selectBindingDisable extends SelectBinding{
    disableTarget() {
        this._targetElements.forEach((target) => {
            const isExpected = target.expectedValue === this._selectComponent.value;
            (target as TargetDisable).targetElement.disabled = (target as TargetDisable).targetElement.disabled || !isExpected;
            (target as TargetDisable).linkedElement?.classList.toggle("cursor-pointer", !((target as TargetDisable).targetElement.disabled || !isExpected));
            (target as TargetDisable).linkedElement?.classList.toggle("cursor-not-allowed",((target as TargetDisable).targetElement.disabled || !isExpected));
            
      });
    }
}