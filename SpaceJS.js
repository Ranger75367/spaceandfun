// JavaScript source code

//Declare pictures

let sun = "https://my.spline.design/earthcopy-5d7cfe9b1a4c57ff915bb151d1667ace/";
let mercury = "https://my.spline.design/mercury-6912cf92ac368584584eef52cc15fb3c/";
let venus = "https://my.spline.design/venus-a1a4143fbf752324bea143ad0ec3c72a/";
let earth = 'https://my.spline.design/untitled-13d722acb3655a6a3d8236f2a6d2ad7f/';
let mars = "https://my.spline.design/untitled-9b78d6529828fe04b70ea91e8afd229e/";
let jupiter = "https://my.spline.design/jupiter-3555c1b51d219c27537f5bb82e382c49/";
let saturn = "https://my.spline.design/marscopy-42687107841eb38ff055b131fec14d03/";
let uranus = "https://my.spline.design/uranus-56baa6e8ea4872d38df7bf331c110fe7/";
let neptune = "https://my.spline.design/neptune-c4a4f04a8450e4c38519ee2f0f54a5c5/";

//Declare notes
let sunNote = "Fun Fact: The sun contains 99.86% of the mass of the entire solar system and could contain roughly 1.3 million Earths.";
let mercuryNote = "Fun Fact: Mercury is the smallest and fastest planet in the solar system, orbiting the sun in just 88 days.";
let venusNote = "Fun Fact: Venus has a surface temperature of nearly 482 degrees C (900 degrees F), and a pressure of 95 times that of Earth\'s.";
let earthNote = "Fun Fact: Earth is the only place in the solar system where water can be present in all the three states - solid, liquid and gas.";
let marsNote = "Fun Fact: Mars has a day that is slightly longer than Earth's, and it is possible that it once had a blue sky and flowing water.";
let jupiterNote = "Fun Fact: Jupiter has powerful storms and even has lightning strikes.They are sites of strong upward motion of the air, which leads to the formation of bright and dense clouds that make Jupiter appear very beautiful.";
let saturnNote = "Fun Fact: Saturn is the windiest planet in our solar system, with winds up to 1,100 miles per hour.";
let uranusNote = "Fun Fact: Uranus is mostly made of flowing icy materials above a solid core. Uranus has a thick atmosphere made of methane, hydrogen, and helium. Uranus is the only planet that spins on its side.";
let neptuneNote = "Fun Fact: Neptune has a rocky inner core surrounded by water and a thick atmosphere of hydrogen, helium, and methane.";


window.addEventListener("load", sunClick);

function sunClick() {
    document.getElementById("planetImg").src = sun;
    document.getElementById("planetNote").innerHTML = sunNote;
}

function mercuryClick() {
    document.getElementById("planetImg").src = mercury;
    document.getElementById("planetNote").innerHTML = mercuryNote;
}

function venusClick() {
    document.getElementById("planetImg").src = venus;
    document.getElementById("planetNote").innerHTML = venusNote;
}

function earthClick() {
    document.getElementById("planetImg").src = earth;
    document.getElementById("planetNote").innerHTML = earthNote;
}

function marsClick() {
    document.getElementById("planetImg").src = mars;
    document.getElementById("planetNote").innerHTML = marsNote;
}

function jupiterClick() {
    document.getElementById("planetImg").src = jupiter;
    document.getElementById("planetNote").innerHTML = jupiterNote;
}

function saturnClick() {
    document.getElementById("planetImg").src = saturn;
    document.getElementById("planetNote").innerHTML = saturnNote;
}
function uranusClick() {
    document.getElementById("planetImg").src = uranus;
    document.getElementById("planetNote").innerHTML = uranusNote;
}

function neptuneClick() {
    document.getElementById("planetImg").src = neptune;
    document.getElementById("planetNote").innerHTML = neptuneNote;
}


let moonChange = "";

function weightChange() {

    let newWeight = document.getElementById("weight").valueAsNumber * document.getElementById("planetG").value;

    moonChange = "Your weight on ";

    let sel = document.getElementById("planetG");
    let text = sel.options[sel.selectedIndex].text; 

    moonChange += text + " would be: " + newWeight.toFixed(2) + " lbs.";

    document.getElementById("moonWeight").innerHTML = moonChange;

}
