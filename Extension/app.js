var x = document.getElementsByClassName("week_header");
var z = document.getElementsByClassName("week_block");
var b = document.getElementsByClassName("week_times");
var a = document.getElementsByClassName("week_emptycell_black");
var e = document.getElementsByClassName("week_table");
var wn = document.getElementsByClassName("week_number");
var button = document.getElementsByClassName("button");

console.log(button);

//visibility: hidden;
for (q = 0; q < wn.length; q++) {
  wn.item(q).style.fontSize = "25px";
  wn.item(q).style.fontStyle = "italic";
  wn.item(q).style.fontFamily = "math";
}

for (h = 0; h < a.length; h++) {
  a.item(h).style.visibility = "hidden";
}
for (H = 0; H < e.length; H++) {
  e.item(H).style.visibility = "hidden";
}
for (i = 0; i <= 5; i++) {
  x.item(i).style.backgroundColor = "rgb(120,15,30)";
  x.item(i).style.color = "white";
  x.item(i).style.width = "18%";
  x.item(i).style.height = "50px";
  x.item(i).style.textAlign = "center";
  x.item(i).style.fontSize = "25px";
  x.item(i).style.visibility = "visible";
  x.item(i).style.borderRadius = "25px";
}

for (m = 0; m < z.length; m++) {
  z.item(m).style.backgroundColor = "green";
  z.item(m).style.color = "white";
  z.item(m).style.fontSize = "16px";
  z.item(m).style.border = "dashed 5px red";
  z.item(m).style.visibility = "visible";
}
for (n = 0; n < b.length; n++) {
  b.item(n).style.textAlign = "center";
  b.item(n).style.backgroundColor = "rgb(220, 110, 50)";
  b.item(n).style.fontStyle = "italic";
  b.item(n).style.fontFamily = "math";
  b.item(n).style.fontSize = "22px";
  b.item(n).style.visibility = "visible";
}
x.item(6).remove();
x.item(5).remove();
