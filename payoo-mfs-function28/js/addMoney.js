/***
 * How to get a number from input field
 * 1.create a variable
 * 2.right side document.getElementById(id);
 * .value
 * 4.parseFloat
 */
console.log('add money loaded')
document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    // getInputFieldValueById();
    const addMoney=getInputFieldValueById('input-add-money');
    const pinNumber=getInputFieldValueById('input-pin-number');
    if(isNaN(addMoney)){
        alert('failed to add money')
        return;
    }
    // wrong way to verify.do not tru at your serious website
    if(pinNumber===1234){
        console.log(pinNumber)
        const balance=getTextFieldValueById('account-balance');
        const newBalance=addMoney+balance;
        document.getElementById('account-balance').innerText=newBalance;
        // add to transaction history
        const p=document.createElement('p');
        p.innerText=`Added: ${addMoney} Tk. Balance : ${newBalance}`
        document.getElementById('transaction-container').appendChild(p)

    }
    else{
        alert('Failed to add money')
    }
    
})