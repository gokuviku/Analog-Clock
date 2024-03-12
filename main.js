let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");

function displayTIme(){
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30*hh + mm/2;
  let mRotation = 6*mm;
  let sRotation = 6*ss;

  hr.style.transform=`rotate(${hRotation}deg)`;
  mn.style.transform=`rotate(${mRotation}deg)`;
  sc.style.transform=`rotate(${sRotation}deg)`;

}

setInterval(displayTIme,1000);

