/**
 * Created by hamid on 8/23/16.
 */
'use strict';
const Path = require("path");
const uuid = require("node-uuid");
const Promisify = require("../util/Promisify.js");
const baseFolder = "/users";
const baseHttpAddress = require("../config").baseUrl;

/**
 * @Component()
 */
module.exports = {};


/**
 * @AutoWired()
 */
module.exports.makeCarTypeResponseList = makeCarTypeResponseList;
function makeCarTypeResponseList(carTypeList,CarTypeListItemResponse){
    let toReturn = [];
    if(!carTypeList){
        return Promise.resolve({carTypes: toReturn});
    }
    /*let carTypeIdSet = new Set();
    carTypeList.forEach(function(item){
       carTypeIdSet.add(item.getId());
    });
    let carTypeIdList = Array.from(carTypeIdSet);
    let favoriteMap = {};*/
    /*return UserFavoriteRepo.getUserFavoriteItemListById(userId, carTypeIdList).then(function(favoriteList){
        if(!favoriteList || favoriteList.length <=0 ){
            return;
        }
        favoriteList.forEach(function (favorite) {
            favoriteMap[favorite.getCarTypeId()] = favorite;
        });
    }).then(function(){*/
        carTypeList.forEach(function(carType){
            let toAdd = new CarTypeListItemResponse();
            toAdd.initFromData(carType);
            toReturn.push(toAdd);
        });
        return {carTypes: toReturn};
    //});
}

/**
 * @AutoWired()
 */
/*module.exports.makeFullMovieResponse = function(movie, userId, UserFavoriteRepo, MovieFullResponse){

    if(!movie){

        return Promise.resolve(undefined);
    }
    return UserFavoriteRepo.getUserFavoriteItem(userId, movie.getId()).then(function(userFavorite){
        let toAdd = new MovieFullResponse();
        toAdd.initFromData(movie, userFavorite);
        return toAdd
    });

};

/**
 * @AutoWired()
 */
/*module.exports.makeUserFavoriteMovieListResponse = function(userFavoriteList, MovieRepo,UserFavoriteRepo, MovieListItemResponse){
    let toReturn = [];
    if(!userFavoriteList || userFavoriteList.length <= 0){
        return Promise.resolve({movies: toReturn});
    }
    let movieIds = [];
    userFavoriteList.forEach(function(item){
        movieIds.push(item.getMovieId());
    });
    return MovieRepo.getMoviesByListOfId(movieIds).then(function(movieList){
        return makeMovieResponseList(movieList, userFavoriteList[0].getUserId(), UserFavoriteRepo, MovieListItemResponse);
    });
};*/

