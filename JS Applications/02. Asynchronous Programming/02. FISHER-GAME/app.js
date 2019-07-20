function attachEvents() {
    let catchesDiv = document.getElementById('catches');

    let loadBtn = document.getElementsByClassName('load')[0];
    loadBtn.addEventListener('click', getAllCatches);

    function getAllCatches() {
        fetch('https://fisher-game.firebaseio.com/catches.json')
            .then(handler)
            .then(showCatches);
    }

    function showCatches (data) {
        Object.keys(data).forEach(key => {
            const catchElement = catchesDiv.children[0].cloneNode(true);
            catchElement.style.display = 'inline-block';

            catchElement.setAttribute('data-id', key);
            catchElement.querySelector('input.angler').value = data[key].angler;
            catchElement.querySelector('input.weight').value = data[key].weight;
            catchElement.querySelector('input.species').value = data[key].species;
            catchElement.querySelector('input.location').value = data[key].location;
            catchElement.querySelector('input.bait').value = data[key].bait;
            catchElement.querySelector('input.captureTime').value = data[key].captureTime;
            catchElement.querySelector('button.update').addEventListener('click', updateCatch);
            catchElement.querySelector('button.delete').addEventListener('click', deleteCatch);


            catchesDiv.appendChild(catchElement);

            function updateCatch(event) {
                let id = event.currentTarget.parentNode.getAttribute('data-id');

                let newAngler = catchElement.querySelector('input.angler').value;
                let newWeight = catchElement.querySelector('input.weight').value;
                let newSpecies = catchElement.querySelector('input.species').value;
                let newLocation = catchElement.querySelector('input.location').value;
                let newBait = catchElement.querySelector('input.bait').value;
                let newCaptureTime = catchElement.querySelector('input.captureTime').value;

                let body = {
                    angler: newAngler,
                    weight: newWeight,
                    species: newSpecies,
                    location: newLocation,
                    bait: newBait,
                    captureTime: newCaptureTime
                };

                fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {method: 'PUT', body: JSON.stringify(body)})
                    .then(handler)
                    .then(data => {
                        catchElement.querySelector('input.angler').value = newAngler;
                        catchElement.querySelector('input.weight').value = newWeight;
                        catchElement.querySelector('input.species').value = newSpecies;
                        catchElement.querySelector('input.location').value = newLocation;
                        catchElement.querySelector('input.bait').value = newBait;
                        catchElement.querySelector('input.captureTime').value = newCaptureTime;
                    })
            }

            function deleteCatch(event) {
                let id = event.currentTarget.parentNode.getAttribute('data-id');
                let currentCatch = event.currentTarget.parentNode;

                fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {method: 'DELETE'}).
                then(handler)
                    .then(data => {
                        currentCatch.remove();
                    });

            }
        });
    }

    let addBtn = document.getElementsByClassName('add')[0];
    addBtn.addEventListener('click', addCatch);

    function addCatch() {
        let submitCatchInput = document.querySelector('#addForm').getElementsByTagName('input');
        let anglerInput = submitCatchInput[0];
        let weightInput = submitCatchInput[1];
        let speciesInput = submitCatchInput[2];
        let locationInput = submitCatchInput[3];
        let baitInput = submitCatchInput[4];
        let captureTimeInput = submitCatchInput[5];

        const catchElement = catchesDiv.children[0].cloneNode(true);

        if (anglerInput.value && weightInput.value > 0
            && speciesInput.value && locationInput.value
            && baitInput.value && captureTimeInput.value > 0) {

            let body = {
                angler: anglerInput.value,
                weight: weightInput.value,
                species: speciesInput.value,
                location: locationInput.value,
                bait: baitInput.value,
                captureTime: captureTimeInput.value
            };
            fetch('https://fisher-game.firebaseio.com/catches.json', {method: 'POST', body: JSON.stringify(body)})
                .then(handler)
                .then(data => {

                    catchElement.setAttribute('data-id', data.name);
                    catchElement.querySelector('input.angler').value = anglerInput.value;
                    catchElement.querySelector('input.weight').value = weightInput.value;
                    catchElement.querySelector('input.species').value = speciesInput.value;
                    catchElement.querySelector('input.location').value = locationInput.value;
                    catchElement.querySelector('input.bait').value = baitInput.value;
                    catchElement.querySelector('input.captureTime').value = captureTimeInput.value;
                    catchElement.querySelector('button.update').addEventListener('click', updateCatch);
                    catchElement.querySelector('button.delete').addEventListener('click', deleteCatch);

                    catchesDiv.appendChild(catchElement);

                    function deleteCatch(event) {
                        let id = event.currentTarget.parentNode.getAttribute('data-id');
                        let currentCatch = event.currentTarget.parentNode;

                        fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {method: 'DELETE'}).
                        then(handler)
                            .then(data => {
                                currentCatch.remove();
                            });

                    }

                    function updateCatch(event) {
                        let id = event.currentTarget.parentNode.getAttribute('data-id');

                        let newAngler = catchElement.querySelector('input.angler').value;
                        let newWeight = catchElement.querySelector('input.weight').value;
                        let newSpecies = catchElement.querySelector('input.species').value;
                        let newLocation = catchElement.querySelector('input.location').value;
                        let newBait = catchElement.querySelector('input.bait').value;
                        let newCaptureTime = catchElement.querySelector('input.captureTime').value;

                        let body = {
                            angler: newAngler,
                            weight: newWeight,
                            species: newSpecies,
                            location: newLocation,
                            bait: newBait,
                            captureTime: newCaptureTime
                        };

                        fetch(`https://fisher-game.firebaseio.com/catches/${id}.json`, {method: 'PUT', body: JSON.stringify(body)})
                            .then(handler)
                            .then(data => {
                                catchElement.querySelector('input.angler').value = newAngler;
                                catchElement.querySelector('input.weight').value = newWeight;
                                catchElement.querySelector('input.species').value = newSpecies;
                                catchElement.querySelector('input.location').value = newLocation;
                                catchElement.querySelector('input.bait').value = newBait;
                                catchElement.querySelector('input.captureTime').value = newCaptureTime;
                            })
                    }


                })
        }
    }


    function handler(response) {
        if (response.status >= 400) {
            throw new Error(`Something went wrong. Error: ${response.statusText}`)
        }

        return response.json();
    }

}

attachEvents();

