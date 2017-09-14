
'use strict';
const Backtory = require("../../provider/LibsProvider").backtory();
var DriverLocation = Backtory.Object.extend('DriverLocation',{    
    getId(){return this.get(DriverLocation.Col.id)},
    getDriverId(){return this.get(DriverLocation.Col.driverId)},
    getDriverLat(){return this.get(DriverLocation.Col.driverLat)},
    getDriverLong(){return this.get(DriverLocation.Col.driverLong)},    

    setId(value){this.set(DriverLocation.Col.id, value)},
    setDriverId(value){this.set(DriverLocation.Col.driverId, value)},
    setDriverLat(value){this.set(DriverLocation.Col.driverLat, value)},
    setDriverLong(value){this.set(DriverLocation.Col.driverLong, value)},

},{
    get Name(){return 'DriverLocation'},
});
DriverLocation.Col = {
    get id(){return 'id'},
    get driverId(){return 'driverId'},
    get driverLat(){return 'driverLat'},
    get driverLong(){return 'driverLong'},    
};

Backtory.Object.registerSubclass(DriverLocation.Name, DriverLocation);
module.exports = DriverLocation;