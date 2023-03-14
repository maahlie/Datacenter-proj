// import firebase file
import { sensor } from "./firebase.js";

// GetAllRecords
sensor.limitToLast(1000).on("value", function (snapshot) {
  snapshot.forEach(function (element) {
    document.getElementById("history").innerHTML += `
      <li>
      <div>
      <time>${element.key}</time>
        <div class="discovery">
          <h1>Kamertemperatuur</h1>
          <h1>${element.val().kamertemperatuur}°C</h1>
        </div>
        <div class="scientist">
          <h1>Luchtvochtigheid</h1>
          <h1>${element.val().luchtvochtigheid}%</h1>
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
