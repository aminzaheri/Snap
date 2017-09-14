
'use strict';
const Backtory = require("../../provider/LibsProvider").backtory();
var AdminLogin = Backtory.Object.extend('AdminLogin',{
    getId(){return this.get(AdminLogin.Col.id)},
    getName(){return this.get(AdminLogin.Col.name)},
    getUserName(){return this.get(AdminLogin.Col.userName)},
    getPassword(){return this.get(AdminLogin.Col.password)},
    getRole(){return this.get(AdminLogin.Col.role)},
    getEmail(){return this.get(AdminLogin.Col.email)},
    getMobile(){return this.get(AdminLogin.Col.mobile)},
    getGender(){return this.get(AdminLogin.Col.gender)},
    getImage(){return this.get(AdminLogin.Col.image)},
    
    setId(value){this.set(AdminLogin.Col.id, value)},
    setName(value){this.set(AdminLogin.Col.name, value)},
    setUserName(value){this.set(AdminLogin.Col.userName, value)},
    setPassword(value){this.set(AdminLogin.Col.password, value)},
    setRole(value){this.set(AdminLogin.Col.role, value)},
    setEmail(value){this.set(AdminLogin.Col.email, value)},
    setMobile(value){this.set(AdminLogin.Col.mobile, value)},
    setGender(value){this.set(AdminLogin.Col.gender, value)},
    setImage(value){this.set(AdminLogin.Col.image, value)},    
},{
    get Name(){return 'AdminLogin'},
});
AdminLogin.Col = {
    get id(){return '_id'},
    get name(){return 'name'},
    get userName(){return 'username'},
    get password(){return 'password'},
    get role(){return 'role'},
    get email(){return 'email'},
    get mobile(){return 'mobile'},
    get gender(){return 'gender'},
    get image(){return 'image'},    
};

Backtory.Object.registerSubclass(AdminLogin.Name, AdminLogin);
module.exports = AdminLogin;