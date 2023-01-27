const btn = document.querySelector('#imageButton');
const display = document.querySelector('.main');
const content = document.querySelector('section');

const bG1 = () => {display.style.backgroundImage = 'url(img/1.jpg)'};
const bG2 = () => {display.style.backgroundImage = 'url(img/2.jpg)'};
const bG3 = () => {display.style.backgroundImage = 'url(img/3.jpg)'};
const bG4 = () => {display.style.backgroundImage = 'url(img/4.jpg)'};
const bG5 = () => {display.style.backgroundImage = 'url(img/5.jpg)'};
const bG6 = () => {display.style.backgroundImage = 'url(img/6.jpg)'};

btn.disabled = true;

let counter = 0;
btn.addEventListener('click', () => {
    counter++;
        if (counter === 1) {
            bG2();
            } else if (counter === 2) {
                bG3();
            } else if (counter === 3) {
                bG4();
            } else if (counter === 4) {
                bG5();
            } else if (counter === 5) {
                bG6();
            } else if (counter === 6) {
                bG1();
                counter = 0;
            }
});

const load = document.querySelector('.load');
const powerOn = document.querySelector('#on');
const powerOff = document.querySelector('#off');
const children = load.lastElementChild;

load.hidden = true;
powerOff.disabled = true;
powerOn.addEventListener('click', () => {
    load.hidden = false;
    display.style.backgroundColor = 'white';
    children.innerText = 'Loading...';
    
    setTimeout(() => {
        load.hidden = true;
        bG1();
        powerOn.disabled = true;
        powerOff.disabled = false;
        btn.disabled = false;
    }, 3000);
})

powerOff.addEventListener('click', () => {
    load.hidden = false;
    children.innerText = 'Shutdown';
    display.style.cssText = 
        `background-color: white;`;
    setTimeout(() => {
        display.style.backgroundColor = 'rgb(9, 9, 9)';
        load.hidden = true;
        powerOn.disabled = false;
        powerOff.disabled = true;
        btn.disabled = true;
    }, 3000);
})
content.hidden = true;
// Введите имя
const inputName = document.querySelector('#value');
document.querySelector('#nB').onclick = nameText;
const windowParagarf = document.querySelector(`.window`);
const windowRobot = document.querySelector('.window_robot');
function nameText () {
    inputName.hidden = true;
    document.querySelector('#nB').hidden = true;
    let aValue = inputName.value;
    windowParagarf.innerHTML = `Привет, ${aValue}!`;
    setTimeout(() => {
        windowParagarf.innerHTML = 'Меня зовут Валли!'
    }, 2100);

    setTimeout(() => {
        windowParagarf.innerHTML = 'Я открою твой сайт через... '
    }, 4300);

    setTimeout(() => {
        windowParagarf.innerHTML = '3'
        windowParagarf.style.fontWeight = 'bold';

    }, 7000);
    setTimeout(() => {
        windowParagarf.innerHTML = '2';

    }, 8000);
    setTimeout(() => {
        windowParagarf.innerHTML = '1';
        windowRobot.hidden = true;
        content.hidden = false;
    }, 9000);
}




// 





    