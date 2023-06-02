const registForm = document.querySelector('.login-form');

registForm.addEventListener('submit', onRegistForm);

function onRegistForm(event) {
    event.preventDefault();
    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Всі поля повинні бути заповнені')
    };

    const formElements = { email: email.value, Password: password.value };
    
    console.log(formElements);
    event.currentTarget.reset();
}
