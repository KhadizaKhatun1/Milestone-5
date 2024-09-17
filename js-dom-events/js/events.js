console.log("This is seperate js file")
// option 1:directly set on the html code
// option:2 add onclick function(we will use this more frequently)
function makeRed(){
    document.body.style.backgroundColor='red';
}
// option:3 add onclick function 
const makeBlue=document.getElementById('make-blue');
//    console.log(makeBlue)
   makeBlue.onclick=makeBlueButton;
   function makeBlueButton(){
    document.body.style.backgroundColor='blue';
   }
//    option:4 directly add function
const purpleButton=document.getElementById('make-purple');
   purpleButton.onclick=function purpleButton(){
    document.body.style.backgroundColor='purple';
   }
// option:5 using addEventListener and function
const makePinkbtn=document.getElementById('make-pink');
   makePinkbtn.addEventListener('click',makePink);
   function makePink(){
    document.body.style.backgroundColor='pink'
   }
//    option:6 using addEventListener and direct function
   const greenButton=document.getElementById('make-green');
   greenButton.addEventListener('click',function makeGreen(){
    document.body.style.backgroundColor='green'
   })
    // option:7(important we will use this sometimes)
    document.getElementById('make-goldenrod').addEventListener('click',function(){
        document.body.style.backgroundColor='goldenrod'
       })
