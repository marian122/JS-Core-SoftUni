function getInfo() {
    let input = document.getElementById('stopId').value;
    let stopAppend = document.getElementById('stopName');
    let busesAppend = document.getElementById('buses');
    busesAppend.innerHTML = '';
    fetch(`https://judgetests.firebaseio.com/businfo/${input}.json `)
        .then(handler)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const {name, buses} = data;

            stopAppend.innerHTML = name;

            for (const bus in buses) {
                if (buses.hasOwnProperty(bus)){
                    let li = document.createElement('li');
                    li.innerHTML = `Bus ${bus} arrives in ${buses[bus]} minutes`;
                    busesAppend.appendChild(li);
                }
            }

        })
        .catch(err => {
            stopAppend.innerHTML = err.message;

        });

    function handler(response) {
        if (response.status > 400){
            throw new Error(`Error`);
        }

        return response;
    }
}