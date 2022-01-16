var x = document.getElementsByClassName("week_header");
var z = document.getElementsByClassName("week_block");
var b = document.getElementsByClassName("week_times");
var a = document.getElementsByClassName("week_emptycell_black");
var e = document.getElementsByClassName("week_table");
var wn = document.getElementsByClassName("week_number");

for (q = 0; q < wn.length; q++) {
  wn.item(q).style.fontSize = "18px";
  wn.item(q).style.fontStyle = "italic";
  wn.item(q).style.fontFamily = "math";
}

for (h = 0; h < a.length; h++) {
  a.item(h).style.backgroundColor = "rgb(220, 110, 50)";
}
for (H = 0; H < e.length; H++) {
  e.item(H).style.backgroundColor = "rgb(220, 110, 50)";
}
for (i = 0; i <= 5; i++) {
  x.item(i).style.backgroundColor = "rgb(120,15,30)";
  x.item(i).style.color = "white";
  x.item(i).style.width = "18%";
  x.item(i).style.height = "50px";
  x.item(i).style.textAlign = "center";
}
for (m = 0; m < z.length; m++) {
  z.item(m).style.backgroundColor = "green";
  z.item(m).style.color = "black";
}
for (n = 0; n < b.length; n++) {
  b.item(n).style.textAlign = "center";
  b.item(n).style.backgroundColor = "rgb(220, 110, 50)";
  b.item(n).style.fontStyle = "italic";
  b.item(n).style.fontFamily = "math";
  b.item(n).style.fontSize = "15px";
}
x.item(6).remove();
x.item(5).remove();
