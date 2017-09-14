/**
 * Created by mohammadjavad on 5/28/2016.
 */

"use strict";

var config = require("../config");
var unirest = require("unirest");
var authUrl = 'https://api.backtory.com/auth';
const Promisify = require("../util/Promisify");
const UserDetails = require("../db/data/UserDetails");

const DefaultUserProfilePic = "https://robohash.org/";

/**
 * @AutoWired()
 * @Controller()
 * @Post("registerUser")
 * @RequestType("RegisterUserRequest")
 * @ResponseType("RegisterUserResponse")
 */
exports.registerUser = function (Backtory, UserDetailsRepo, ErrorCodes, MergeObject, requestData) {
    let user = {        
        "username": requestData.userName.value(),
        "email": requestData.email.value(),
        "password": requestData.password.value(),        
    };
    let savedUser = undefined;
    let promise = Promisify.wrap(Backtory.Users.signUp, user);    
    return promise.then(function (user) {        
        let userDetails = new UserDetails();        
        userDetails.setUserName(requestData.userName.value());
        userDetails.setPassword(requestData.password.value());
        userDetails.setEmail(requestData.email.value());        
        return Promisify.wrapWithThis(userDetails.save, userDetails);
    }).then(function (saveResponse) {        
        savedUser = saveResponse;
        return loginInternal(saveResponse.getEmail(), requestData.password.value());
    }).then(function (loginResult) {        
        return MergeObject({
            id: savedUser.getId(),
            email: savedUser.getEmail()
        }, loginResult)
    });
};


/**
 * @AutoWired()
 * @Controller()
 * @Post("login")
 * @RequestType("LoginUserRequest")
 * @ResponseType("LoginUserResponse")
 */
exports.login = function (ErrorCodes, requestData) {
    var username = requestData.username.value();
    var password = requestData.password.value();
    return loginInternal(username, password);
};


function loginInternal(username, password) {    
    var header = JSON.parse(JSON.stringify(config.lambdaHeaders));
    header["X-Backtory-Authentication-Key"] = config.integratedMasterKey;    
    return new Promise(function (resolve, reject) {        
        unirest.post(authUrl + '/login/').headers(header).field('username', username).field('password', password)
            .end(function (response) {                
                if (response.status === 200) {                    
                    let result = {
                        accessToken: response.body["access_token"],
                        tokenType: response.body["token_type"],
                        refreshToken: response.body["refresh_token"],
                        expiresIn: response.body["expires_in"],
                        scope: response.body["scope"],
                        jti: response.body["jti"]
                    };
                    resolve(result);
                } else {                    
                    reject("cannot login.");
                }
            });
    });
}

/**
 * @AutoWired()
 * @Controller()
 * @Post("refreshLogin")
 * @RequestType("RefreshLoginRequest")
 * @ResponseType("LoginUserResponse")
 */
exports.refreshLogin = function (requestData) {
    var refreshToken = requestData.refreshToken.value();
    var header = JSON.parse(JSON.stringify(config.lambdaHeaders));
    header["X-Backtory-Authentication-Key"] = config.clientKey;
    header["X-Backtory-Authentication-Refresh"] = 1;
    return new Promise(function (resolve, reject) {
        unirest.post(authUrl + '/login/').headers(header).field('refresh_token', refreshToken)
            .end(function (response) {
                if (response.status === 200) {
                    let result = {
                        accessToken: response.body["access_token"],
                        tokenType: response.body["token_type"],
                        refreshToken: response.body["refresh_token"],
                        expiresIn: response.body["expires_in"],
                        scope: response.body["scope"],
                        jti: response.body["jti"]
                    };
                    resolve(result);
                } else {
                    reject("cannot refresh");
                }
            });
    });

};

/**
 * @AutoWired()
 * @Controller()
 * @Post("forgotPassword")
 * @RequestType("ForgotPasswordRequest")
 * @ResponseType("FailedSuccessResponse")
 */
exports.forgotPassword = function (requestData) {
    var username = requestData.username.value();
    var header = JSON.parse(JSON.stringify(config.lambdaHeaders));
    header["X-Backtory-Authentication-Key"] = config.integratedMasterKey;
    return new Promise(function (resolve, reject) {
        unirest.post(authUrl + '/forgot-password').headers(header).query({
                'instance-id': config.integratedMasterKey,
                'username': username
            })
            .end(function (response) {
                if (response.status === 200) {
                    resolve({success: true});
                }                
                reject(response.status);
            });
    });
};



/**
 * @AutoWired()
 * @Controller()
 * @Post("editProfile")
 * @RequestType("EditProfileRequest")
 * @ResponseType("FailedSuccessUserDetailsResponse")
 * @LoginRequired()
 * @ActiveUser()
 */
exports.editProfile = function (activeUser, requestData, FileManager, UserDetailsRepo, FailedSuccessUserDetailsResponse) {
    let imageUri = requestData.profilePic.value();
    return Promise.resolve(true).then(function(){
        if(imageUri){
            return FileManager.addImageFile(activeUser.userId, imageUri).then(function (imagePath) {
                FileManager.convertToLink(imagePath);
            });
        }else{
            return undefined;
        }
    }).then(function(path){
       return UserDetailsRepo.updateInfo(activeUser.userId, requestData.fullName.value(), path, requestData.description.value());
    }).then(function(result){
        let toReturn = new FailedSuccessUserDetailsResponse();
        toReturn.initFromData(result, true);
        return toReturn;
    });

};

/**
 * @AutoWired()
 * @Controller()
 * @Post("getProfile")
 * @ResponseType("FailedSuccessUserDetailsResponse")
 * @LoginRequired()
 * @ActiveUser()
 */
exports.getProfile = function (activeUser, UserDetailsRepo, FailedSuccessUserDetailsResponse) {
    return UserDetailsRepo.getInfo(activeUser.userId).then(function(result){
        let toReturn = new FailedSuccessUserDetailsResponse();
        toReturn.initFromData(result, true);
        return toReturn;
    });
};

/**
 * @AutoWired()
 * @Controller()
 * @Post("getUserProfile")
 * @RequestType("IdRequest")
 * @ResponseType("FailedSuccessUserDetailsResponse")
 * @LoginRequired()
 * @ActiveUser()
 */
exports.getUserProfile = function (activeUser, requestData, UserDetailsRepo, FailedSuccessUserDetailsResponse) {
    return UserDetailsRepo.getInfo(requestData.id.value()).then(function(result){
        let toReturn = new FailedSuccessUserDetailsResponse();
        toReturn.initFromData(result, true);
        return toReturn;
    });
};