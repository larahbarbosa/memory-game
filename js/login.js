const input = document.querySelector('.login__input');
const button = document.querySelector('.login__button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
    if (target.value.length > 2) {
       button.removeAttribute('disabled') 
       return
    } 
    button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
    event.preventDefault(); //disabled the form's default automatic page refresh
    
    localStorage.setItem('player', input.value); //creating the key 'player' to local storage memorize the player
    window.location.href='/pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);