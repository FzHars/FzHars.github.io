const menuToggle = document.querySelector(".menu-toggle input");
      const nav = document.querySelector("nav ul");

      menuToggle.addEventListener("click", function () {
        nav.classList.toggle("slide");
      });

      
      function showOverlay(imageSrc, altText, overlayText) {
        document.getElementById("overlayImage").src = imageSrc;
        document.getElementById("overlayImage").alt = altText;
        document.getElementById("overlayText").innerText = overlayText;
        document.getElementById("overlay").style.display = "flex";
      }

      function hideOverlay() {
        document.getElementById("overlay").style.display = "none";
      }