// function searchof() {
// var num = document.getElementById("okok").value;
// var grade;
// if (num >= 0 && num <= 100){
// if(num >= 80) {
//   grade = '"A+"';
// } else if (num >= 70){
//     grade = '"A"';
// } else if (num >= 60){
//     grade = '"B"';
// } else if (num >= 50){
//     grade = '"C"';
// } else if (num >= 50){
//     grade = '"D"';
// } else{
//     grade = "Fail";
// }
// document.getElementById('okk').innerHTML = grade;
// } else{
//     document.getElementById('okk').innerHTML = "Wrong input";;
// }
// }



function af() { 
    var usrv = +prompt("Write a number");
    document.getElementById('fv').innerHTML = usrv;
    document.getElementById('++a').innerHTML = ++usrv;
    document.getElementById('fa').innerHTML = usrv;
    document.getElementById('a++').innerHTML = usrv++;
    document.getElementById('sa').innerHTML = usrv;
    document.getElementById('--a').innerHTML = --usrv;
    document.getElementById('ta').innerHTML = usrv;
    document.getElementById('a--').innerHTML = usrv--;
    document.getElementById('foa').innerHTML = usrv;
}

function grt(){
    var gert = prompt('Enter Your Name!');
    var gert1 = gert.toUpperCase();
    document.getElementById('gret').innerHTML = "Hello! " + gert1;
}

function tabl(tbl){ 
    var data = document.getElementById('tbl')
    data.innerHTML= " "
    var tbl = +prompt('Enter Your Number!', 5);
    for(let i =1; i<=10; i++){
        var result = tbl * i;
        var ett = `${tbl} x ${i} = ${result}<br>`;
        document.getElementById('tbl').innerHTML += ett;

    }
}

function tot(){
var num = +prompt("Enter Obtain Marks Of English");
document.getElementById("engop").innerHTML = num;
var num1 = +prompt("Enter Obtain Marks Of Maths");
document.getElementById("matop").innerHTML = num1;
var num2 = +prompt("Enter Obtain Marks Of Urdu");
document.getElementById("urdop").innerHTML = num2;
if(num >= 0 && num <= 100 ) {
var totnum = num + num1 + num2;
document.getElementById("totob").innerHTML = totnum;
var perc = num / 100 * 100;
document.getElementById("engper").innerHTML = perc +"%";
var perc1 = num1 / 100 * 100;
document.getElementById("matper").innerHTML = perc1 +"%";
var perc2 = num2 / 100 * 100;
document.getElementById("urdper").innerHTML = perc2 +"%";
var totp = totnum / 300 * 100;
document.getElementById("totper").innerHTML = Math.round( totp) +"%";
}  else {
    alert("Wrong input")
}
}

function cit(){
    var gender = +prompt("Write 1 for Male And 0 For Female");
    if(gender === 1){
        document.getElementById('gender').innerHTML = "Good Morning Sir"
    } else if(gender === 0){
        document.getElementById('gender').innerHTML = "Good Morning Ma'am"
    } else{ 
        document.getElementById('gender').innerHTML ="Worng input"
    }
    var city = prompt("Write karachi in small charactors");
    if(city ==="karachi"){
    var city1 = "Welcome To City Of Lights";
    document.getElementById('karachi').innerHTML = city1;
    } else {( document.getElementById('karachi').innerHTML ="write karachi in small words")};
};

function red(){
    var red = "MUST STOP"
    document.getElementById('signal').innerHTML = red;
};
function yellow(){
    var yellow = "READY TO MOVE"
    document.getElementById('signal').innerHTML = yellow;
};
function green(){
    var green = "MOVE NOW"
    document.getElementById('signal').innerHTML = green;
};

function fuel(){
    var fuelo = +prompt("Write Your Fuel in Decimal i.e (0.25)");
    if(fuelo < 0.26){
        document.getElementById('fuell').innerHTML = "Please refill the fuel in your car"
    } else if(fuelo >=0.25){
        document.getElementById('fuell').innerHTML = "You Are Ready To Go!" 
    } else{
        document.getElementById('fuell').innerHTML = "Wrong input!"   
    }
}

function r7f(){
    var r71 = +prompt("Enter Obtain Marks Of English");
var r72 = +prompt("Enter Obtain Marks Of Maths");
var r73 = +prompt("Enter Obtain Marks Of Urdu");
var r74 = r71 + r72 + r73
document.getElementById("r7").innerHTML = r74;
if(r74 >= 0 && r74 <= 300 ) {
    var r745 = r74 / 300 * 100; ;
   var mr7 = Math.round(r745)
    document.getElementById("r7a").innerHTML = mr7 + "%";
} else {
     alert("Wrong input!")
}
if(r745 >= 80){
   var ao = document.getElementById('r7b').innerHTML = "A-one";
} else if(r745 >= 70){
   var ad =  document.getElementById('r7b').innerHTML = "A";
}  else if(r745 >= 60){
   var ab = document.getElementById('r7b').innerHTML = "B";
} else {
   document.getElementById('r7b').innerHTML = "Fail";
}
if(ao === "A-one"){
    document.getElementById('r7c').innerHTML = "Excellent";
} else if(ad === "A"){
    document.getElementById('r7c').innerHTML = "Good";
}  else if(ab === "B"){
    document.getElementById('r7c').innerHTML = "You Need To Improve";
} else{
    document.getElementById('r7c').innerHTML = "Sorry";
}
}

function gues(){
    var ges =  +prompt("Select 1 or 0  i . e  ( 0 ) mean 0 to 4 & ( 1 ) mean 5 to 9");
    var random22 = Math.round(Math.random()* 10);
    
    if(ges === 1){ if(ges === 1 && random22 >=5){
        document.getElementById('gues').innerHTML = "You Win! " + "<br>" + "Computer Generated Number Was " + random22;
    } else{
        document.getElementById('gues').innerHTML = "You Lose " + "<br>" + "Computer Generated Number Was " + random22;
    }
} else if(ges === 0){
    if(ges === 0 && random22 < 5){
        document.getElementById('gues').innerHTML = "You Win! " + "<br>" + "Computer Generated Number Was " + random22;}
        else{
            document.getElementById('gues').innerHTML = "You Lose " + "<br>" + "Computer Generated Number Was " + random22;
        }
} else {
    document.getElementById('gues').innerHTML = "Wronge input! "
}
}

function dvithr(){
    var dvth = +prompt("Write Your Number");
    if(dvth % 3 === 0){
        document.getElementById('dvi3').innerHTML = "Yes This Given Number is <br> able to divide with 3"
    }
    else{
        document.getElementById('dvi3').innerHTML = "Sorry Your Given Number is'nt <br> able to divide with 3"
    }
}

function evod(){
    var evod = +prompt("Input Your Number");
    if(evod % 2 === 0){
        document.getElementById('evodd').innerHTML = "This is an Even Number"
    } else{
        document.getElementById('evodd').innerHTML = "This is an Odd Number"
    }
}

function tempr(){
    var temprr = +prompt("Write Temperature");
    if(temprr === 40){
        document.getElementById('tempe').innerHTML = "“It is too hot outside.”"
    } else if(temprr === 30){
        document.getElementById('tempe').innerHTML = "“The Weather today is Normal.”"
    } else if(temprr === 20){
        document.getElementById('tempe').innerHTML = "“Today’s Weather is cool.”"
    } else if(temprr === 10){
        document.getElementById('tempe').innerHTML = "“OMG! Today’s weather is so Cool.”"
    } else{
        document.getElementById('tempe').innerHTML = "Wrong input"
    }
}

function minical(){
    var mic = +prompt("input First Value");
    var mic2 = prompt("Input Operation  +, -, *, /, %")
    var mic1 = +prompt("input Second Value");
    if(mic2 ==="+"){
        document.getElementById('mical').innerHTML = mic + mic1;
    } else if(mic2 ==="-"){
        document.getElementById('mical').innerHTML = mic - mic1;
    } else if(mic2 ==="*"){
        document.getElementById('mical').innerHTML = mic * mic1;
    } else if(mic2 ==="/"){
        document.getElementById('mical').innerHTML = mic / mic1;
    } else if(mic2 ==="%"){
        document.getElementById('mical').innerHTML = mic % mic1;
    } else{
        document.getElementById('mical').innerHTML ="Wrong input!";
    }
}

function ascif(){
    var strr = prompt("Enter a character");
    var str1 = strr.charCodeAt(0);
    document.getElementById('asci').innerHTML = `The ASCII Value of (${strr}) is: ${str1}`;
}

function intt(){
    var inte = +prompt("Enter First Number");
    var inte1= +prompt("Enter Second Number"); 
    if(inte>inte1){
        document.getElementById('intl').innerHTML ="Value of First Number "+ inte+" is greater then the second value "+inte1;
    } else if(inte<inte1){
        document.getElementById('intl').innerHTML ="Value of Second Number "+ inte1+" is greater then the First value "+inte;
    } else{
        document.getElementById('intl').innerHTML ="Both integers are equal"
    }
}

function pnzna(){
    var pnz = +prompt("Type Any Number");
    if(pnz < 0){
        document.getElementById('pnzn').innerHTML ="This is a Negitave Number "+ pnz;
    } else if(pnz > 0){
        document.getElementById('pnzn').innerHTML ="This is a Positive Number "+ pnz;
    } else {
        document.getElementById('pnzn').innerHTML ="The Value is Zero";  
    }
}

function vowll(){
    var vwl = +prompt(" Write Any Number Between 1 to 5 to get a vovel");
    if(vwl === 1){
        document.getElementById('vowl').innerHTML ="The 1st Vowel is 'A'";  
    } else if(vwl === 2){
        document.getElementById('vowl').innerHTML ="The 2nd Vowel is 'E'";  
    }  else if(vwl === 3){
        document.getElementById('vowl').innerHTML ="The 3rd Vowel is 'I'";  
    }  else if(vwl === 4){
        document.getElementById('vowl').innerHTML ="The 4th Vowel is 'O'";  
    }  else if(vwl === 5){
        document.getElementById('vowl').innerHTML ="The 5th Vowel is 'U'";  
    } else {
        document.getElementById('vowl').innerHTML ="Wrong Input";  

    }
}

function passco(){
    var pas1a = document.getElementById("pass1q").value;
    var pas1b = document.getElementById("pass1z").value;
    if(pas1a === pas1b){
        document.getElementById('paspp').innerHTML =`“Correct! <br> The password you <br>
        entered matches <br> the original password”`;  
    } else {
        document.getElementById('paspp').innerHTML ="“Incorrect password”";
    }
}

function solfi(){
    var sovl = +prompt("Write Hours");
if (sovl < 18) {
    alert("Good day");}
else{
  alert("Good evening");
}
}