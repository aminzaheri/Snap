let config = {};

config.authInstanceId = "594cc3b2e4b0ad2912a3daf1";
config.objectSorageInstanceId = "594cc3b2e4b0ad2912a3daf3";
config.integratedMasterKey = "08d27f2ff12145c3b62ef3bc";
config.clientKey = "594cc3b2e4b08b4566ddf485";
config.cloudCode = "594cc3b3e4b0ad2912a3daf5";
config.cdnInstanceId = "5958d0c4e4b03f9a23ca6e22";

config.baseUrl = "http://storage.backtory.com/aminBucket";


config.lambdaHeaders =
    {
        'x-backtory-authentication-id': config.authInstanceId,
        'x-backtory-cache-mode': "No-Cache"
    };
module.exports = config;