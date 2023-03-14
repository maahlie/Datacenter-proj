// import firebase file
import { sensor } from "./firebase.js";

// GetLastRecord
sensor
  .limitToLast(1)
  .on("value", function (snapshot) {
    snapshot.forEach(function (element) {
      document.getElementById("kamertemperatuur").innerHTML =
        element.val().kamertemperatuur;
      document.getElementById("luchtvochtigheid").innerHTML =
        element.val().luchtvochtigheid;
      document.getElementById("key").innerHTML = element.key;
      document.getElementById("cpu_temperatuur").innerHTML =
        element.val().cpu_temperatuur;
      document.getElementById("cpu_usage").innerHTML = element.val().cpu_usage;
      document.getElementById("ram_usage").innerHTML = element.val().ram_usage;
      document.getElementById("pre-loader").style.display = "none";
      var serverkast =
        element.val().serverkast == 0
          ? ["status status_danger", "fa-solid fa-door-open", "Open"]
          : ["status status_success", "fa-solid fa-door-closed", "Dicht"];
      document.getElementById("serverkast_status").className = serverkast[0];
      document.getElementById("serverkast_icon").className = serverkast[1];
      document.getElementById("serverkast").innerHTML = serverkast[2];
    });
  });


