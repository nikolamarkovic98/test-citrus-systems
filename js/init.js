const app = document.getElementById('app');

// state data
let clicked = [false, false, false];
// states is either going to be error or 'Success'
let states = ['Email field cannot be empty', 'Password field cannot be empty', 'Empty confirm password', 'Select currency',
                'Select Terms and Conditions', 'Select Promo Notifications'];
let animationIntervals = [null, null, null];