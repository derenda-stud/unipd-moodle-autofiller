// Adjust the fields' attributes to make autocompletion work

const username = {
    labels: document.querySelectorAll('label[for*="username"]'),
    inputs: document.querySelectorAll('input[id*="username"]')
};

for (let i = 0; i < username.labels.length; ++i) {
    username.labels[i].setAttribute('for', username.inputs[i].getAttribute('id'));
}
username.inputs[1].setAttribute('name', 'username');
username.inputs[1].setAttribute('autocomplete', 'username');

const submitButton = document.querySelector('button[type="submit"]');
submitButton.addEventListener('submit', function setUsernameAttribute() {
    username.inputs[1].setAttribute('name', 'j_username_js');
}, true);

const domains = document.querySelectorAll('input[name="dominio"]');
domains[0].removeAttribute('checked');
domains[1].setAttribute('checked', 'checked');
