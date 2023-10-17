// let bcouter = document.querySelectorAll(".drum").length;

// for (let i = 0; i < bcouter; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", bclicker);

//   function bclicker() {

//   }
// }

let dum = document.querySelectorAll(".drum")[0];
dum.addEventListener("click", changer);

function changer() {
  document.getElementById("title").innerHTML = "my kit";
}
