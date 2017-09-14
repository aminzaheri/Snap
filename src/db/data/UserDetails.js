
'use strict';
const Backtory = require("../../provider/LibsProvider").backtory();
const Promisify = require("../../util/Promisify");
const ErrorCodes = require("../../util/ErrorCodes");
const  TimeHelper = require('../../util/TimeHelper');
var UserDetails = Backtory.Object.extend('UserDetails',{
    getId(){return this.get(UserDetails.Col._id)},
    getImage(){return this.get(UserDetails.Col.image)},
    getName(){return this.get(UserDetails.Col.name)},
    getUserName(){return this.get(UserDetails.Col.userName)},
    getMobile(){return this.get(UserDetails.Col.mobile)},
    getEmail(){return this.get(UserDetails.Col.email)},
    getGender(){return this.get(UserDetails.Col.gender)},
    getDob(){return this.get(UserDetails.Col.dob)},
    getPassword(){return this.get(UserDetails.Col.password)},
    getPickUpAdd(){return this.get(UserDetails.Col.pickUpAdd)},
    getUserStatus(){return this.get(UserDetails.Col.userStatus)},
    getWalletAmount(){return this.get(UserDetails.Col.walletAmount)},
    getDeviceId(){return this.get(UserDetails.Col.deviceId)},
    getType(){return this.get(UserDetails.Col.type)},
    getIsDevice(){return this.get(UserDetails.Col.isDevice)},
    getDeviceToken(){return this.get(UserDetails.Col.deviceToken)},
    getFlag(){return this.get(UserDetails.Col.flag)},    

    setId(value){return this.set(UserDetails.Col._id,value)},
    setImage(value){return this.set(UserDetails.Col.image,value)},
    setName(value){return this.set(UserDetails.Col.name,value)},
    setUserName(value){return this.set(UserDetails.Col.userName,value)},
    setMobile(value){return this.set(UserDetails.Col.mobile,value)},
    setEmail(value){return this.set(UserDetails.Col.email,value)},
    setGender(value){return this.set(UserDetails.Col.gender,value)},
    setDob(value){return this.set(UserDetails.Col.dob,value)},
    setPassword(value){return this.set(UserDetails.Col.password,value)},
    setPickUpAdd(value){return this.set(UserDetails.Col.pickUpAdd,value)},
    setUserStatus(value){return this.set(UserDetails.Col.userStatus,value)},
    setWalletAmount(value){return this.set(UserDetails.Col.walletAmount,value)},
    setDeviceId(value){return this.set(UserDetails.Col.deviceId,value)},
    setType(value){return this.set(UserDetails.Col.type,value)},
    setIsDevice(value){return this.set(UserDetails.Col.isDevice,value)},
    setDeviceToken(value){return this.set(UserDetails.Col.deviceToken,value)},
    setFlag(value){return this.set(UserDetails.Col.flag,value)},
},{
    get Name(){return 'UserDetails'},
});
UserDetails.Col = {    
    get _id(){return '_id'},
    get image(){return 'image'},
    get name(){return 'name'},
    get userName(){return 'userName'},
    get mobile(){return 'mobile'},
    get email(){return 'email'},
    get gender(){return 'gender'},
    get dob(){return 'dob'},
    get password(){return 'password'},
    get pickUpAdd(){return 'pickUpAdd'},
    get userStatus(){return 'userStatus'},
    get walletAmount(){return 'walletAmount'},
    get deviceId(){return 'deviceId'},
    get type(){return 'type'},
    get isDevice(){return 'isDevice'},
    get deviceToken(){return 'deviceToken'},
    get flag(){return 'flag'},
};

Backtory.Object.registerSubclass(UserDetails.Name, UserDetails);
module.exports = UserDetails;