
'use strict';
const Backtory = require("../../provider/LibsProvider").backtory();
var DriverStatus = Backtory.Object.extend('DriverStatus',{
    getId(){return this.get(DriverLocation.Col.id)},
    getUserName(){return this.get(DriverLocation.Col.userName)},
    getDriverId(){return this.get(DriverLocation.Col.driverId)},
    getRating(){return this.get(DriverLocation.Col.rating)},    

    setId(value){this.set(DriverLocation.Col.id, value)},
    setUserName(value){this.set(DriverLocation.Col.userName, value)},
    setDriverId(value){this.set(DriverLocation.Col.driverId, value)},
    setRating(value){this.set(DriverLocation.Col.rating, value)},

},{
    get Name(){return 'DriverStatus'},
});
DriverRating.Col = {
    get id(){return 'id'},
    get userName(){return 'userName'},
    get driverId(){return 'driverId'},
    get rating(){return 'rating'},    
};

Backtory.Object.registerSubclass(DriverStatus.Name, DriverStatus);
module.exports = DriverStatus;