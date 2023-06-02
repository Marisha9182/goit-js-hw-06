const inputEl = document.querySelector('#validation-input');
const numberLength = inputEl.dataset.length;

inputEl.addEventListener('blur', onSumbolInput);

function onSumbolInput(event){
    if(numberLength != event.currentTarget.value.length){
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
    else{
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
}