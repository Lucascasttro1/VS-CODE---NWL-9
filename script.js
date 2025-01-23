// Abrir e fechar o popup
const loginAuth = document.querySelector('.login-auth');
const popup = document.querySelector('#popup');
const closePopup = document.querySelector('#closePopup');

loginAuth.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Mostrar ou esconder a senha
const togglePassword = document.querySelector('#togglePassword');
const passwordInput = document.querySelector('#password');

togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePassword.src = type === 'password' ? 'eye-icon.png' : 'eye-icon-open.png'; // Alterar ícone
});

// Verificar se as senhas coincidem
const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const passwordMessage = document.querySelector('#passwordMessage');

confirmPassword.addEventListener('input', () => {
    if (password.value === confirmPassword.value) {
        passwordMessage.textContent = '✔️ Senhas coincidem';
        passwordMessage.style.color = 'green';
    } else {
        passwordMessage.textContent = '❌ Senhas não coincidem';
        passwordMessage.style.color = 'red';
    }
});
