function toggle() {
    const SELECTORS = {
        buttonElement : '.button',
        textElement : '#extra',
    };

    const getButtonElement = () => document.querySelector(SELECTORS.buttonElement);

    const getTextElement = () => document.querySelector(SELECTORS.textElement);

    const result = () => {
        let button = getButtonElement();
        let text = getTextElement();

        if (text.style.display === 'none'){
            text.style.display = 'block';
            button.textContent = 'Less';
        }else{
            text.style.display = 'none';
            button.textContent = 'More';
        }
    };
    result();
}