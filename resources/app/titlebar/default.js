(function () {
      
      const remote = require('electron').remote; 
      
      function init() { 
        document.getElementById("min-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.minimize(); 
        });
        
        document.getElementById("max-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          if (!window.isMaximized()) {
            window.maximize();
          } else {
            window.unmaximize();
          }	 
        });
        
        document.getElementById("close-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.close();
        });

        document.getElementById("PinkTheme").addEventListener("click", function (e) {
          $('#title-bar').removeClass("w3-green w3-blue w3-brown w3-pink").addClass("w3-pink");
          $('#header-bar').removeClass("w3-green w3-blue w3-brown w3-pink").addClass("w3-pink");
        });
        document.getElementById("GreenTheme").addEventListener("click", function (e) {
          $('#title-bar').removeClass("w3-green w3-blue w3-brown w3-pink").addClass("w3-green");
          $('#header-bar').removeClass("w3-green w3-blue w3-brown w3-pink").addClass("w3-green");
        });
        document.getElementById("BlueTheme").addEventListener("click", function (e) {
          $('#title-bar').removeClass("w3-green w3-blue w3-brown w3-pink").addClass("w3-blue");
          $('#header-bar').removeClass("w3-green w3-blue w3-brown w3-pink").addClass("w3-blue");
        });
        document.getElementById("BrownTheme").addEventListener("click", function (e) {
          $('#title-bar').removeClass("w3-green w3-blue w3-brown w3-pink").addClass("w3-brown");
          $('#header-bar').removeClass("w3-green w3-blue w3-brown w3-pink").addClass("w3-brown");
        });
      }; 
      
      document.onreadystatechange = function () {
        if (document.readyState == "complete") {
          init(); 
        }
      };
})();
