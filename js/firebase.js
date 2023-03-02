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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database().ref("sensor");

// Get data from firebase
database.on("value", function(snapshot){
    console.clear();
    snapshot.forEach(function(element){
        console.log(element.key);
        console.log(element.val())
    })
})