function sum(){
    var a = document.getElementById('first').value 
    var b = document.getElementById('second').value
    var out = `Sum of number is ${Number(a) + Number(b)}`;
    document.getElementById('output').innerText = out
}
function sub(){
    var a = document.getElementById('first').value 
    var b = document.getElementById('second').value
    var out = `Sub of number is ${Number(a) - Number(b)}`;
    document.getElementById('output').innerText = out
}
function mul(){
    var a = document.getElementById('first').value 
    var b = document.getElementById('second').value
    var out = `multiple of number is ${Number(a) * Number(b)}`;
    document.getElementById('output').innerText = out
}
function div(){
    var a = document.getElementById('first').value 
    var b = document.getElementById('second').value
    var out = `div of number is ${Number(a) / Number(b)}`;
    document.getElementById('output').innerText = out
}
const calculator = (opt) => {
    var a =document.getElementById('first').value
    var b = document.getElementById('second').value
    var out;
    if(opt == "Add"){
        out = `Sum of number is ${Number(a) + Number(b)}`;
    }else if(opt == "Sub"){
        out = `Sub of number is ${Number(a) - Number(b)}`;
    }else if(opt == "mul"){
        out = `multiple of number is ${Number(a) * Number(b)}`;
    }else{
        out = `div of number is ${Number(a) / Number(b)}`;
    }
    document.getElementById('output').innerText = out
}

