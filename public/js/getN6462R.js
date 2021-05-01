// Import Firebase Config Script
let imported = document.createElement("script");
imported.src = "fbConfig.js";
document.head.appendChild(imported);

// Retrieve / Display Cherokee 140 Image
let storageRef = firebase.storage().ref();
storageRef
  .child("aircraft/N6462R.png")
  .getDownloadURL()
  .then(function (url) {
    let N6462R = url;
    document.getElementById("N6462R").src = N6462R;
  });
