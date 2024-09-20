// add money to the account
// step:1 add an event hanlder to the add money button inside the form and event page reload after form submit
//step2: get money to be added to the account balance and also get the pin number
// step3: verify the pin number
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submission
    event.preventDefault();
    // step2: get money to be added to the account
    let addMoneyInput=Number(document.getElementById('input-add-money').value);
    // get the pin number that is provided
    const pinNumber=document.getElementById('input-pin-number').value;
    // step:3 verify pin number
    // wrong way to validate pin number but we will learn it later
    if(pinNumber==='1234'){
        console.log('add mmoney to your account')
        // step4: get the current balance
        const balance=Number(document.getElementById('account-balance').innerText);
        // step:5 add addMoneyInput with balance
        const newBalance=balance+addMoneyInput;
        console.log(newBalance)
        // step6:update the balance in the UI/DOM
        document.getElementById('account-balance').innerText=newBalance;

    }
    else{
        alert('failed to add money!Please try again')
    }

    

})