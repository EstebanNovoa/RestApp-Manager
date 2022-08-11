export class Booking{
    name;
    date;
    hour;
    noCustomer;
    constructor(name,date,hour,noCustomer){
        this.name = name;
        this.noCustomer = noCustomer;
        this.date = date;
        this.hour = hour;
    }
}