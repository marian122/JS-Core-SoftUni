function attachEvents() {
    const elements = {
        input: document.getElementById('location'),
        getButton: document.getElementById('submit'),
        forecast: document.getElementById('forecast'),
        current: document.getElementById('current'),
        upcoming: document.getElementById('upcoming')
    };

    const symbols = {
        sunny: '☀',
        partlySunny: '⛅',
        overcast: '☁',
        rain: '☂',
        degrees: '°'
    };

    elements.getButton.addEventListener('click', weatherInfo);

    function weatherInfo() {
        fetch('https://judgetests.firebaseio.com/locations.json')
            .then(handler)
            .then(data => {
                let location = data.filter((l) => l.name === elements.input.value)[0];
                console.log(location);
                elements.forecast.style.display = 'block';

                fetch(`https://judgetests.firebaseio.com/forecast/today/${location.code}.json`)
                    .then(handler)
                    .then(data => {
                        let forecastsDiv = document.createElement('div');
                        forecastsDiv.className = 'forecasts';

                        let symbol = symbols[data.forecast.condition.toLowerCase()];

                        let spanCondition = document.createElement('span');
                        spanCondition.className += 'condition symbol';
                        spanCondition.textContent = symbol;

                        let spanHolder = document.createElement('span');
                        spanHolder.className = 'condition';

                        let spanName = document.createElement('span');
                        spanName.className = 'forecast-data';
                        spanName.textContent = data.name;

                        let degrees = `${data.forecast.low}${symbols.degrees}/${data.forecast.high}`;

                        let spanDegree = document.createElement('span');
                        spanDegree.className = 'forecast-data';
                        spanDegree.textContent = degrees;

                        let spanSymbol = document.createElement('span');
                        spanSymbol.className = 'forecast-data';
                        spanSymbol.textContent = data.forecast.condition;

                        elements.current.appendChild(forecastsDiv);
                        forecastsDiv.appendChild(spanCondition);
                        forecastsDiv.appendChild(spanHolder);

                        spanHolder.appendChild(spanName);
                        spanHolder.appendChild(spanDegree);
                        spanHolder.appendChild(spanSymbol);


                    });

                fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${location.code}.json`)
                    .then(handler)
                    .then(data => {
                        let forecastsDiv = document.createElement('div');
                        forecastsDiv.className = 'forecast-info';

                        data.forecast.forEach((s) => {
                            let spanHolder = document.createElement('span');
                            spanHolder.className = 'upcoming';

                            let symbol = symbols[s.condition.toLowerCase()] || symbols['partlySunny'];
                            let spanSymbol = document.createElement('span');
                            spanSymbol.className = 'symbol';
                            spanSymbol.textContent = symbol;

                            let degrees = `${s.low}${symbols.degrees}/${s.high}${symbols.degrees}`;
                            let spanDegree = document.createElement('span');
                            spanDegree.className = 'forecast-data';
                            spanDegree.textContent = degrees;

                            let spanCloud = document.createElement('span');
                            spanCloud.className = 'forecast-data';
                            spanCloud.textContent = s.condition;

                            elements.upcoming.appendChild(forecastsDiv);
                            forecastsDiv.appendChild(spanHolder);
                            spanHolder.appendChild(spanSymbol);
                            spanHolder.appendChild(spanDegree);
                            spanHolder.appendChild(spanCloud);
                        });
                    });
            });
    }
    function handler(response) {
        if (response.status > 400) {
            throw new Error(`Something went wrong! Error: ${response.statusText}`);
        }

        return response.json();
    }
}

attachEvents();