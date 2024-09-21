document.getElementById('cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOut=document.getElementById('input-cash-out').value;
    const cashOutPinNumber=document.getElementById('input-cash-out-pin-Number').value;
    if(cashOutPinNumber==='1234'){
        const balance=document.getElementById('account-balance').innerText;
        const balanceNumber=Number(balance);
        // console.log(balance)
        const cashOutNumber=Number(cashOut);
        // console.log(cashOutNumber);
        const newBalance=balanceNumber-cashOutNumber;
        // console.log(newBalance)
        document.getElementById('account-balance').innerText=newBalance;
    }
    else{
        alert('enter the correct pin number')
    }
})