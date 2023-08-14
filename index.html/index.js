function randamColor() {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]

    }

    return color;

}

const start = document.querySelector("#start");
const container = document.querySelector('.container');
const Stop = document.querySelector('#Stop');


let internal;

function startChangingColor() {

     internal = setInterval(() => {
        container.style.backgroundColor = randamColor();
     },500)

    
    return internal;
}

function stopChangingColor(){
       clearInterval(internal);
       internal=null;
}

 start.addEventListener("click", startChangingColor);


 Stop.addEventListener("click",stopChangingColor);

