let button = document.querySelectorAll("#button")
// console.log(button);

let output1 = document.querySelector("#output1")
let output2 = document.querySelector("#output2")
let output3 = document.querySelector("#output3")

for (let i = 0; i < button.length; i++) {

    button[i].addEventListener("click",(e)=>{

    if ( e.target.classList.contains("btn1")) {
        output1.classList.toggle("viewcontent")
        output2.classList.remove("viewcontent")
        output3.classList.remove("viewcontent")

    }
    else if(e.target.classList.contains("btn2")){
        output2.classList.toggle("viewcontent")
        output1.classList.remove("viewcontent")
        output3.classList.remove("viewcontent")

    }
    else if(e.target.classList.contains("btn3")){
        output3.classList.toggle("viewcontent")
        output1.classList.remove("viewcontent")
        output2.classList.remove("viewcontent")
    }
    })

}