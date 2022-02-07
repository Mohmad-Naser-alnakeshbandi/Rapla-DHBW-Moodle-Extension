var x = document.getElementsByClassName("week_header");
var z = document.getElementsByClassName("week_block");
var b = document.getElementsByClassName("week_times");
var a = document.getElementsByClassName("week_emptycell_black");
var e = document.getElementsByClassName("week_table");
var wn = document.getElementsByClassName("week_number");
var data = document.getElementsByClassName("resource");
var person = document.getElementsByClassName("person");

for (d = 0; d < data.length; d++) {
  if (data.item(d).innerText == "XOnline-Veranstaltung Virtueller Raum") {
    data.item(d).style.color = "red";
    data.item(d).style.fontSize = "17px";
  }
  if (
    data.item(d).innerText.length < 15 &&
    data.item(d).innerText.length > 10
  ) {
    data.item(d).style.color = "blue";
    data.item(d).style.fontSize = "17px";
  }
}

//visibility: hidden;
for (q = 0; q < wn.length; q++) {
  wn.item(q).style.fontSize = "25px";
  wn.item(q).style.fontStyle = "italic";
  wn.item(q).style.fontFamily = "math";
  wn.item(q).style.visibility = "visible";
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
  x.item(i).style.fontSize = "35px";
  x.item(i).style.visibility = "visible";
  x.item(i).style.borderRadius = "25px";
}

for (m = 0; m < z.length; m++) {
  z.item(m).style.backgroundColor = "white";
  z.item(m).style.color = "black";
  z.item(m).style.fontSize = "18px";
  z.item(m).style.border = "dashed 3px black";
  z.item(m).style.visibility = "visible";
  z.item(m).style.boxShadow = "0px 10px 15px green";
  if (z.item(m).innerHTML.indexOf("Klausur") != -1) {
    z.item(m).style.border = "dashed 6px red";
  }
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
