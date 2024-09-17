// this file is not connected to any html file.it is used as storage
// mouseenter events
document.getElementById('btn-more').addEventListener('mouseenter',function(){
            console.log("Event Triggered")})
// mousemove events
document.getElementById('btn-more').addEventListener('mousemove',function(){
    console.log("Event Triggered")
})
// foucs
document.getElementById('text-field').addEventListener('focus',function(){
    console.log("Event Triggered inside the input field")
})
 // blur
 document.getElementById('text-field').addEventListener('blur',function(){
    console.log('Event triggered outside the input field')
})
// key down with target
document.getElementById('text-field').addEventListener('keydown',function(event){
    console.log(event.target)
})
// key down with target and value
document.getElementById('text-field').addEventListener('keydown',function(event){
    console.log(event.target.value)
})
// key press with value target and event
 document.getElementById('text-field').addEventListener('keypress',function(event){
            console.log(event.target.value)
        })
// key up with event target and value
document.getElementById('text-field').addEventListener('keyup',function(event){
    console.log(event.target.valued)
})