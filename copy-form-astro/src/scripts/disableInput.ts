export function disableInput(inputElement: HTMLInputElement, element: HTMLElement | null, disable: boolean, defaultValue: boolean | string): void {
    const isDisable = disable
    if (isDisable) {
        typeof defaultValue === "string" ?
            inputElement.value = defaultValue :
            inputElement.checked = defaultValue;
    }
    inputElement.disabled = isDisable;
    element?.classList.toggle("cursor-pointer", !isDisable);
    element?.classList.toggle("cursor-not-allowed", isDisable);
}
