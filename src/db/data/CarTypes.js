'use strict';
const Backtory = require("../../provider/LibsProvider").backtory();
var CarTypes = Backtory.Object.extend('CarTypes',{
    getId(){return this.get(CarTypes.Col.id)},
    getCarType(){return this.get(CarTypes.Col.carType)},
    getCarIcon(){return this.get(CarTypes.Col.carIcon)},

    setId(value){this.set(CarTypes.Col.id, value)},
    setUserName(value){this.set(CarTypes.Col.carType, value)},
    setItemNo(value){this.set(CarTypes.Col.carIcon, value)},    

},{
    get Name(){return 'CarTypes'},
});
CarTypes.Col = {
    get id(){return '_id'},
    get carType(){return 'car_type'},
    get carIcon(){return 'car_icon'},
    get CreationDate(){return 'createdAt'},
};

Backtory.Object.registerSubclass(CarTypes.Name, CarTypes);
module.exports = CarTypes;