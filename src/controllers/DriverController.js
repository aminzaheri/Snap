/**
 * Created by mohammadjavad on 5/28/2016.
 */
'use strict';
//TODO add support for is in favorite

/**
 * @AutoWired()
 * @Controller()
 * @Post("movieList")
 * @RequestType("PaginationRequest")
 * @ResponseType("MovieListItemResponseList")
 * @LoginRequired()
 * @Pagination()
 * @ActiveUser()
 */
exports.getCarTypeList = function (userSkip, userLimit, CarTypeRepo, CarTypeResponseHelper) {
    //let userId = activeUser.userId;
   /*return MovieRepo.addAllMoviesToDbIfNeeded().then(function(result){
        
    })*/return CarTypeRepo.getCarTypes(userSkip, userLimit).then(function(list){
        return CarTypeResponseHelper.makeCarTypeResponseList(list);
    });
};


/**
 * @AutoWired()
 * @Controller()
 * @Post("getMovie")
 * @RequestType("IdRequest")
 * @ResponseType("MovieFullResponse")
 * @LoginRequired()
 * @ActiveUser()
 */
exports.getMovieDetails = function (requestData, activeUser, MovieRepo, MovieResponseHelper) {
    let movieId = requestData.id.value();
    let userId = activeUser.userId;
    return MovieRepo.getMovieById(movieId).then(function(movie){
        return MovieResponseHelper.makeFullMovieResponse(movie, userId);
    });
};