// I wanted app to be SPA
const display = {
    emailRegistration: {
        html: `
            <div class="app__wrapper">
                <h1 class="app__header">Email Registration</h1>
                <form class="app__form">
                    <div class="form__box">
                        <input type="text" class="box__input box--email" id="email" autocomplete="off" />
                        <span class="box__span" id="email-span" data-labelId="email">Email</span>
                    </div>
                    <hr class="form__hr" id="email-hr" />
                    <div class="form__box">
                        <input type="password" class="box__input box--password" id="password" />
                        <span class="box__span" id="password-span" data-labelId="password">Password</span>
                    </div>
                    <hr class="form__hr" id="password-hr" />
                    <div class="form__box">
                        <input type="password" class="box__input box__password-confirm" id="password-confirm" />
                        <span class="box__span" id="password-confirm-span" data-labelId="password-confirm">Password Confirm</span>
                    </div>
                    <hr class="form__hr smaller" id="confirm-hr" />
                    <div class="form__box">
                        <select class="form__currency">
                            <option>Select currency</option>
                            <option>Euro</option>
                            <option>Dollar</option>    
                        </select>
                    </div>
                    <hr class="form__hr smaller" id="select-hr" />
                    <div class="form__box align-left bigger">
                        <input type="checkbox" class="form__terms" id="terms" />
                        <label class="box__label" for="terms">Terms and Conditions</label><br>
                        <input type="checkbox" class="form__promo" id="promo" />
                        <label class="box__label" for="promo">Promo Notifications</label>
                    </div>
                    <button class="form__submit" id="submitBtn" type="submit">Register</button>
                    <div class="form__alert">
                        <p class="alert__msg"></p>
                    </div>
                </form>
            </div>
        `,
        cb: () => {
            // add some events - i have functions for that because I add multiple events
            addSpanEvents();
            addEmailEvents();
            addPasswordEvents();
            addPasswordConfirmEvents();
            addSelectEvents();
            addCheckboxesEvents();
            addSubmitEvent();
        }
    },
    phoneRegistration: {
        html: `
            <div class="app__wrapper">
                <h1 class="app__header">Phone Registration</h1>
                <form class="app__form">
                    <div class="form__box">
                        <input type="text" class="box__input box--phone" id="phone" autocomplete="off" />
                        <span class="box__span" id="phone-span" data-labelId="phone">Phone</span>
                    </div>
                    <hr class="form__hr" id="phone-hr" />
                    <div class="form__box">
                        <input type="password" class="box__input box--password" id="password" />
                        <span class="box__span" id="password-span" data-labelId="password">Password</span>
                    </div>
                    <hr class="form__hr" id="password-hr" />
                    <div class="form__box">
                        <input type="password" class="box__input box__password-confirm" id="password-confirm" />
                        <span class="box__span" id="password-confirm-span" data-labelId="password-confirm">Password Confirm</span>
                    </div>
                    <hr class="form__hr smaller" id="confirm-hr" />
                    <div class="form__box">
                        <select class="form__currency">
                            <option>Select currency</option>
                            <option>Euro</option>
                            <option>Dollar</option>    
                        </select>
                    </div>
                    <hr class="form__hr smaller" id="select-hr" />
                    <div class="form__box align-left bigger">
                        <input type="checkbox" class="form__terms" id="terms" />
                        <label class="box__label" for="terms">Terms and Conditions</label><br>
                        <input type="checkbox" class="form__promo" id="promo" />
                        <label class="box__label" for="promo">Promo Notifications</label>
                    </div>
                    <button class="form__submit" id="submitBtn" type="submit">Register</button>
                    <div class="form__alert">
                        <p class="alert__msg"></p>
                    </div>
                </form>
            </div>
        `,
        cb: () => {
            addSpanEvents();
            addPhoneEvents();
            addPasswordEvents();
            addPasswordConfirmEvents();
            addSelectEvents();
            addCheckboxesEvents();
            addSubmitEvent();
        }
    }
}