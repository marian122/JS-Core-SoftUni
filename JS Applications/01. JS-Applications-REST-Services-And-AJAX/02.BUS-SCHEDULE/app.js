function solve() {
    let info = document.getElementById('info');
    let departBtn = document.getElementById('depart');
    let arriveBtn = document.getElementById('arrive');

    let currentStop = {
        name: 'depot',
        next: 'depot'
    };

    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${currentStop.next}.json`)
            .then(response => {
                return response.json();
            })
            .then(data => {
                currentStop.name = data.name;
                currentStop.next = data.next;
                info.innerHTML = `Next stop ${currentStop.name}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
    }

    function arrive() {
        info.innerHTML = `Arriving at ${currentStop.name}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();