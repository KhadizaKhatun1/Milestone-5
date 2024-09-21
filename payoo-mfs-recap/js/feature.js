document.getElementById('btn-show-cash-out').addEventListener('click',function(){
    document.getElementById('cash-out-show-form').classList.remove('hidden');
    document.getElementById('add-money-show-form').classList.add('hidden')
})
document.getElementById('btn-show-add-money').addEventListener('click',function(){
    document.getElementById('cash-out-show-form').classList.add('hidden');
    document.getElementById('add-money-show-form').classList.remove('hidden');
})