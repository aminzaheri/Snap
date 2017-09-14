
'use strict';
const Backtory = require("../../provider/LibsProvider").backtory();
var DriverDetails = Backtory.Object.extend('DriverDetails',{
    getId(){return this.get(DriverDetails.Col.Id)},
    getName(){return this.get(DriverDetails.Col.Name)},
    getUserName(){return this.get(DriverDetails.Col.userName)},
    getPassword(){return this.get(DriverDetails.Col.password)},
    getPhone(){return this.get(DriverDetails.Col.phone)},
    getAddress(){return this.get(DriverDetails.Col.address)},
    getEmail(){return this.get(DriverDetails.Col.email)},
    getLicenseNo(){return this.get(DriverDetails.Col.licenseNo)},
    getCarType(){return this.get(DriverDetails.Col.carType)},
    getCarNo(){return this.get(DriverDetails.Col.carNo)},
    getGender(){return this.get(DriverDetails.Col.gender)},
    getDob(){return this.get(DriverDetails.Col.dob)},
    getWalletAmount(){return this.get(DriverDetails.Col.walletAmount)},
    getUserStatus() {return this.get(DriverDetails.Col.userStatus)},
    getType() {return this.get(DriverDetails.Col.type)},
    getRating() {return this.get(DriverDetails.Col.rating)},
    getLicenseExpiryDate() {return this.get(DriverDetails.Col.licenseExpiryDate)},
    getInsurace() {return this.get(DriverDetails.Col.insurance)},
    getSeatingCapacity() {return this.get(DriverDetails.Col.seatingCapacity)},
    getCarModel() {return this.get(DriverDetails.Col.carModel)},
    getCarMake() {return this.get(DriverDetails.Col.carMake)},
    getImage() {return this.get(DriverDetails.Col.image)},
    getStatus() {return this.get(DriverDetails.Col.status)},
    getSocketStatus() {return this.get(DriverDetails.Col.socketStatus)},
    getFlag() {return this.get(DriverDetails.Col.flag)},

    setId(value){this.set(DriverDetails.Col.Id,value)},
    setName(value){this.set(DriverDetails.Col.Name,value)},
    setUserName(value){this.set(DriverDetails.Col.userName,value)},
    setPassword(value){this.set(DriverDetails.Col.password,value)},
    setPhone(value){this.set(DriverDetails.Col.phone,value)},
    setAddress(value){this.set(DriverDetails.Col.address,value)},
    setEmail(value){this.set(DriverDetails.Col.email,value)},
    setLicenseNo(value){this.set(DriverDetails.Col.licenseNo,value)},
    setCarType(value){this.set(DriverDetails.Col.carType,value)},
    setCarNo(value){this.set(DriverDetails.Col.carNo,value)},
    setGender(value){this.set(DriverDetails.Col.gender,value)},
    setDob(value){this.set(DriverDetails.Col.dob,value)},
    setWalletAmount(value){this.set(DriverDetails.Col.walletAmount,value)},
    setUserStatus(value) {this.set(DriverDetails.Col.userStatus,value)},
    setType(value) {this.set(DriverDetails.Col.type,value)},
    setRating(value) {this.set(DriverDetails.Col.rating,value)},
    setLicenseExpiryDate(value) {this.set(DriverDetails.Col.licenseExpiryDate,value)},
    setInsurace(value) {this.set(DriverDetails.Col.insurance,value)},
    setSeatingCapacity(value) {this.set(DriverDetails.Col.seatingCapacity,value)},
    setCarModel(value) {this.set(DriverDetails.Col.carModel,value)},
    setCarMake(value) {this.set(DriverDetails.Col.carMake,value)},
    setImage(value) {this.set(DriverDetails.Col.image,value)},
    setStatus(value) {this.set(DriverDetails.Col.status,value)},
    setSocketStatus(value) {this.set(DriverDetails.Col.socketStatus,value)},
    setFlag(value) {this.set(DriverDetails.Col.flag,value)},
},{
    get Name(){return 'DriverDetails'},
});
DriverDetails.Col = {
    get id(){return 'id'},
    get name(){return 'name'},
    get userName(){return 'userName'},
    get password(){return 'password'},
    get phone(){return 'phone'},
    get address(){return 'address'},
    get email(){return 'email'},
    get licenseNo(){return 'licenseNo'},
    get carType(){return 'carType'},
    get carNo(){return 'carNo'},
    get gender(){return 'gender'},
    get dob(){return 'dob'},
    get walletAmount(){return 'walletAmount'},
    get userStatus(){return 'userStatus'},
    get type(){return 'type'},
    get rating(){return 'rating'},
    get licenseExpiryDate(){return 'licenseExpiryDate'},
    get insurance(){return 'insurance'},
    get seatingCapacity(){return 'seatingCapacity'},
    get carModel(){return 'carModel'},
    get carMake(){return 'carMake'},
    get image(){return 'image'},
    get status(){return 'status'},
    get socketStatus(){return 'socketStatus'},
    get flag(){return 'flag'},
};

Backtory.Object.registerSubclass(DriverDetails.Name, DriverDetails);
module.exports = DriverDetails;