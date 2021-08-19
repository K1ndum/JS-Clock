const secondHand = document.querySelector('.second__hand');
const minHand = document.querySelector('.min__hand');
const hourHand = document.querySelector('.hour__hand');
const dateClock = document.querySelector('.date__clock');
const tryAgain = document.querySelector('#tryAgain');
const timeCheck = document.querySelector('.timeCheck');
const text = document.querySelector('.text');

const week = ['Понедельник', 'Вторник', 'Среда', 'Чтверг', 'Пятница', 'Суббота', 'Воскресение'];
const mounth = ['Января', 'Февряля', 'Марта', 'Апреля', 'Мая', 'Июля', 'Июня', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']

function setDate() {
    const now = new Date();

    const weekNow = week[now.getDay()-1];
    const dateNow = now.getDate();
    const mounthNow = mounth[now.getMonth()];

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60) * 360) + 90; 
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const min = now.getMinutes();
    const minDegrees = ((min/60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour/60) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    dateClock.textContent = `${hour} : ${min} : ${seconds} ${weekNow}, ${dateNow} ${mounthNow}`
    
}
let twoMin = 120;
let timeMin = 0;
let timeSecond = 0;
let timer;
let x = 0;


function time () {
    timer = setInterval (function () {
        if (x == 0) {
            if (twoMin >= 0) {
                timeMin = Math.floor(twoMin/60);
                timeSecond = twoMin%60;
                if (timeSecond <= 9) {
                    let strTime = `${timeMin} : 0${timeSecond}`;
                    timeCheck.innerHTML = strTime;
                } else {
                    let strTime = `${timeMin} : ${timeSecond}`;
                    timeCheck.innerHTML = strTime;
                }
                --twoMin;
            } else {
                text.textContent = 'Good job!';
                timeCheck.innerHTML = '0 : 00';
                text.classList.remove('text');
                text.classList.add('textDone');
            }  
        } else {
            tryAgain.classList.remove("try");
            tryAgain.classList.add("tryAgain");
            if (twoMin >= 0) {
                timeMin = Math.floor(twoMin/60);
                timeSecond = twoMin%60;
                if (timeSecond <= 9) {
                    let strTime = `${timeMin} : 0${timeSecond}`;
                    timeCheck.innerHTML = strTime;
                } else {
                    let strTime = `${timeMin} : ${timeSecond}`;
                    timeCheck.innerHTML = strTime;
                }
                --twoMin;
            } else {
                text.textContent = 'Good job!';
                timeCheck.innerHTML = '0 : 00';
                text.classList.remove('text');
                text.classList.add('textDone');
            }
        }
    }, 1000);
}

function timeGo () {
    if (text.className == 'text') {
        clearInterval(timer);
        x++;
        timeCheck.innerHTML = '2 : 00';
        tryAgain.classList.remove("tryStart");
        tryAgain.classList.add("try");
        twoMin = 120;
        setTimeout(time(), 1000);
    }
}

document.body.onclick = function () {
    timeGo();
}

document.body.onmousemove = function () {
    timeGo();
}

document.body.oncontextmenu = function () {
    timeGo();
}

document.addEventListener('keypress', function (e) {
    timeGo();
    console.log(e.charCode);
});   

setTimeout(time, 1000);

setInterval(setDate, 1000);


