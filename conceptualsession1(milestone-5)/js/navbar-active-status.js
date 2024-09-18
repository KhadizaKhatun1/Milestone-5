const ulTag=document.getElementById('nav-container');
const lisItems=ulTag.getElementsByTagName('li')
let lastClicked=null;
for(let item of lisItems){
    item.addEventListener('click',function(){
        if(lastClicked===null){
            item.style.backgroundColor='red';
            item.style.color='white';
            
        }
        
        else{
            lastClicked.style.backgroundColor='transparent';
            lastClicked.style.color='black';
            item.style.backgroundColor='red';
            item.style.color='white';
        }
        lastClicked=item;
    })
}