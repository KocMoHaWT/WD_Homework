    const input = document.getElementById("task_1");

    input.addEventListener("click",()=>{
    let a = +document.getElementById("number_1").value;
    const b = +document.getElementById("number_2").value;
    let c = 0;
     const div = document.getElementById("asd");
    for(;a <= b;a++) {
        if (a%10===2 || a%10===3 || a%10===7) {
            c += a;
        }
    }
    div.innerHTML = "" + c;

   });

    const input_task_2 = document.getElementById("task_2_0");

    input_task_2.addEventListener("click", () =>{
        const div = document.getElementById("task2")
        let time = document.getElementById("time_s").value;
        if(time < 0) {
            return "incorrect time in seconds";
        }
        let minutes = Math.floor((time - (time % 60)) / 60 % 60);
        let hours = Math.floor(time / 60 / 60);
        time = time % 60;

        div.innerText = "Answer is " + hours + ":" + minutes + ":" + time;
    })

    const input_task_2_5 = document.getElementById("task_2_5");

    input_task_2_5.addEventListener("click", () => {
        const div = document.getElementById("task2.5");
        let time = document.getElementById("time").value;
        let time_array = time.split(":",3);
        if(time_array[0] < 0 ||
           time_array[1] < 0 ||
           time_array[2] < 0) {
            return "incorrect data";
        }
        let answer = time_array[0] * 3600 + time_array[1] * 60 + +time_array[2];
        div.innerHTML = "Answer is " + answer;

    })

    const input_task_3 = document.getElementById("task_3");

    input_task_3.addEventListener("click", () => {
        let div = document.getElementById("task3");
        let container = document.createElement("div");
        let data_1 = document.getElementById("data_1").value
            .replace(/[-T:]/g, "/")
            .split("/");

        let data_2 = document.getElementById("data_2").value
            .replace(/[-T:]/g, "/")
            .split("/");
        console.log(data_1);
        container.innerHTML = "Answer is ";
        container.append(" " + Math.abs(parseInt(data_1[0]) - parseInt(data_2[0])) + "year(s), ");
        container.append(" " + Math.abs(parseInt(data_1[1]) - parseInt(data_2[1])) + "month(s), ");
        container.append(" " + Math.abs(parseInt(data_1[2]) - parseInt(data_2[2]))+ "day(s), ");
        container.append(" " + Math.abs(parseInt(data_1[3]) - parseInt(data_2[3])) + "hour(s), ");
        container.append(" " + Math.abs(parseInt(data_1[4]) - parseInt(data_2[4])) + "minute(s) ");
        div.appendChild(container);
    });

    const input_task_4 = document.getElementById("task_4");

    input_task_4.addEventListener("click",() => {
        const div = document.getElementsByClassName("task4")[0];
        let cordinates = document.getElementById("square").value
            .split("x");
        let conteiner = document.createElement("div");
        let x = cordinates[0];
        let y = cordinates[1]
        div.style.width =  "" + x * 20+"px";
        div.style.height = "" + y * 20+"px";
        let element;
        let color = 0;
        for(let i = 0; i < cordinates[1]; i++) {
            for(let j = 0; j < cordinates[0]; j++) {
                element = document.createElement("div");
                div.append(element);
                if(color % 2===0) {
                    element.classList.add("white");

                } else {
                    element.classList.add("black");
                }
                color++;
            }
            let element_br = document.createElement("br");
            conteiner.appendChild(element_br);
            if(x% 2===0) {
                color++;
            }
        }
        div.appendChild(conteiner);
    });

    const input_task_5 = document.getElementById("task_5");

    input_task_5.addEventListener("click",() => {
       let list = document.getElementById("list")
           .value.split(",");

       let regexpp_url = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);

        let url_arr = list.filter(n => n.match(regexpp_url));
        for(let i = 0; i < url_arr.length; i++) {
            url_arr[i] = url_arr[i].replace(/^https?:\/\//,'');
        }
        url_arr.sort();
        let first_div = document.getElementById("task5");
        let div = document.createElement("div");
        for(let i = 0; i < url_arr.length; i++) {
            let a = document.createElement("a");
            a.href = "https://" + url_arr[i];
            a.title = "1";
            a.target = "_blank";
            a.text = url_arr[i];
            div.appendChild(a)
        }
        div.classList.add("task5_5");
        first_div.appendChild(div);

    });

    const input_task_6 = document.getElementById("task_6");

    input_task_6.addEventListener("click",() => {
        let reg_exp = new RegExp(document.getElementById("task_6_regexp").value,'gm');
        let text = document.getElementById("task_6_text").value;

        text = text.replace(reg_exp,'<mark>$&</mark>');
        let global_div = document.getElementById("task6");
        global_div.innerHTML = text;
    });



