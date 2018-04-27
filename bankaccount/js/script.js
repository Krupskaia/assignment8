/*eslint-env browser*/

// HELPER FUNCTION TO GET ELEMENT FROM THE DOM
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var bankAccount = function () {
    "use strict";
    var balance = 0,
        name, displayvalues;

    displayvalues = function () {
        $("owner").innerHTML = name;
        $("balance").innerHTML = balance;
    };
    return {
        getBalance: function () {
            window.console.log(balance);
            return balance;
        },
        deposit: function (depositAmount) {
                    balance = balance + depositAmount;
            /*window.console.log(depositAmount);*/
            displayvalues();
            //return balance;
        },

        withdrawal: function (withdrawalAmount) {

            if (withdrawalAmount <= balance) {
                balance = balance - withdrawalAmount;
                displayvalues();
                //window.console.log(withdrawalAmount);
                //return true;
            } else {
                window.alert("Withdrawal exceedes the balance");
            }
        },
        getOwnerName: function (owner) {
            name = owner;
            window.console.log(name);
        }
    };
};

    var myBankAccount = bankAccount();

window.addEventListener("load", function () {
    "use strict";
    var owner, depositV, withdrawal;
    $("name").addEventListener("click", function () {
        owner = window.prompt("Enter the name of owner's account");
        myBankAccount.getOwnerName(owner);
    });

    $("deposit").addEventListener("click", function () {
        depositV = parseInt(window.prompt("Enter the deposit amount"), 10);
            myBankAccount.deposit(depositV);
    });
    $("withdrawal").addEventListener("click", function () {
        withdrawal = parseInt(window.prompt("Enter the withdrawal amount"), 10);
            myBankAccount.withdrawal(withdrawal);
    });
    





});
