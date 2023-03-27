var first_image=1;
document.getElementById(first_image).className="thumbnail active";

function view(img){
document.getElementById(first_image).className="thumbnail image";
img.className="thumbnail active";
document.getElementById(0).src=img.src;
first_image=img.id
}

function description_nintendo(){
var nintendo="Nintendo Switch<br><p1> Neon Blue + Neon Red Joy - Con</p1><p>3 in 1 mode Hybrid video game console with Bluetooth controllers.</p>";
document.getElementById("description").innerHTML=nintendo;
}


function description_ps5(){
var ps5="Play Station 5<br><p1>The latest sony PlayStation</p1><br><p2>PS5 offers incredibly fast SSD,gorgeous 4K visuals,immersive 3D audio &amp; many more features.</p2>";
document.getElementById("description").innerHTML=ps5;
}

function description_headset(){
var headset="Arctis Pro Headset<br><p3>steelseries Arctis Pro Wireless gaming headset is Dual wireless with swappable battery system &amp; constructed with Light weight aluminium alloy and steel.</p3>";
document.getElementById("description").innerHTML=headset;
}

function description_laptop(){
var laptop="Razer Blade Gaming laptop<br><p3>The smallest &amp; most powerful Razer Blade 14-inch Gaming Laptop with AMD Ryzen<sup>TM</sup> 9 5900HX Processor,8 Cores/ 16 Threads, 3.3GHz Base, 4.6 GHz Max Boost.</p3>";
document.getElementById("description").innerHTML=laptop;
}

function description_oculus(){
var oculus="Oculus Quest 2<br><p4>All in-one-Gaming System built for Vitual Reality with No Wires, No PC's &amp;No limits.</p4> ";
document.getElementById("description").innerHTML=oculus;
}

function pagecolor(color){
document.body.style.background=color;
}

function textcolor(color){
document.getElementById("description").style.color=color;
document.body.style.color=color;
}