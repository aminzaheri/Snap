
'use strict';
const Backtory = require("../../provider/LibsProvider").backtory();
var DriverRating = Backtory.Object.extend('DriverRating',{
    getId(){return this.get(DriverRating.Col.id)},
    getDriverId(){return this.get(DriverRating.Col.driverId)},
    getBookingId(){return this.get(DriverRating.Col.bookingId)},    
    getStartTime(){return this.get(DriverRating.Col.startTime)},
    getEndTime(){return this.get(DriverRating.Col.endTime)},
    getDriverFlag(){return this.get(DriverRating.Col.driverFlag)},

    setId(value){this.set(DriverRating.Col.id, value)},
    setDriverId(value){this.set(DriverRating.Col.driverId, value)},
    setBookingId(value){this.set(DriverRating.Col.bookingId, value)},    
    setStartTime(value){this.set(DriverRating.Col.startTime, value)},
    setEndTime(value){this.set(DriverRating.Col.endTime, value)},
    setDriverFlag(value){this.set(DriverRating.Col.driverFlag, value)},

},{
    get Name(){return 'DriverRating'},
});
DriverRating.Col = {
    get id(){return 'id'},
    get driverId(){return 'driverId'},
    get bookingId(){return 'bookingId'},    
    get startTime(){return 'startTime'},
    get endTime(){return 'endTime'},
    get driverFlag(){return 'driverFlag'},
};

Backtory.Object.registerSubclass(DriverRating.Name, DriverRating);
module.exports = DriverRating;