/**
 * Created by hamid on 8/12/16.
 */
'use strict';

const StringField = require("../../../requestDataHandler/dataTypes/StringField");
const BooleanField = require("../../../requestDataHandler/dataTypes/BooleanField");
const IdField = require("../../../requestDataHandler/dataTypes/IdField");
const IntegerField = require("../../../requestDataHandler/dataTypes/IntegerField");

const LoginUserResponse = require("../user/LoginUserResponse");

function RegisterDriverResponse(){
    this.init.apply(this, arguments);
}

RegisterDriverResponse.prototype = Object.create(LoginUserResponse.prototype);

RegisterDriverResponse.prototype.init = function(){
    this.id = new IdField(true);
    this.email = new StringField(false);
    LoginUserResponse.prototype.init.apply(this, arguments);
    return this;
};

RegisterDriverResponse.prototype._name = function(){
    return "RegisterDriverResponse";
};

/**
 * @Response("RegisterDriverResponse")
 * @Component()
 */
module.exports = RegisterDriverResponse;