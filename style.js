var first = document.getElementById('first');
var second = document.getElementById('second');
var third = document.getElementById('third');
var forth = document.getElementById('forth');
var num1 = document.getElementById('num1'); 
var num2 = document.getElementById('num2'); 

first.addEventListener('click',function(){
  var result= parseFloat(num1.value)+parseFloat(num2.value);
    document.getElementById('demo').innerHTML=result;
    
});
second.addEventListener('click',function(){
    var result= parseFloat(num1.value)-parseFloat(num2.value);
    document.getElementById('demo').innerHTML=result;
});
third.addEventListener('click',function(){
    var result=parseFloat(num1.value)*parseFloat(num2.value);
    document.getElementById('demo').innerHTML=result;
});
forth.addEventListener('click',function(){
    var result=parseFloat(num1.value)/parseFloat(num2.value);
    document.getElementById('demo').innerHTML=result;
});
