function findlargenum(){
    let a=document.getElementById("num1").value;
    let b=document.getElementById("num2").value;
    let c=document.getElementById("num3").value;
    let d=document.getElementById("num4").value;
    let e=document.getElementById("num5").value;

    
    if (a >= b && a >= c && a >= d && a >= e) {
    document.getElementById("output").innerText="Largest number is: " + a;
} 
else if (b >= a && b >= c && b >= d && b >= e) {
   document.getElementById("output").innerText= "Largest number is: " + b;
} 
else if (c >= a && c >= b && c >= d && c >= e) {
    document.getElementById("output").innerText="Largest number is: " + c;
} 
else if (d >= a && d >= b && d >= c && d >= e) {
   document.getElementById("output").innerText="Largest number is: " + d;
} 
else {
    document.getElementById("output").innerText="Largest number is: " + e;
}
}