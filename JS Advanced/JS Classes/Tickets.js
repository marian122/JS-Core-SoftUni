function solve(arr, sort) {
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    let tickets = [];

    for (let ticket of arr){
        let input = ticket.split('|');
        let destination = input[0];
        let price = +input[1];
        let status = input[2];

        const tick = new Ticket(destination, price, status);

        tickets.push(tick);
    }
    
    switch (sort) {
        case'destination':
            return tickets.sort((a,b) => a.destination.localeCompare(b.destination));
        case'price':
            return tickets.sort((a,b) => a.price - b.price);
        case'status':
            return tickets.sort((a,b) => a.status.localeCompare(b.status));

    }
}