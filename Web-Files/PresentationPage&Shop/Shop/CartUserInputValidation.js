const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const addressInput = document.querySelector('#address');
const mobileNumberInput = document.querySelector('#mobileNumber');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    
    if(isFormValid()==true){
        form.submit();
    }
    else{
        event.preventDefault();
    }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //USERNAME
    var name = usernameInput.value
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Name can not be empty');
    }
    else if(usernameInput.value.trim().length <5 || usernameInput.value.trim().length > 15){
        setError(usernameInput, 'Name must be min 5 and max 15 charecters');
    }
    else {
        setSuccess(usernameInput);
    }

    //EMAIL
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Provide valid email address');
    }

    //ADDRESS
    if(addressInput.value.trim()==''){
        setError(addressInput, 'Address can not be empty');
    }else if(addressInput.value.trim().length <6 || addressInput.value.trim().length >50){
        setError(addressInput, 'Address min 4 max 50 charecters');
    }else {
        setSuccess(addressInput);
    }
    
    //MOBILE NUMBER
    var mob = mobileNumberInput.value;
    if(mobileNumberInput.value.trim()==''){
        setError(mobileNumberInput, 'Mobile number can not be empty');
    }else if(mobileNumberInput.value.trim().length <= 9 || mobileNumberInput.value.trim().length >10){
        setError(mobileNumberInput, 'Please enter valid mobile number');
    }
    else if (!/^[0-9]+$/.test(mob)){
        setError(mobileNumberInput, 'Mobile numbers can contain numbers only');
    }
    else {
        setSuccess(mobileNumberInput);
    }
}



function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    return reg.test(email);
}



