
const btn  = document.querySelector("#btn");

btn.addEventListener('click',()=>{
    const boxes = document.querySelectorAll(".abc");
    let l = boxes.length;
    console.log(l)
    boxes[l-1].remove();
})