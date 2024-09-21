document.getElementById('btn-add-money').addEventListener('click',function(e){
    // prevent default 
    e.preventDefault();
    const addMoney=document.getElementById('input-add-money').value;
    console.log(addMoney)
    const addMoneyNumber=parseFloat(addMoney);
    const pinNumber=document.getElementById('input-pin-number').value;
    // wrong way
    if(pinNumber==='1234'){
        const balance=document.getElementById('account-balance').innerText;
        const balanceNumber=parseFloat(balance);
        const newBalance=balanceNumber+addMoneyNumber;
        document.getElementById('account-balance').innerText=newBalance;
    }
    else{
        alert('failed to add money')
    }
})