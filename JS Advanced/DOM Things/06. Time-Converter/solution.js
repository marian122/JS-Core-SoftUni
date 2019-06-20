function attachEventsListeners() {
    const SELECTORS = {
        days : '#days',
        daysBtn : '#daysBtn',
        hours : '#hours',
        hoursBtn : '#hoursBtn',
        minutes : '#minutes',
        minutesBtn : '#minutesBtn',
        seconds : '#seconds',
        secondsBtn : '#secondsBtn',
    };

    const getElement = function(elementName) {
        return document.querySelector(SELECTORS[elementName]);
    };

    let daysEl = getElement("days");
    let daysBtn = getElement("daysBtn");
    let hoursEl = getElement("hours");
    let hoursBtn = getElement("hoursBtn");
    let minutesEl = getElement("minutes");
    let minutesBtn = getElement("minutesBtn");
    let secondsEl = getElement("seconds");
    let secondsBtn = getElement("secondsBtn");

    daysBtn.addEventListener('click', () => {
        let hours = Number(daysEl.value) * 24;
        let minutes = hours * 60;
        let seconds = minutes * 60;

        hoursEl.value = hours;
        minutesEl.value = minutes;
        secondsEl.value = seconds;

    });

    hoursBtn.addEventListener('click', () => {
       let days = Number(hoursEl.value) / 24;
       let minutes = days * 24 * 60;
       let seconds = minutes * 60;

        daysEl.value = days;
        minutesEl.value = minutes;
        secondsEl.value = seconds;
    });

    minutesBtn.addEventListener('click', () => {
        let days = Number(minutesEl.value) / 60 / 24;
        let hours = days * 24;
        let seconds = minutesEl.value * 60;

        daysEl.value = days;
        hoursEl.value = hours;
        secondsEl.value = seconds;
    });

    secondsBtn.addEventListener('click', () => {
        let days = Number(secondsEl.value) / 60 / 24 / 60;
        let hours  = days * 24;
        let minutes = hours * 60;

        daysEl.value = days;
        hoursEl.value = hours;
        minutesEl.value = minutes;
    });
}