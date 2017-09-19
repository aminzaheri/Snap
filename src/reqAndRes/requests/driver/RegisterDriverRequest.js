/**
 * Created by hamid on 8/12/16.
 */
'use strict';

const StringField = require("../../../requestDataHandler/dataTypes/StringField");
const IntegerField = require("../../../requestDataHandler/dataTypes/IntegerField");
const ValidatableObject = require("../../../requestDataHandler/ValidatableObject");

function RegisterDriverRequest(){
    this.init.apply(this, arguments);
}

RegisterDriverRequest.prototype = Object.create(ValidatableObject.prototype);

RegisterDriverRequest.prototype.init = function(){	
	this.name = new StringField(true);
	this.userName = new StringField(true);
    this.phone = new StringField(true);    
    this.email = new StringField(true);    
    this.password = new StringField(true);
    this.dob = new StringField(true);
    this.gender = new StringField(true);
    this.address = new StringField(true);
    this.car_make = new StringField(true);
    this.car_model = new StringField(true);
    this.car_type = new IntegerField(true);
    this.car_no = new StringField(true);
    this.seating_capacity = new StringField(true);
    this.license_no = new StringField(true);
    this.license_expiry_date = new StringField(true);
    this.license_plate = new StringField(true);
    this.insurance = new StringField(true);
   // this.isdevice = new StringField(true);
    ValidatableObject.prototype.init.apply(this, arguments);
};

RegisterDriverRequest.prototype._name = function(){
    return "RegisterDriverRequest";
};

/**
 * @Request("RegisterDriverRequest")
 */
module.exports = RegisterDriverRequest;