console.log("WebTegel opstarten");

document.addEventListener("DOMContentLoaded", async function() {
  const container = document.getElementById("container");
  const linkTemplate = document.getElementById("WebTile");

  const links = [{url: "http://localhost:8158/WebTile/TestTile.html", kleur: "#f6ea68"}];

  links.forEach(linkData => {
    const newLink = document.importNode(linkTemplate.content, true);
    
    //imbed maken
    const link = newLink.querySelector("iframe");
    link.src = linkData.url;
    
    //achtergrond stylen
    const tegelDiv = newLink.querySelector(".tegel");
      tegelDiv.style.backgroundColor = linkData.kleur;
    console.log("klaar!")

    container.appendChild(newLink);
  });
});
