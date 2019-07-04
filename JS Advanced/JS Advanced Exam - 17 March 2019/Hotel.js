class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;

        this.rooms = {
            single: this.capacity / 2,
            double: this.capacity * 0.3,
            maisonette: this.capacity * 0.2
        };
    }

    get roomsPricing() {
        return {
            single: 50,
            double: 90,
            maisonette: 135
        };
    }

    get servicesPricing() {
        return {
            food: 10,
            drink: 15,
            housekeeping: 25
        };
    }

    rentARoom(clientName, roomType, nights) {
        if (this.rooms[roomType] > 0) {
            const booking = {
                clientName,
                roomType,
                nights,
                bookingNumber: this.currentBookingNumber
            };

            this.bookings.push(booking);
            this.currentBookingNumber++;
            this.rooms[roomType]--;

            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${booking.bookingNumber}.`;
        }

        let output = `No ${roomType} rooms available!`;

        for (let room in this.rooms) {
            if (this.rooms[room] > 0) {
                output += ` Available ${room} rooms: ${this.rooms[room]}.`;
            }
        }

        return output;
    }

    roomService(currentBookingNumber, serviceType) {
        let bookingIndex = this.bookings.findIndex(x => x.bookingNumber === currentBookingNumber);

        if (bookingIndex === -1) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }

        if (!this.servicesPricing.hasOwnProperty(serviceType)) {
            return `We do not offer ${serviceType} service.`;
        }

        let booking = this.bookings[bookingIndex];

        if (!booking.hasOwnProperty('services')) {
            booking['services'] = [];
        }

        booking['services'].push(serviceType);
        return `Mr./Mrs. ${booking.clientName}, Your order for ${serviceType} service has been successful.`;
    }

    checkOut(currentBookingNumber) {
        let bookingIndex = this.bookings.findIndex(x => x.bookingNumber === currentBookingNumber);

        if (bookingIndex === -1) {
            return `The booking ${currentBookingNumber} is invalid.`;
        }
        let booking = this.bookings[bookingIndex];
        let totalMoneyForBooking = this.roomsPricing[booking.roomType] * booking.nights;
        let servicesPrice = 0;

        if (booking.hasOwnProperty('services')) {
            for (let i = 0; i < booking.services.length; i++) {
               let currentService = booking.services[i];
               servicesPrice += this.servicesPricing[currentService];
            }
        }

        this.bookings.splice(bookingIndex, 1);
        this.rooms[booking.roomType]++;

        if (servicesPrice > 0){
            return `We hope you enjoyed your time here, Mr./Mrs. ${booking.clientName}.` +
                ` The total amount of money you have to pay is ${totalMoneyForBooking + servicesPrice} BGN.` +
                ` You have used additional room services, costing ${servicesPrice} BGN.`;
        }

        return `We hope you enjoyed your time here, Mr./Mrs. ${booking.clientName}.` +
            ` The total amount of money you have to pay is ${totalMoneyForBooking} BGN.`;
    }

    report(){
        let result = [];

        result.push(`${this.name.toUpperCase()} DATABASE:`);
        result.push('--------------------');

        if (this.bookings.length === 0){
            result.push('There are currently no bookings.');
            return result.join('\n');

        }

        for (let i = 0; i < this.bookings.length; i++) {
            result.push(`bookingNumber - ${this.bookings[i].bookingNumber}`);
            result.push(`clientName - ${this.bookings[i].clientName}`);
            result.push(`roomType - ${this.bookings[i].roomType}`);
            result.push(`nights - ${this.bookings[i].nights}`);

            if (this.bookings[i].hasOwnProperty('services')) {
                result.push(`services: ${this.bookings[i].services.join(', ')}`);
            }
            result.push('----------');

        }
        result.pop();
        return result.join('\n');
    }

}
