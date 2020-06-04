const writeText = (index, element, text, color = null) => {
    // typing animation function
    if(animationIntervals[index] != null)
        clearInterval(animationIntervals[index]);
    element.textContent = '';
    if(color != null){
        element.style.color = color;
    } else {
        element.style.color = '#f5eaca';
    }
    animationIntervals[index] = setInterval(() => {
        element.textContent += text[element.textContent.length];
        if(element.textContent.length == text.length){
            clearInterval(animationIntervals[index]);
            animationIntervals[index] = null;
        }
}, 40)}

const isEverythingOk = () => {
    // if states array have no error messagees - some style will change
    let success = true;
    for(let i = 0; i < states.length && success; i++){
        if(states[i] != 'Success'){
            success = false;
        }
    }

    // set style
    if(success){
        document.querySelector('.app__header').style.backgroundColor = '#88c48d';
        document.querySelector('.form__submit').style.backgroundColor = 'rgb(136, 196, 141, 1)';
    } else {
        document.querySelector('.app__header').style.backgroundColor = '#6f2e5e';
        document.querySelector('.form__submit').style.backgroundColor = 'rgb(136, 196, 141, 0.2)';
    }
}

const moveSpan = (e, index, element, text) => {
    // span is only going to be moved once
    if(clicked[index]) return;
    clicked[index] = true;
    element.style.top = '-22px';
    e.target.style.borderColor = '#6f2e5e';
    setTimeout(() => {
        writeText(index, element, text);
    }, 500)
}

const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

const validateNumber = number => {
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return re.test(number);
}