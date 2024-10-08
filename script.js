// Validating fields code
document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('mainForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    email.addEventListener('input', () => {
        validateField(email, isEmail(email.value.trim()), 'Insira um email válido');
    });

    password.addEventListener('input', () => {
        validateField(password, password.value.trim().length >= 8, 'Senha inválida');
    });

    function checkInputs() {
        let isValid = true;
        validateField(email, isEmail(email.value.trim()), 'Insira um emai válido');
        validateField(password, password.value.trim().length >= 8, 'Sua senha deve conter 8 caracteres ou mais');

        document.querySelectorAll('.form-control').forEach((control) => {
            if (control.classList.contains('error')) {
                isValid = false;
            }
        });

        return isValid;

    }

    function validateField(input, condition, errorMessage) {
        if (condition) {
            setSuccess(input);
        } else {
            setError(input, errorMessage);
        }
    }

    function setError(input, message) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control error';
        icon.className = 'icon fas fa-times-circle';
        input.placeholder = message;
    }

    function setSuccess(input) {
        const formControl = input.parentElement;
        const icon = formControl.querySelector('.icon');
        formControl.className = 'form-control success';
        icon.className = 'icon fas fa-check-circle';
    }

    function isEmail(email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
    }

});
// função para o botão de entrar funcionar ou não
function toggleButton() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
  
    if (email && password) {
      document.querySelector('#login-button').disabled = false;
      return
    }
    document.querySelector('#login-button').disabled = true;
  }
// função para o botão de forgotpassword funcionar ou não (não está funcionando)
function forgotpassword () {
    const email = document.querySelector('#email').value;
    
    if (!email) {
        document.querySelector('#forgotpassword').disabled = false;
        return
        }
    document.querySelector('#forgotpassword').disabled = true;
    }

  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAulnW0G9_F1qmO6SHYJ-pUY-MV3gRluj0",
    authDomain: "monitoramento-geta.firebaseapp.com",
    projectId: "monitoramento-geta",
    storageBucket: "monitoramento-geta.appspot.com",
    messagingSenderId: "813838838583",
    appId: "1:813838838583:web:45f50db62147ac719dc8b2",
    measurementId: "G-R3VLRMLEPT"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);