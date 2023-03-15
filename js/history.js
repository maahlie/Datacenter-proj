// import firebase file
import { sensor } from "./firebase.js";

// Get All Records once
sensor.once("value", function (snapshot) {
  Object.entries(snapshot.val()).reverse().forEach(function (element) {
    document.getElementById("history").innerHTML += `
      <li>
      <div>
      <time>${element[0]}</time>
        <div class="discovery">
          <h1>Kamertemperatuur</h1>
          <br/>
          <h1>${element[1].kamertemperatuur}°C</h1>
        </div>
        <div class="scientist">
          <h1>Luchtvochtigheid</h1>
          <br/>
          <h1>${element[1].luchtvochtigheid}%</h1>
        </div>
      </div>
    </li>
      `;
  });

  // Style
  var items = document.querySelectorAll(".timeline li");
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        if (!items[i].classList.contains("in-view")) {
          items[i].classList.add("in-view");
        }
      } else if (items[i].classList.contains("in-view")) {
        items[i].classList.remove("in-view");
      }
    }
  }
  callbackFunc();
  window.addEventListener("load", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
  document.getElementById("pre-loader").style.display = "none";
});
