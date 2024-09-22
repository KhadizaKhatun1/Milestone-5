// common shared function
console.log('utilities loaded')
// function getInputFieldValueById(){
//     console.log('will get vallue by id')
//     const addMoney=document.getElementById('input-add-money').value;
//     return addMoney;

// }
function getInputFieldValueById(id){
    const inputValue=document.getElementById(id).value;
    const inputNumber=parseFloat(inputValue);
    // console.log(id,inputValue)
    return inputNumber;
}
function getTextFieldValueById(id){
    const textValue=document.getElementById(id).innerText;
    const textNumber=parseFloat(textValue);
    return textNumber;
}
function showSectionById(id){
    // hide all the sections
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    // show the section with the provided id as parameter
    document.getElementById(id).classList.remove('hidden');

}