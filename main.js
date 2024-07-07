let item = document.querySelectorAll('.slider .item');
let next =document.getElementById('next');
let prev = document.getElementById('prev');



let active = 2;

function loadShow(){
    let stt = 0
    item[active].style.transform = `none`;
    item[active].style.zIndex = 2;
    item[active].style.filter = 'none'
    item[active].style.opacity = 1

    for(var i = active + 1; i < item.length; i++){
        stt++;
        item[i].style.transform = `translateX(${120*stt}px) scale(${1-0.2*stt}) perspective(16px) rotateY(-1deg)`;
        item[i].style.zIndex = 1;
        item[active].style.zIndex = 2;
        item[i].style.filter = 'blur(5x)'
        item[i].style.opacity = stt >2? 0 :0.6
        
    }
    stt = 0
    for(var i = active - 1; i >= 0; i--){
        stt++;
        item[i].style.transform = `translateX(${-120*stt}px) scale(${1-0.2*stt}) perspective(16px) rotateY(1deg)`;
        item[i].style.zIndex = 1;
        item[active].style.zIndex = 2;
        item[i].style.filter = 'blur(5x)'
        item[i].style.opacity = stt >2? 0 :0.6
       
    }
}

loadShow();
next.onclick = ()=>{
    active = active + 1 < item.length ? active+1: active;
 
    loadShow();
}
prev.onclick = ()=>{
    active = active - 1 >= 0  ? active-1: active;
  
    loadShow();
}