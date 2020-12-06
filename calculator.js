document.getElementById('one').onclick=function(){
    onefunction()
}
function onefunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+1
}
document.getElementById('two').onclick=function(){
    twofunction()
}
function twofunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+2
}
document.getElementById('three').onclick=function(){
    threefunction()
}
function threefunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+3
}
document.getElementById('four').onclick=function(){
    fourfunction()
}
function fourfunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+4
}
document.getElementById('five').onclick=function(){
    fivefunction()
}
function fivefunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+5
}
document.getElementById('six').onclick=function(){
    sixfunction()
}
function sixfunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+6;
}
document.getElementById('seven').onclick=function(){
    sevenfunction()
}
function sevenfunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+7
}
document.getElementById('eight').onclick=function(){
    eightfunction()
}
function eightfunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+8;
}
document.getElementById('nine').onclick=function(){
    ninefunction()
}
function ninefunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+9;
}
document.getElementById('zero').onclick=function(){
    zerofunction()
}
function zerofunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+0
}
document.getElementById('add').onclick=function(){
    addfunction()
}
function addfunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+'+'
}
document.getElementById('subtract').onclick=function(){
    subtractfunction()
}
function subtractfunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+'-'
}
document.getElementById('star').onclick=function(){
    starfunction()
}
function starfunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+'*'
}
document.getElementById('divide').onclick=function(){
    dividefunction()
}
function dividefunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=x+'/'
}
document.getElementById('equal').onclick=function(){
    equalfunction()
}
function equalfunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML=eval(x);
}
document.getElementById('clear').onclick=function(){
    clearfunction()
}
function clearfunction(){
   var x= document.getElementById('calculationdisplay').innerHTML;
   document.getElementById('calculationdisplay').innerHTML='';
}