document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOut=getInputFieldValueById('input-cash-out');
    const cashOutPin=getInputFieldValueById('input-cash-out-pin');
    // isNaN
    if(isNaN(cashOut)){
        alert('failed to cash out')
    }
    if(cashOutPin===1234){
        const balance=getTextFieldValueById('account-balance');
        if(cashOut>balance){
            alert('transaction failed');
            return;
        }
        const newBalance=balance-cashOut;
        document.getElementById('account-balance').innerText=newBalance;
        // add to transaction history
        const div=document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML=`
            <h4 class="text-2xl font-bold">Cash out</h4>
            <p>${cashOut} WithDraw.New Balance.New Balance ${newBalance}</P>
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('Enter the right pin number')
    }
})