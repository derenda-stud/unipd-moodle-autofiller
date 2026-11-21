// Load the username from the configuration file

(async function setUsernameValue() {
    const URL = chrome.runtime.getURL('config.json');
    const response = await fetch(URL);
    const config = await response.json();
    /* global username:writable */
    username.inputs[1].value = config.username;
})();
