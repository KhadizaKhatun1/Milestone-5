// add money to the account
// step:1 add an event hanlder to the add money button inside the form and event page reload after form submit
// get money to be added to the account balance
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submission
    event.preventDefault();
    // step2: get money to be added to the account
    const addMoneyInput=document.getElementById('input-add-money').value;
    // step3:get the pin number that is provided
    const pinNumber=document.getElementById('input-pin-number').value;
    console.log(pinNumber)

    

})