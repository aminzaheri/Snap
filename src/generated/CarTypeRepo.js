  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../db/repo/CarTypeRepo.js') 
   module.exports.getCarTypes = function ( skip , limit ) { 
var original = originalModule.getCarTypes; 
 return original. apply( null, arguments); 
  }; 
  /* module.exports.getCarTypeById = function ( carTypeId ) { 
var original = originalModule.getCarTypeById; 
 return original. apply( null, arguments); 
  }; 
   module.exports.getCarTypesByListOfId = function ( carTypeIds ) { 
var original = originalModule.getCarTypesByListOfId; 
 return original. apply( null, arguments); 
  }; 
   module.exports.updateCarTypeRating = function ( carType , starInc , countInc ) { 
var original = originalModule.updateCarTypeRating; 
 return original. apply( null, arguments); 
  }; 
   module.exports.saveCarType = function ( name , releaseDate , poster , director , writer , production , actors , genre , plot , runtime , country , boxOffice ) { 
var original = originalModule.saveCarType; 
 return original. apply( null, arguments); 
  }; 
   module.exports.addAllCarTypesToDbIfNeeded = function () { 
var original = originalModule.addAllCarTypesToDbIfNeeded; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"UserFavoriteRepo\",\"UserRatingRepo\"],\"autoWiredModules\":{\"UserFavoriteRepo\":{\"moduleName\":\"UserFavoriteRepo\",\"moduleAddress\":\"../generated/UserFavoriteRepo.js\"},\"UserRatingRepo\":{\"moduleName\":\"UserRatingRepo\",\"moduleAddress\":\"../generated/UserRatingRepo.js\"}}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.addAllCarTypesToDb = function () { 
var original = originalModule.addAllCarTypesToDb;
 return original. apply( null, arguments); 
  };*/ 
  
 