const accountId = 123456  // constant variable=value can't be changed
let accountEmail = "moumitatg@gmail.com"
var accountPassword = "12345"
accountCity = "Gurugram"
let accountState; //undefined
//accountId = 2
accountEmail = "mmtg@gmail.com"
accountCity = "Noida"
accountPassword = "54321"
/*Prefer not to use var
because of issue in block scope and functional scope */
console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])