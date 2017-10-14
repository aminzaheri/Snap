/**
 * Created by hamid on 1/27/17.
 */
'use strict';

const StringField = require("../../requestDataHandler/dataTypes/StringField");
const BooleanField = require("../../requestDataHandler/dataTypes/BooleanField");
const NumberField = require("../../requestDataHandler/dataTypes/NumberField");
const IntegerField = require("../../requestDataHandler/dataTypes/IntegerField");
const UserInfoResponse = require("./user/UserInfoResponse");

const BaseObject = require("../../requestDataHandler/BaseObject");

function CarTypeListItemResponse(){
    this.init.apply(this, arguments);
}

CarTypeListItemResponse.prototype = Object.create(BaseObject.prototype);

CarTypeListItemResponse.prototype.init = function(){
    this.id = new StringField();
    this.carType = new StringField();
    this.carIcon = new StringField();
    BaseObject.prototype.init.apply(this, arguments);
};

CarTypeListItemResponse.prototype.initFromData = function(carType){
    if(!carType){
        return;
    }
    let data = {
        id: carType.getId(),
        carType: carType.getCarType(),
        carIcon: carType.getCarIcon(),
    };
    this.init(data);
};

CarTypeListItemResponse.prototype._name = function(){
    return "CarTypeListItemResponse";
};

/**
 * @Response("MovieListItemResponse")
 * @Component()
 */
module.exports = CarTypeListItemResponse;