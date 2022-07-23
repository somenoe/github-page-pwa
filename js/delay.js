var warningElement = document.getElementById("warningMessage");

const second = (time) => time * 1000;
const minute = (time) => second(time) * 60;
const hour = (time) => minute(time) * 60;

var currentDelayTime = second(1);

const delay = () => new Promise(resolve => setTimeout(resolve, currentDelayTime));

function setDelayTime(time) {
    switch (time) {
        case '1 second':
            currentDelayTime = second(1);
            break;
        case '1 minute':
            currentDelayTime = minute(1);
            break;
        case '30 minute':
            currentDelayTime = minute(30);
            break;
        default:
            console.error('unknow delaytime');
            break;
    }
    // show current delay time
    warningElement.innerHTML = `!!! We send your location to server every [ ${time} ]`;
}

const getDelayTime = () => currentDelayTime + 's';
