function add(){
    var fvalue=parseInt(document.getElementById('fnumber').value);
    var svalue=parseInt(document.getElementById('snumber').value);
    var result=fvalue+svalue;
    document.getElementById('result').innerHTML=result;
}
function sub(){
    var fvalue=parseInt(document.getElementById('fnumber').value);
    var svalue=parseInt(document.getElementById('snumber').value);
    var result=fvalue-svalue;
    document.getElementById('result').innerHTML=result;
}
function mult(){
    var fvalue=parseInt(document.getElementById('fnumber').value);
    var svalue=parseInt(document.getElementById('snumber').value);
    var result=fvalue*svalue;
    document.getElementById('result').innerHTML=result;
}
function div(){
    var fvalue=parseInt(document.getElementById('fnumber').value);
    var svalue=parseInt(document.getElementById('snumber').value);
    var result=fvalue/svalue;
    document.getElementById('result').innerHTML=result;
}
function rem(){
    var fvalue=parseInt(document.getElementById('fnumber').value);
    var svalue=parseInt(document.getElementById('snumber').value);
    var result=fvalue%svalue;
    document.getElementById('result').innerHTML=result;
}

