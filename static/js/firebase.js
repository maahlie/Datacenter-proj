// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-4CeYCqQ3-XK2dCK9w1LenLZ78csVkHY",
    authDomain: "rpi-dht-monitor-ac4b9.firebaseapp.com",
    databaseURL: "https://rpi-dht-monitor-ac4b9-default-rtdb.firebaseio.com",
    projectId: "rpi-dht-monitor-ac4b9",
    storageBucket: "rpi-dht-monitor-ac4b9.appspot.com",
    messagingSenderId: "978025601907",
    appId: "1:978025601907:web:084ca2d85d6b9a5b930306"
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// // Set database variable
var sensor = firebase.database().ref("sensor");

function GetLastRecord() {
    sensor.orderByChild("key").limitToLast(1).on("value", function (snapshot) {
        snapshot.forEach(function (element) {
            document.getElementById("kamertemperatuur").innerHTML = element.val().kamertemperatuur;
            document.getElementById("luchtvochtigheid").innerHTML = element.val().luchtvochtigheid;
            document.getElementById("key").innerHTML = element.key;
            document.getElementById("cpu_temperatuur").innerHTML = element.val().cpu_temperatuur;
            document.getElementById("cpu_usage").innerHTML = element.val().cpu_usage;
            document.getElementById("ram_usage").innerHTML = element.val().ram_usage;
            document.getElementById("pre-loader").style.display = "none";
        });

    });
}

function GetAllRecords() {
    sensor.on("value", function (snapshot) {
        console.clear();
        snapshot.forEach(function (element) {
            console.log(element.key);
            console.log(element.val());
        });
    });
}