/**
 * Created by hamid on 1/27/17.
 */
'use strict';
const StringField = require("../../requestDataHandler/dataTypes/StringField");
const BooleanField = require("../../requestDataHandler/dataTypes/BooleanField");
const IdField = require("../../requestDataHandler/dataTypes/IdField");
const ArrayField = require("../../requestDataHandler/dataTypes/ArrayField");
const IntegerField = require("../../requestDataHandler/dataTypes/IntegerField");
const ValidatableObject = require("../../requestDataHandler/ValidatableObject");
const CarTypeListItemResponse = require("./CarTypeListItemResponse");

const FailedSuccessResponses = require("./general/FailedSuccessResponse");

function CarTypeListItemResponseList(){
    this.init.apply(this, arguments);
}

CarTypeListItemResponseList.prototype = Object.create(FailedSuccessResponses.prototype);

CarTypeListItemResponseList.prototype.init = function(){
    this.carTypes = new ArrayField(CarTypeListItemResponse);
    FailedSuccessResponses.prototype.init.apply(this, arguments);
};


CarTypeListItemResponseList.prototype._name = function(){
    return "CarTypeListItemResponseList";
};

/**
 * @Response("MovieListItemResponseList")
 * @Component()
 */
module.exports = CarTypeListItemResponseList;