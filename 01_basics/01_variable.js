const accountId = 131396
let accountEmail = "hiren@google.com"
var accountPassword = "12345"
accountCity = "surat"
let accountState;

// accountId = 3 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "43215"
accountCity = "amreli"

/*
prefer not use var
because of issue in block scope and functional scope 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

