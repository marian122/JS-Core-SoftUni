function addItem() {
    const SELECTORS = {
        textElement : '#newItemText',
        valueElement : '#newItemValue',
        dropdownElement : '#menu',
    };

    const getTextValue = () => document.querySelector(SELECTORS.textElement);

    const getValueElementValue = () => document.querySelector(SELECTORS.valueElement);

    const getDropDownValue = () => document.querySelector(SELECTORS.dropdownElement);

    const createOptionElement = () => document.createElement('option');

    const result = () => {
        let textEl = getTextValue();
        let valueEl = getValueElementValue();
        let dropDown = getDropDownValue();

        let resultAppend = dropDown.appendChild(createOptionElement());

        resultAppend.textContent = textEl.value;
        resultAppend.value = valueEl.value;

        textEl.value = null;
        valueEl.value = null;

    };
    result();

}