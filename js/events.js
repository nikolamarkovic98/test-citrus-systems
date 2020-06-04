const addPhoneEvents = () => {
    const phoneSpan = document.getElementById('phone-span');
    let error;
    document.querySelector('.box--phone').addEventListener('focus', e => moveSpan(e, 0, phoneSpan, 'Enter your phone number please'));
    document.querySelector('.box--phone').addEventListener('blur', e => {
        if(e.target.value.length == 0){
            // empty input
            if(error == 'Phone field cannot be empty') return;
            states[0] = 'Phone field cannot be empty';
            error = 'Phone field cannot be empty';
            setTimeout(() => {
                e.target.style.borderColor = 'red';
                document.querySelector('#phone-hr').style.borderColor = 'rgb(255, 0, 0, 0.2)';
                writeText(0, phoneSpan, 'Phone field cannot be empty', 'red');
            }, 500);
        } else {
            // user entered email
            const phoneNumber = e.target.value.trim();
            
            const valid = validateNumber(phoneNumber);
            
            if(valid){
                if(states[0] == 'Success') return;
                states[0] = 'Success';
                writeText(0, phoneSpan, 'Good phone number!', '#88C48D');
                // change styles
                e.target.style.borderColor = '#88c48d';
                document.querySelector('#phone-hr').style.borderColor = 'rgb(136, 196, 141, 0.2)';
            } else {
                if(states[0] == 'Not valid phone number') return;
                states[0] = 'Not valid phone number';
                writeText(0, phoneSpan, 'Not valid phone number', 'red');
                e.target.style.borderColor = 'red';
                document.querySelector('#phone-hr').style.borderColor = 'rgb(255, 0, 0, 0.2)';
            }
        }
        isEverythingOk();
    });
}

const addEmailEvents = () => {
    const emailSpan = document.getElementById('email-span');
    let error;
    document.querySelector('.box--email').addEventListener('focus', e => moveSpan(e, 0, emailSpan, 'Enter your email please'));
    document.querySelector('.box--email').addEventListener('blur', e => {
        if(e.target.value.length == 0){
            // empty input
            if(error == 'Email field cannot be empty') return;
            states[0] = 'Email field cannot be empty';
            error = 'Email field cannot be empty';
            setTimeout(() => {
                e.target.style.borderColor = 'red';
                document.querySelector('#email-hr').style.borderColor = 'rgb(255, 0, 0, 0.2)';
                writeText(0, emailSpan, 'Email field cannot be empty', 'red');
            }, 500);
        } else {
            // user entered email
            const email = e.target.value.trim();
            const valid = validateEmail(email);
            
            if(valid){
                if(states[0] == 'Success') return;
                states[0] = 'Success';
                writeText(0, emailSpan, 'Good email!', '#88C48D');
                // change styles
                e.target.style.borderColor = '#88c48d';
                document.querySelector('#email-hr').style.borderColor = 'rgb(136, 196, 141, 0.2)';
            } else {
                if(states[0] == 'Not valid email address') return;
                states[0] = 'Not valid email address';
                writeText(0, emailSpan, 'Not valid email address', 'red');
                e.target.style.borderColor = 'red';
                document.querySelector('#email-hr').style.borderColor = 'rgb(255, 0, 0, 0.2)';
            }
        }
        isEverythingOk();
    });
}

const addPasswordEvents = () => {
    const passwordSpan = document.getElementById('password-span');
    let error;
    document.querySelector('.box--password').addEventListener('focus', e => moveSpan(e, 1, passwordSpan, 'Enter your password please'));
    document.querySelector('.box--password').addEventListener('blur', e => {
        // all logic happens when input loses focus
        if(e.target.value.length == 0){
            // empty input
            if(error == 'Password field cannot be empty') return;
            error = 'Password field cannot be empty'
            states[1] = 'Password field cannot be empty';
            setTimeout(() => {
                e.target.style.borderColor = 'red';
                document.querySelector('#password-hr').style.borderColor = 'rgb(255, 0, 0, 0.2)';
                writeText(1, passwordSpan, 'Password field cannot be empty', 'red');
            }, 500);
        } else {
            // user entered password
            const password = e.target.value.trim();

            const valid = password.length > 5 ? true : false;
            
            if(valid){
                if(states[1] == 'Success') return;
                states[1] = 'Success';
                writeText(1, passwordSpan, 'Good Password!', '#88C48D');
                e.target.style.borderColor = '#88C48D';
                document.querySelector('#password-hr').style.borderColor = 'rgb(136, 196, 141, 0.2)';
            } else {
                if(error == 'Must be atleast 6 characters') return;
                error = 'Must be atleast 6 characters';
                states[1] = 'Must be atleast 6 characters';
                writeText(1, passwordSpan, 'Must be atleast 6 characters', 'red');
                e.target.style.borderColor = 'red';
                document.querySelector('#password-hr').style.borderColor = 'rgb(255, 0, 0, 0.2)';
            }
        }
        isEverythingOk();
    });
}

const addPasswordConfirmEvents = () => {
    const confirmSpan = document.getElementById('password-confirm-span');
    let error;
    // error is saved in error variable - it's used for preventing same animation
    document.querySelector('.box__password-confirm').addEventListener('focus', e => moveSpan(e, 2, confirmSpan, 'Confirm your password'));
    document.querySelector('.box__password-confirm').addEventListener('blur', e => {
        if(e.target.value.length == 0){
            // empty input
            if(error == 'Passwords do not match!') return;
            error = 'Passwords do not match!';
            states[2] = 'Passwords do not match!';
            setTimeout(() => {
                e.target.style.borderColor = 'red';
                document.querySelector('#confirm-hr').style.borderColor = 'rgb(255, 0, 0, 0.2)';
                writeText(2, confirmSpan, 'Passwords do not match!', 'red');
            }, 500);
        } else {
            // user entered password
            const confirmedPassword = e.target.value.trim();
            const password = document.querySelector('.box--password').value;

            const validPassword = password == confirmedPassword ? true : false;
            
            if(validPassword){
                if(states[2] == 'Success') return;
                states[2] = 'Success';
                writeText(2, confirmSpan, 'Passwords Match!', '#88C48D');
                document.querySelector('#confirm-hr').style.borderColor = 'rgb(136, 196, 141, 0.2)';
                e.target.style.borderColor = '#88C48D';
            } else {
                if(states[2] == 'Wrong') return;
                states[2] = 'Passwords do not match!';
                writeText(2, confirmSpan, 'Passwords do not match!', 'red');
                document.querySelector('#confirm-hr').style.borderColor = 'rgb(255, 0, 0, 0.2)';
                e.target.style.borderColor = 'red';
            }
        }
        isEverythingOk();
    });
}

const addSelectEvents = () => {
    document.querySelector('.form__currency').addEventListener('change', e => {
        if(e.target.value != 'Select currency'){
            states[3] = 'Success';
            // change some style
            document.getElementById('select-hr').style.borderColor = 'rgb(136, 196, 141, 0.2)';
            e.target.style.borderColor = '#88c48d';
        } else {
            states[3] = 'Select currency';
            document.getElementById('select-hr').style.borderColor = 'rgb(255, 0, 0, 0.2)';
            e.target.style.borderColor = 'red';
        }
        isEverythingOk();
    });
}

const addCheckboxesEvents = () => {
    // when user checks the checkbox - states change with success or appropriate error
    document.querySelector('#terms').addEventListener('click', e => {
        if(e.target.checked){
            states[4] = 'Success';
        } else {
            states[4] = 'Select Terms and Conditions';
        }
        isEverythingOk();
    });
    document.querySelector('#promo').addEventListener('click', e => {
        if(e.target.checked){
            states[5] = 'Success';
        } else {
            states[5] = 'Select Promo Notifications';
        }
        isEverythingOk();
    });
}

const addSubmitEvent = () => {
    document.querySelector('#submitBtn').addEventListener('click', e => {
        e.preventDefault();
        const alertDialog = document.querySelector('.form__alert');
        const alertMsg = document.querySelector('.alert__msg');

        // error alert - if states is not all success theres obviously an error
        for(let i = 0; i < states.length; i++){
            if(states[i] != 'Success'){
                alertDialog.style.display = 'flex';
                alertMsg.innerHTML = states[i];
                setTimeout(() => alertDialog.style.display = 'none', 3000);
                return;
            }
        }
        
        // everything ok - show loading screen
        const window = document.querySelector('.window');
        window.style.display = 'flex';
        const loader = document.querySelector('.window__loading');
        let rotate = 0, seconds = 0;

        // here I should send request to server but theres none so I mimic request loading
        // and in my case you can't submit until everything is ok

        let animation = setInterval(() => {
            if(seconds > 6000){
                // after 6seconds loader hides and message is displayed
                clearInterval(animation);

                window.style.display = 'none';
                loader.style.transform = `rotate(0deg)`;

                // show dialog
                alertMsg.style.color = '#f5eaca';
                alertMsg.style.borderColor = '#88c48d';
                alertMsg.innerHTML = 'You registered successfuly so you can go and take a look at my cool <a href="http://portfolio-nikola.herokuapp.com/" class="msg__link" target="_blank">portfolio</a>';
                alertDialog.style.display = 'flex';

                return;
            }
            loader.style.transform = `rotate(${rotate}deg)`;
            seconds += 40;
            rotate += 10;
        }, 40);
    });
}

const addSpanEvents = () => {
    // this code is lol
    // when I click on span in input, input gets focus
    [...document.querySelectorAll('.box__span')].forEach(span => 
        span.addEventListener('click', e => 
            document.getElementById(span.getAttribute('data-labelId')).focus()
        )
    );
}

// navigation events
const ulBoxs = document.querySelectorAll('.ul__box');
[...ulBoxs].forEach(box => box.addEventListener('click', e => {
    // resetting state data everytime page changes
    app.innerHTML = '';
    clicked = [false, false, false];
    animationIntervals = [null, null, null];

    if(e.target.innerHTML.includes('Email')){
        states = ['Email field cannot be empty', 'Password field cannot be empty', 'Empty confirm password', 'Select currency',
                  'Select Terms and Conditions', 'Select Promo Notifications'];
        app.innerHTML = display.emailRegistration.html;
        setTimeout(() => {
            document.querySelector('.app__wrapper').classList.toggle('app__wrapper--show')
        }, 100);
        display.emailRegistration.cb();
    } else {
        states = ['Phone field cannot be empty', 'Password field cannot be empty', 'Empty confirm password', 'Select currency',
                  'Select Terms and Conditions', 'Select Promo Notifications'];
        app.innerHTML = display.phoneRegistration.html;
        setTimeout(() => {
            document.querySelector('.app__wrapper').classList.toggle('app__wrapper--show')
        }, 100);
        display.phoneRegistration.cb();
    }
}));