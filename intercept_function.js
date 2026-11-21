// Intercept the function that overrides the username's value

const valueProperty = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value');
Object.defineProperty(HTMLInputElement.prototype, 'value', {
    ...valueProperty,
    set(value) {
        if (this.id != 'j_username_js' && value != 'nome.cognome') {
            valueProperty.set.call(this, value);
        }
    }
});
