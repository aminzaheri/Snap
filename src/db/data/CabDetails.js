
'use strict';
const Backtory = require("../../provider/LibsProvider").backtory();
var CabDetails = Backtory.Object.extend('CabDetails',{
    getCabId(){return this.get(CabDetails.Col.cabId)},
    getCarType(){return this.get(CabDetails.Col.carType)},
    getCarRate(){return this.get(CabDetails.Col.carRate)},
    getTransferType(){return this.get(CabDetails.Col.transferType)},
    getIntialKm(){return this.get(CabDetails.Col.intialKm)},
    getIntailRate(){return this.get(CabDetails.Col.intailRate)},
    getStandardRate(){return this.get(CabDetails.Col.standardRate)},
    getFromintialKm(){return this.get(CabDetails.Col.fromintialKm)},
    getFromIntailRate(){return this.get(CabDetails.Col.fromIntailRate)},
    getFromStandardRate(){return this.get(CabDetails.Col.fromStandardRate)},
    getNightFromIntialKm(){return this.get(CabDetails.Col.nighFromIntailKm)},
    getNighFromIntailRate(){return this.get(CabDetails.Col.nighFromIntailRate)},
    getExtraHour(){return this.get(CabDetails.Col.extraHour)},
    getExtraKm(){return this.get(CabDetails.Col.extraKm)},
    getTimeType(){return this.get(CabDetails.Col.timeType)},
    getPackage(){return this.get(CabDetails.Col.package)},
    getNightPackage(){return this.get(CabDetails.Col.nightPackage)},
    getIcon(){return this.get(CabDetails.Col.icon)},
    getDescription(){return this.get(CabDetails.Col.description)},
    getRideTimeRate(){return this.get(CabDetails.Col.rideTimeRate)},        
    getNightRideTimeRate(){return this.get(CabDetails.Col.nightRideTimeRate)},        
    getDayStartTime(){return this.get(CabDetails.Col.dayStartTime)},        
    getDayEndTime(){return this.get(CabDetails.Col.dayEndTime)},        
    getNightStartTime(){return this.get(CabDetails.Col.nightStartTime)},        
    getNightEndTime(){return this.get(CabDetails.Col.nightEndTime)},        
    getNightIntailRate(){return this.get(CabDetails.Col.nightIntailRate)},        
    getNightStandardRate(){return this.get(CabDetails.Col.nightStandardRate)},        
    getSeatCapacity(){return this.get(CabDetails.Col.seatCapacity)},

    setCabId(){this.set(CabDetails.Col.cabId,value)},
    setCarType(){this.set(CabDetails.Col.carType,value)},
    setCarRate(){this.set(CabDetails.Col.carRate,value)},
    setTransferType(){this.set(CabDetails.Col.transferType,value)},
    setIntialKm(){this.set(CabDetails.Col.intialKm,value)},
    setIntailRate(){this.set(CabDetails.Col.intailRate,value)},
    setStandardRate(){this.set(CabDetails.Col.standardRate,value)},
    setFromintialKm(){this.set(CabDetails.Col.fromintialKm,value)},
    setFromIntailRate(){this.set(CabDetails.Col.fromIntailRate,value)},
    setFromStandardRate(){this.set(CabDetails.Col.fromStandardRate,value)},
    setNightFromIntialKm(){this.set(CabDetails.Col.nighFromIntailKm,value)},
    setNighFromIntailRate(){this.set(CabDetails.Col.nighFromIntailRate,value)},
    setExtraHour(){this.set(CabDetails.Col.extraHour,value)},
    setExtraKm(){this.set(CabDetails.Col.extraKm,value)},
    setTimeType(){this.set(CabDetails.Col.timeType,value)},
    setPackage(){this.set(CabDetails.Col.package,value)},
    setNightPackage(){this.set(CabDetails.Col.nightPackage,value)},
    setIcon(){this.set(CabDetails.Col.icon,value)},
    setDescription(){this.set(CabDetails.Col.description,value)},
    setRideTimeRate(){this.set(CabDetails.Col.rideTimeRate,value)},        
    setNightRideTimeRate(){this.set(CabDetails.Col.nightRideTimeRate,value)},        
    setDayStartTime(){this.set(CabDetails.Col.dayStartTime,value)},        
    setDayEndTime(){this.set(CabDetails.Col.dayEndTime,value)},        
    setNightStartTime(){this.set(CabDetails.Col.nightStartTime,value)},        
    setNightEndTime(){this.set(CabDetails.Col.nightEndTime,value)},        
    setNightIntailRate(){this.set(CabDetails.Col.nightIntailRate,value)},        
    setNightStandardRate(){this.set(CabDetails.Col.nightStandardRate,value)},        
    setSeatCapacity(){this.set(CabDetails.Col.seatCapacity,value)},
    
},{
    get Name(){return 'CabDetails'},
});
CabDetails.Col = {
    get cabId() {return 'cabId'},
    get carType(){return 'carType'},
    get carRate(){return 'carRate'},
    get transferType(){return 'transferType'},
    get intialKm() {return 'intialKm'},
    get intailRate(){return 'intailRate'},
    get standardRate(){return 'standardRate'},
    get fromintialKm(){return 'fromintialKm'},
    get fromIntailRate(){return 'fromIntailRate'},
    get fromStandardRate(){return 'fromStandardRate'},
    get nightFromIntialKm(){return 'nightFromIntialKm'},
    get nighFromIntailRate(){return 'nighFromIntailRate'},
    get extraHour(){return 'extraHour'},
    get extraKm(){return 'extraKm'},
    get timeType(){return 'timeType'},
    get package(){return 'package'},
    get nightPackage(){return 'nightPackage'},
    get icon(){return 'icon'},
    get description(){return 'description'},
    get rideTimeRate(){return 'rideTimeRate'},
    get nightRideTimeRate(){return 'nightRideTimeRate'},
    get dayStartTime(){return 'dayStartTime'},
    get dayEndTime(){return 'dayEndTime'},
    get nightStartTime(){return 'nightStartTime'},
    get nightEndTime(){return 'nightEndTime'},
    get nightIntailRate(){return 'nightIntailRate'},
    get nightStandardRate(){return 'nightStandardRate'},
    get seatCapacity(){return 'seatCapacity'},
};

Backtory.Object.registerSubclass(CabDetails.Name, CabDetails);
module.exports = CabDetails;