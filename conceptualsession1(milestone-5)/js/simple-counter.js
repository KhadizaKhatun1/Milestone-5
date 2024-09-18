// read operations
const increaseButton=document.getElementsByClassName('increase-button')[0];

const counter=document.getElementById('counter');
counter.addEventListener('click',function(){
    if(increaseButton.getAttribute('disabled')===null){
        console.log(counter)
        increaseButton.setAttribute('disabled',true);
        decreaseButton.setAttribute('disabled',true);
        counter.classList.add('bg-red-500')
        counter.classList.add('rounded-xl')
    }
    else{
        increaseButton.removeAttribute('disabled');
        decreaseButton.removeAttribute('disabled');
        counter.classList.remove('bg-red-500');
        counter.classList.remove('rounded-xl')
    }
})
increaseButton.addEventListener('click',function(event){
    const count=document.getElementById('count')
    let currentCount=Number(count.innerText);
    currentCount++;
    count.innerText=currentCount;
    event.stopPropagation();
})
const decreaseButton=document.getElementsByClassName('decrease-button')[0];
decreaseButton.addEventListener('click',function(event){
    const count=document.getElementById('count');
    let currentCount=Number(count.innerText);
    currentCount--;
    count.innerText=currentCount;
    event.stopPropagation();
})