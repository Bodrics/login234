var main = document.getElementById('main');
var burger = document.getElementById('burger');
var hrest =  document.getElementById('hrest');
burger.addEventListener('click',function(){
    main.style.display = "block";
})
hrest.addEventListener('click',function(){
    main.style.display = "none";
})


