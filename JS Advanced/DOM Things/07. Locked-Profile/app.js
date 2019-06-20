function lockedProfile() {
    let profiles = document.querySelectorAll('.profile');

    for (let i = 0; i < profiles.length; i++) {
        let [lockedRadioButton, unlockedRadioButton] = profiles[i].querySelectorAll('input');

        let hidden = profiles[i].querySelector(`#user${i + 1}HiddenFields`);

        let showButton = profiles[i].querySelector('button');

        showButton.addEventListener('click', function () {
            if (unlockedRadioButton.checked && showButton.textContent === 'Show more') {
                hidden.style.display = 'block';
                showButton.textContent = 'Hide it';
            } else if (unlockedRadioButton.checked && showButton.textContent === 'Hide it') {
                hidden.style.display = 'none';
                showButton.textContent = 'Show more';
            }
        });
    }
}