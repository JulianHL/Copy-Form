import type { SelectBinding } from "./SelectBinding";
import type { selectBindingDisable } from "./SelectBindingDisable";
import type { TargetDisable } from "./TargetDisable";

export function targetElementDisabler(seclectBindingDisableElements: Array<selectBindingDisable>) {
    seclectBindingDisableElements.forEach((selectBinding) => {
        selectBinding.disableTarget();
        selectBinding.selectComponent.addEventListener("change", function (e) {
            selectBinding.targetElements.forEach((target) => {
                const t = target as TargetDisable;
                
                t.targetElement.disabled = false;
            
                if (typeof t.defaultValue === "boolean") {             
                    (t.targetElement as HTMLInputElement).checked = t.defaultValue;
                    return;
                }

                t.targetElement.value = t.defaultValue as string;
            });

            seclectBindingDisableElements.forEach((selectBindingListener) => {
                selectBindingListener.disableTarget();
            })
        })
    })
}