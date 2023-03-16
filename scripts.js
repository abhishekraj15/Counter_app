const currentValue = document.querySelector("#counter");

let increment = () => {
    let value = parseInt(currentValue.innerText);
    value = value + 1;
    currentValue.innerText = value;
};

let decrement = () => {
    let value = parseInt(currentValue.innerText);
    value = value - 1;
    currentValue.innerText = value;
};

// function decrement(){
//     let value = parseInt(currentValue.innerText);
//     value = value - 1;
//     currentValue.innerText = value;
// };
