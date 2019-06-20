function subtract() {
    const SELECTORS = {
        firstElement : '#firstNumber',
        secondElement : '#secondNumber',
        resultElement : '#result',
    };

    const getFirstNum = () => document.querySelector(SELECTORS.firstElement).value;

    const getSecondNum = () => document.querySelector(SELECTORS.secondElement).value;

    const getResultElement = () => document.querySelector(SELECTORS.resultElement);

    const getResult = (first, second) => first - second;


    const actualResult = () => {
        let first = getFirstNum();
        let second = getSecondNum();
        let result = getResultElement();

        let actual = getResult(first, second);

        result.innerHTML = actual;

    };

    actualResult();
}