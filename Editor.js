
let link = "www.google.com";

function input_handelaar_bg_kleur(kleur) {
  const tegel = document.getElementById("tegel");
  tegel.style.background = kleur;
};

function input_handelaar_txt_kleur(kleur) {
  const tegel = document.getElementById("tegel");
  tegel.style.color = kleur;
};

function input_handelaar_icon(txt) {
  const tegel = document.getElementById("icon");
  tegel.style.class = txt;
};
/*
oke dit is de code om de input te krijgen
voor de kleur
*/
document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('submitButton');

  submitButton.addEventListener('click', function(){
    var kleurInput = document.getElementById('kleur');
    var textkleurInput = document.getElementById('text_kleur');
    var textkleurInput = document.getElementById('text_kleur');
    link = document.getElementById('url');
    var iconin = document.getElementById('icon');
    link = link.value
    var bgkleur = kleurInput.value;
    var icon = iconin.value;
    var txtKleur = textkleurInput.value;
    input_handelaar_bg_kleur(bgkleur);
    input_handelaar_txt_kleur(txtKleur);
    input_handelaar_icon(icon);

    
  });
});