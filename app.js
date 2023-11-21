let cardHolderName = document.getElementById("cardOwnerName");
let cardHolderNameInput = document.getElementById("cardHolderInput");
let cardMonthExp = document.getElementById("cardMonth");
let cardMonthExpInput = document.getElementById("cardExpMMInput");
let cardYearExp = document.getElementById("cardYear");
let cardYearExpInput = document.getElementById("cardExpYYInput");
let cardCvc = document.getElementById("backCardNumber");
let cardCvcInput = document.getElementById("cardCvcInput");
let cardNumber = document.getElementById("cardNumber");
let cardNumberInput = document.getElementById("cardNumberInput");
let submitBtn = document.getElementById("confirmBtn");

let checkName;
let checkCardNumber;
let checkMonthExp;
let checkYearExp;
let checkCvc;


function setCardHolderName() {
    if(cardHolderNameInput.value === "") {
        cardHolderName.innerText = "JANE APPLESEED";
    }
    else {
        cardHolderName.innerText = cardHolderNameInput.value;
    }
};
cardHolderNameInput.addEventListener("keyup", setCardHolderName);

function setCardMonth() {
    
    if(cardMonthExpInput.value === "") {
        cardMonthExp.innerText = '00';
    }

    else {
        cardMonthExp.innerText = cardMonthExpInput.value;
    }
    
};
cardMonthExpInput.addEventListener("keyup", setCardMonth);

function setCardYear() {
    if(cardYearExpInput.value === "") {
        cardYearExp.innerText = '00';
    }
    else {
        cardYearExp.innerText = cardYearExpInput.value;
    }

};
cardYearExpInput.addEventListener("keyup", setCardYear);

function setCardCvc() {
    if(cardCvcInput.value === "") {
        cardCvc.innerText = '000';
    }
    else {
        cardCvc.innerText = cardCvcInput.value;
    }
};
cardCvcInput.addEventListener("keyup", setCardCvc);

function setCardNumber() {
    if(cardNumberInput.value === "") {
        cardNumber.innerText = "0000 0000 0000 0000"
    }

    else {
        cardNumber.innerText = cardNumberInput.value;
    }
};

cardNumberInput.addEventListener("keyup", setCardNumber);

cardNumberInput.onkeydown = function () {
    if (cardNumberInput.value.length > 0) {

        if (cardNumberInput.value.length % 4 == 0) {
            cardNumberInput.value += "    ";
        }
    }
};

cardMonthExpInput.oninput = () =>{
    if(cardMonthExpInput.value > cardMonthExpInput.maxLength) cardMonthExpInput.value = cardMonthExpInput.value.slice(0, cardMonthExpInput.maxLength);
};

cardYearExpInput.oninput = () =>{
    if(cardYearExpInput.value > cardYearExpInput.maxLength) cardYearExpInput.value = cardYearExpInput.value.slice(0, cardYearExpInput.maxLength);
};

cardCvcInput.oninput = () =>{
    if(cardCvcInput.value > cardCvcInput.maxLength) cardCvcInput.value = cardCvcInput.value.slice(0, cardCvcInput.maxLength);
};


function vaildateCardHolderName() {
    if(cardHolderNameInput.value.match(/^[A-Z a-z]+$/) && cardHolderNameInput.value.length >= 5) {
        document.getElementById("cardHolderError").innerText = "";
        cardHolderNameInput.classList.remove("error-border");
        checkName = 1;
    }

    else {
        document.getElementById("cardHolderError").innerText = "Enter cardholder name!";
        cardHolderNameInput.classList.add("error-border");
        checkName = 0;
    }
}; 

function vaildateCardNumber() {
    if(cardNumberInput.value.match(/^[1-9 &nbsp;]+$/) && cardNumberInput.value.length >= 28) {
        document.getElementById("cardNumberError").innerText = "";
        cardNumberInput.classList.remove("error-border");
        checkCardNumber = 1;
    }

    else {
        document.getElementById("cardNumberError").innerText = "Wrong format, numbers only!";
        cardNumberInput.classList.add("error-border");
        checkCardNumber = 0;
    }
}; 

function validateExpMonth() {
    if(cardMonthExpInput.value <= 12 && cardMonthExpInput.value > 0 && cardMonthExpInput.value.length === 2) {
        document.getElementById("cardMMError").innerText = "";
        cardMonthExpInput.classList.remove("error-border");
        checkMonthExp = 1;
    }

    else {
        document.getElementById("cardMMError").innerText = cardMonthExpInput.value + " is not a month";
        cardMonthExpInput.classList.add("error-border");
        checkMonthExp = 0;
    }

    if(cardMonthExpInput.value === "") {
        document.getElementById("cardMMError").innerText = "Can't be blank";
        cardMonthExpInput.classList.add("error-border");
        checkMonthExp = 0;
    }


};

function validateExpYear() {
    if(cardYearExpInput.value === "") {
        document.getElementById("cardExpError").innerText = "Can't be blank";
        cardYearExpInput.classList.add("error-border");
        checkYearExp = 0;
    }

    else {
        document.getElementById("cardExpError").innerText = "";
        cardYearExpInput.classList.remove("error-border");
        checkYearExp = 1;
    }

    if(cardYearExpInput.value.length < 2) {
        document.getElementById("cardExpError").innerText = "Wrong year!";
        cardYearExpInput.classList.add("error-border");
        checkYearExp = 0;
    }

    else {
        document.getElementById("cardExpError").innerText = "";
        cardYearExpInput.classList.remove("error-border");
        checkYearExp = 1;
    }
};

function validateCvc() {
    if(cardCvcInput.value.length < 3) {
        cardCvcInput.classList.add("error-border");
        document.getElementById("cardCvcError").innerText = "Can't be blank";
        checkCvc = 0;
    }

    else {
        cardCvcInput.classList.remove("error-border");
        document.getElementById("cardCvcError").innerText = "";
        checkCvc = 1;
    }
};

function validateAll() {
    vaildateCardHolderName();
    vaildateCardNumber();
    validateExpMonth();
    validateExpYear();
    validateCvc();
    
    if(checkYearExp === 1 && checkMonthExp === 1 && checkCardNumber === 1 && checkName === 1 && checkCvc === 1) {
        document.querySelector(".form-container").classList.add("hidden");
        document.getElementById("completeSection").classList.remove("hidden")
    }
};



submitBtn.addEventListener("click", validateAll);