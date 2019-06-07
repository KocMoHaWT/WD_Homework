const firstInputTask = document.getElementById("task_1");

firstInputTask.addEventListener("click", () => {
    const firstNumber = +document.getElementById("number_1").value;
    const secondNumber = +document.getElementById("number_2").value;
    let sum = 0;
    const answerBlock = document.getElementById("task1");
    for (let i = firstNumber; firstNumber < secondNumber; i++) {
        let num = Math.abs(firstNumber) % 10;
        if (num === 2 || num === 3 || num === 7) {
            sum += firstNumber;
        }
    }
    answerBlock.innerHTML = "" + sum;

});

const secondInputTask1 = document.getElementById("task_2_0");

secondInputTask1.addEventListener("click", () => {
    const answerBlock = document.getElementById("task2")
    const minute = 60;
    let time = document.getElementById("time_s").value;
    if (time < 0) {
        return "incorrect time in seconds";
    }
    const minutes = Math.floor((time - (time % minute)) / minute % minute);
    const hours = Math.floor(time / minute / minute);
    time = time % minute;

    answerBlock.innerText = "Answer is " + ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + time).slice(-2);
})

const secondInputTask2 = document.getElementById("task_2_5");

secondInputTask2.addEventListener("click", () => {
    const minute = 60;
    const answerBlock = document.getElementById("task2.5");
    const time = document.getElementById("time").value;
    const time_array = time.split(":", 3);
    if (time_array[0] < 0 ||
        time_array[1] < 0 ||
        time_array[2] < 0) {
        return "incorrect data";
    }
    const answer = time_array[0] * minute * minute + time_array[1] * minute + +time_array[2];
    answerBlock.innerHTML = "Answer is " + answer;

})

const thirdInputTask = document.getElementById("task_3");

thirdInputTask.addEventListener("click", () => {
    const answerBlock = document.getElementById("task3");
    const container = document.createElement("div");
    const firstDate = new Date(document.getElementById("data_1").value);
    const secondDate = new Date(document.getElementById("data_2").value);
    const diffTime  = Math.abs(secondDate - firstDate);
    const seconds = 1000,
        minutes = 60,
        hours = 24,
        days = 30,
        months= 12,
        daysInYear = 360;
    answerBlock.innerHTML = "";
    container.innerHTML = "Answer is ";
    container.append(" " + Math.floor(diffTime / (seconds * minutes * minutes * hours * daysInYear)) + " year(s), ");
    container.append(" " + Math.floor((diffTime / (seconds * minutes * minutes * hours * days)) % months)  + " month(s), ");
    container.append(" " + Math.floor((diffTime / (seconds * minutes * minutes * hours)) % days) + " day(s), ");
    container.append(" " + Math.floor((diffTime / (seconds * minutes * minutes)) % hours) + " hour(s), ");
    container.append(" " + Math.floor((diffTime / (seconds * minutes)) % minutes) + " minute(s) ");
    answerBlock.appendChild(container);
});

const forthInputTask = document.getElementById("task_4");

forthInputTask.addEventListener("click", () => {
    const blockSize = 20;
    const answerBlock = document.getElementById("task4");
    answerBlock.innerHTML = "";

    const cordinates = document.getElementById("square").value
        .split("x");
    const conteiner = document.createElement("div");
    const x = cordinates[0];
    const y = cordinates[1]
    answerBlock.style.width = "" + x * blockSize + "px";
    answerBlock.style.height = "" + y * blockSize + "px";
    let element;
    let color = 0;
    for (let i = 0; i < cordinates[1]; i++) {
        for (let j = 0; j < cordinates[0]; j++) {
            element = document.createElement("div");
            answerBlock.append(element);
            if (color % 2 === 0) {
                element.classList.add("white");

            } else {
                element.classList.add("black");
            }
            color++;
        }
        let element_br = document.createElement("br");
        conteiner.appendChild(element_br);
        if (x % 2 === 0) {
            color++;
        }
    }
    answerBlock.appendChild(conteiner);
});



const list = document.getElementById("list");

list.addEventListener("focusout", () => {
    const elements = list.value;
    const regexp_url = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
    const url_arr = elements.split(",").filter(n => n.trim().match(regexp_url));
    for (let i = 0; i < url_arr.length; i++) {
        url_arr[i] = url_arr[i].replace(/^https?:\/\//, '');
    }
    url_arr.sort();
    const first_div = document.getElementById("task5");
    const div = document.createElement("div");
    for (let i = 0; i < url_arr.length; i++) {
        let a = document.createElement("a");
        a.href = "https://" + url_arr[i];
        a.title = "1";
        a.target = "_blank";
        a.text = url_arr[i];
        div.appendChild(a)
    }
    div.classList.add("task5_5");
    first_div.innerHTML = "";
    first_div.appendChild(div);

});

const inputTask6 = document.getElementById("task_6");

inputTask6.addEventListener("click", () => {
    const reg_exp = new RegExp(document.getElementById("task_6_regexp").value, 'gm');
    let text = document.getElementById("task_6_text").value;

    text = text.replace(reg_exp, '<mark>$&</mark>');
    const global_div = document.getElementById("task6");
    global_div.innerHTML = text;
});
