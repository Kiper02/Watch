// Получение необходимых элементов
const time = document.querySelectorAll(".time__value");





setInterval(() => {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    time[0].innerText = String(hours).charAt(0)
    time[1].innerText = String(hours).charAt(1)
    time[2].innerText = String(minutes).charAt(0)
    time[3].innerText = String(minutes).charAt(1)
    time[4].innerText = String(seconds).charAt(0)
    time[5].innerText = String(seconds).charAt(1)
},1000)


