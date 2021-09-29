var red= document.querySelector('#red');
var green= document.querySelector('#green');
var blue= document.querySelector('#blue');
var generator=document.querySelector('#generator')

function colors(){
    var rgbValue=`rgb(${red.value},${green.value},${blue.value})`;
    document.body.style.backgroundColor=`${rgbValue}`
    generator.innerText=`${rgbValue}`
}