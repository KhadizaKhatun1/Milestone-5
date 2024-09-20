// search: form submit reloading the page
// step:1 set event hanlder
document.getElementById('button-login').addEventListener('click',function(event){
    // step:2 prevent default behavior(prevent reloading browser)
    event.preventDefault();
    console.log('login button is clicked')
    // step:3 get the phone number
    const phoneNumber=document.getElementById('phone-number').value;
    const pinNumber=document.getElementById('pin-number').value;
    // console.log(phoneNumber,pinNumber)
    // bad way to validate
    if(phoneNumber==='5' && pinNumber==='1234'){
        console.log('validate');
        window.location.href='./home.html'
    }
    else{
        alert('wrong phone number and pin')
    }



})