document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=parseFloat(document.getElementById('input-add-money').value);
    const pinNumber=document.getElementById('input-pin-number').value;
    if(pinNumber==='1234'){
        // add to the account balance
        const accountBalance=parseFloat(document.getElementById('account-balance').innerText);
        const balance=accountBalance+addMoney;
        // add the total to the account-balance
       document.getElementById('account-balance').innerText=balance;
    }
    else{
        alert("please enter the right pin number")
    }
    

})