console.log("laader opstarten");
document.addEventListener("DOMContentLoaded", async function() {
  const container = document.getElementById("container");
  const linkTemplate = document.getElementById("linkTemplate");

  //try {
    //const response = await fetch("http://localhost:8158/links.json");
    //const links = await response.json();
  const links = [{url: "https://google.com/",text: "Google",bgColor: "#1E90FF",textColor: "#000000",iconClass: "fa-globe",iconcolor: "#c7c6ee"},{url: "https://example.com/",text: "Example",bgColor: "#FF6347",textColor: "#FFFFFF",iconClass: "fa-code",iconcolor: "#c7c6ee"},{url: "https://ijs.com/",text: "ijs",bgColor: "#32CD32",textColor: "#000000",iconClass: "fa-rocket",iconcolor: "#c7c6ee"}]
    console.log("lijst geladen!");
    console.log("tegels laden en stylen")
    links.forEach(linkData => {
      const newLink = linkTemplate.content.cloneNode(true);

      const link = newLink.querySelector("a");
      link.href = linkData.url;

      const preTag = newLink.querySelector("pre");
      preTag.textContent = linkData.text;
      const iconElement = newLink.querySelector(".icon");
      iconElement.classList.add("fa", "fa-4x", linkData.iconClass);
      iconElement.style.color= linkData.iconcolor;
      iconElement.style.zIndex = "9999"; // Set z-index

      const tegelDiv = newLink.querySelector(".tegel");
      tegelDiv.style.backgroundColor = linkData.bgColor;
      preTag.style.color = linkData.textColor;

      container.appendChild(newLink);
    }
    
    );});