  var runBefore = require ('../moduleGenerator/RunBeforeAspectRunner.js') 
   var runAfter = require ('../moduleGenerator/RunAfterAspectRunner.js') 
   var runAround = require ('../moduleGenerator/RunAroundAspectRunner.js') 
   var originalModule = require ('../services/CarTypeResponseHelper.js') 
   module.exports.makeCarTypeResponseList = function ( carTypeList , userId ) { 
var original = originalModule.makeCarTypeResponseList; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"carTypeList\",\"userId\",\"CarTypeListItemResponse\"],\"autoWiredModules\":{\"UserFavoriteRepo\":{\"moduleName\":\"UserFavoriteRepo\",\"moduleAddress\":\"../generated/UserFavoriteRepo.js\"},\"CarTypeListItemResponse\":{\"moduleName\":\"CarTypeListItemResponse\",\"moduleAddress\":\"../reqAndRes/responses/CarTypeListItemResponse.js\"}}}"); 
 //original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"carTypeList\",\"userId\",\"CarTypeListItemResponse\"],\"autoWiredModules\":\"CarTypeListItemResponse\":{\"moduleName\":\"CarTypeListItemResponse\",\"moduleAddress\":\"../reqAndRes/responses/CarTypeListItemResponse.js\"}}}"); 
 //original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"carTypeList\",\"userId\"],\"autoWiredModules\":{\"UserFavoriteRepo\":{\"moduleName\":\"UserFavoriteRepo\",\"moduleAddress\":\"../generated/UserFavoriteRepo.js\"},\"CarTypeListItemResponse\":{\"moduleName\":\"CarTypeListItemResponse\",\"moduleAddress\":\"../reqAndRes/responses/CarTypeListItemResponse.js\"}}}"); 
 return original. apply( null, arguments); 
  }; 
  /* module.exports.makeFullMovieResponse = function ( movie , userId ) { 
var original = originalModule.makeFullMovieResponse; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"movie\",\"userId\",\"UserFavoriteRepo\",\"MovieFullResponse\"],\"autoWiredModules\":{\"UserFavoriteRepo\":{\"moduleName\":\"UserFavoriteRepo\",\"moduleAddress\":\"../generated/UserFavoriteRepo.js\"},\"MovieFullResponse\":{\"moduleName\":\"MovieFullResponse\",\"moduleAddress\":\"../reqAndRes/responses/MovieFullResponse.js\"}}}"); 
 return original. apply( null, arguments); 
  }; 
   module.exports.makeUserFavoriteMovieListResponse = function ( userFavoriteList ) { 
var original = originalModule.makeUserFavoriteMovieListResponse; 
 original =  runAround( original, originalModule, __dirname, "../annotationRuntimeModules/AutoWired_AspectItem_75053.js", "aspect", "{\"originalArguments\":[\"userFavoriteList\",\"MovieRepo\",\"UserFavoriteRepo\",\"MovieListItemResponse\"],\"autoWiredModules\":{\"MovieRepo\":{\"moduleName\":\"MovieRepo\",\"moduleAddress\":\"../generated/MovieRepo.js\"},\"UserFavoriteRepo\":{\"moduleName\":\"UserFavoriteRepo\",\"moduleAddress\":\"../generated/UserFavoriteRepo.js\"},\"MovieListItemResponse\":{\"moduleName\":\"MovieListItemResponse\",\"moduleAddress\":\"../reqAndRes/responses/MovieListItemResponse.js\"}}}"); 
 return original. apply( null, arguments); 
  };*/