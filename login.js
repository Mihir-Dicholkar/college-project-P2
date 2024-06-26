const menubtn = document.querySelector('.menu');
const sidebar = document.querySelector('.sidebar');

menubtn.addEventListener('click', ()=>{
    sidebar.classList.add('navbar');
});
document.addEventListener('mouseup', (e)=>{
    if(!sidebar.contains(e.target)){
    sidebar.classList.remove('navbar');
    }
});