var form = document.getElementById('form')
var require = document.querySelector('#require')
var max = document.querySelector('#max')
var reqMinMax = document.querySelector('#reqMinMax')
var notReq = document.querySelector('#notReq')
var lettersOnly = document.querySelector('#lettersOnly')
var radio = document.querySelector('#radio')
var radioYesInput = document.querySelector('#radioYesInput')
var email = document.querySelector('#email')
var validate = document.querySelector('#validate')
// d is metacharacter used to find a non-digit character , g is for it to do a global search and not stop at the first result
var metachar = /\d/g;
var specialChar = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
var errors = [];
var success = false;

function validateRequire () {
    if (require.value == "") {
        require.classList.add('invalid')
        errors.push("Field 1: You must fill the required field");
    } else {
        require.classList.remove('invalid')
    }
}

function validateMax(){
    if (max.value.length > '8') {
        max.classList.add('invalid')
        errors.push("Field 2: Maximum character length must be 8 or less");
    } else {
        max.classList.remove('invalid')
    }
}

function validateReqMinMax(){
    if (reqMinMax.value.length < 10 || reqMinMax.value.length > 25) {
        reqMinMax.classList.add('invalid')
        errors.push("Field 3: Character count must be between 10 and 25");
    } else {
        reqMinMax.classList.remove('invalid')
    }
}

function validateNotReq(){
    if (notReq.value.length > 0) {
        if (notReq.value.length < 10 || notReq.value.length > 25) {
            notReq.classList.add('invalid')
            errors.push("Field 4: You must either not put any character or have a character count between 10 and 25")
        } else {
            notReq.classList.remove('invalid')
        }
    }
}

function validateLettersOnly(){
    if (metachar.test(lettersOnly.value) || specialChar.test(lettersOnly.value) == true) {
        lettersOnly.classList.add('invalid')
        errors.push("Field 5: Letters only allowed")
    } else {
        lettersOnly.classList.remove('invalid')
    }
}

function validateRadioYesInput(){
    if (radio.checked == true) {
        if (radioYesInput.value.length == "") {
            radioYesInput.classList.add('invalid')
            errors.push("Field 6 (Radio Button): Yes Option is checked, please fill in field")
        } else {
            radioYesInput.classList.remove('invalid')
        }
    }
}

function validateEmail(){
    var atPosition = email.value.indexOf('@');
    var dotPosition = email.value.lastIndexOf(".");

    if (email.value.length > 0) {

        if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 > email.value.length) {
            email.classList.add('invalid')
            errors.push("Optional Field: Enter a valid email!")
        } else {
            email.classList.remove('invalid')
        }
    }
}
//foreach
function showErrors (){
    if (errors.length > 0){
        var showAllErrors = 'Errors:\n\n';
        for (var i=0; i < errors.length; i++){
            showAllErrors+=errors[i] + "\n";
        }
        errors.sort();
        alert(showAllErrors);
        errors = [];
        // return false;
    } else {
        success = true;
    }
}

function dolt(){
    if($('#validate').css('left') == '0px') {
        $('#validate').animate({left: 1500}, 1500, dolt)
    }
    else {
        $('#validate').animate({left: 0}, 10000, dolt)
    }
}

function message(){
    if(success == true){
        validate.value = "SUCCESS!"
        dolt()
        // alert('Form Submitted')
    }
}

form.addEventListener('submit',function (e){
    e.preventDefault()
    validateEmail()
    validateRequire()
    validateMax()
    validateReqMinMax()
    validateNotReq()
    validateLettersOnly()
    validateRadioYesInput()
    showErrors()
    message()
})


