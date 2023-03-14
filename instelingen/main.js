//setup
let naam = "siem";
function update() {
    document.getElementById("text").innerHTML = "naam gewijzigd naar  "+naam;
}

//code voor de knop
const btn= document.getElementById("button");button.addEventListener('click', function(){var name = document.getElementById("myName").value;naam=name;update();});