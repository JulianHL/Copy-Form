export function selectShowElement(
    element: HTMLElement,
    selectInput: string,
    expectedValue: string,
    displayClass: string,
    hiddenClass: string 
) {
    const isVisible = selectInput === expectedValue;
    element.classList.toggle(hiddenClass, !isVisible);
    element.classList.toggle(displayClass, isVisible);
}