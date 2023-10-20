// spike
const circle = document.querySelector('.circle');
for (let i = 0; i < 60; i++) {
    const spikeEl = document.createElement('div');
    spikeEl.className = 'spike'
    spikeEl.style.setProperty('--rotate', `${i * (360 / 60)}deg`);
    circle.appendChild(spikeEl)
}

// time
const yy = document.getElementById('yy')
const mm = document.getElementById('mm')
const dd = document.getElementById('dd')
const weekday = document.getElementById('weekday')
const hr = document.getElementById('hr')
const min = document.getElementById('min')
const sec = document.getElementById('sec')
const red = document.getElementById('red')

const time = () => {
    const now = new Date
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()
    const day = now.getDay()
    const weekdayArray = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']
    const hour = parseInt(now.getHours())
    const minute = parseInt(now.getMinutes())
    const second = parseInt(now.getSeconds())


    // 不知道為什麼一開始不是在0deg
    red.style.transform = `rotate(${second * 6 - 2.25}deg)`

    yy.innerText = year
    mm.innerText = month
    dd.innerText = date
    weekday.innerText = weekdayArray[day]

    if (hour < 10) {
        hr.innerText = "0" + hour
    } else {
        hr.innerText = hour
    }

    if (minute < 10) {
        min.innerText = "0" + minute
    } else {
        min.innerText = minute
    }

    if (second < 10) {
        sec.innerText = "0" + second
    } else {
        sec.innerText = second
    }
}

// 初始调用一次
time()
// 每秒執行一次time的function
setInterval(time, 1000)