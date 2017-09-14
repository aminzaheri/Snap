
'use strict';
const Backtory = require("../../provider/LibsProvider").backtory();
var Wallet = Backtory.Object.extend('Wallet',{
    getId(){return this.get(Wallet.Col.id)},
    getUserName(){return this.get(Wallet.Col.userName)},
    getItemNo(){return this.get(Wallet.Col.itemNo)},
    getAmount(){return this.get(Wallet.Col.Amount)},
    getStatus(){return this.get(Wallet.Col.status)},

    setId(value){this.set(Wallet.Col.id, value)},
    setUserName(value){this.set(Wallet.Col.userName, value)},
    setItemNo(value){this.set(Wallet.Col.itemNo, value)},
    setAmount(value){this.set(Wallet.Col.amount, value)},
    setStatus(value){this.set(Wallet.Col.status, value)},

},{
    get Name(){return 'Wallet'},
});
Wallet.Col = {
    get id(){return 'id'},
    get userName(){return 'userName'},
    get itemNo(){return 'itemNo'},
    get amount(){return 'amount'},
    get status(){return 'status'},
};

Backtory.Object.registerSubclass(Wallet.Name, Wallet);
module.exports = Wallet;