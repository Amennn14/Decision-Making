function ticketPrice(age) {
    if (age <= 12) {
        return "Ticket price: $10";
    } else if (age >= 13) {
        if (age <= 17) {
            return "Ticket price: $15";
        }
    }
    return "Ticket price: $20";
}