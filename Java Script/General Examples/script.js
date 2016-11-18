
function chg_content()
{
document.getElementById("id_demo").innerHTML="Hello Manasa";
}
function chg_attribute()
{
document.getElementsByTagName("P")[0].setAttribute("class","class_demo");
}
function has_attribute()
{
 var x= document.getElementById("id_demo").hasAttribute("onclick");
 document.getElementById("id_demo").innerHTML=x;
}
function chg_style()
{
 var x= document.getElementsByTagName("H4")[0].style.letterSpacing="15px";
 
}
function myFunction() {
    document.getElementById("id_an").style.WebkitAnimation = "mynewmove 4s 2"; // Code for Chrome, Safari and Opera
    document.getElementById("id_an").style.animation = "mynewmove 4s 2";
}
function show()
{
  document.getElementById("id_show").style.display="block";
}
function hide()
{
  document.getElementById("id_show").style.display="none";
}
