let radius;

 document.getElementById("click").onclick = function() {
  radius =  document.getElementById("cycle").value;
    radius = Number(radius);
    let pi = 3.14;
   a =  pi * Math.pow(radius,2);
  
    document.getElementById("answer").innerHTML =
    "Answer :-" + a;
 }