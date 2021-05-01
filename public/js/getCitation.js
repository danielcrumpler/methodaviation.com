// Import Firebase Config Script
let imported1 = document.createElement("script");
imported1.src = "fbConfig.js";
document.head.appendChild(imported1);

// Retrieve / Display Cherokee 140 Image
storageRef
  .child("aircraft/citation.jpg")
  .getDownloadURL()
  .then(function (url) {
    let citation = url;
    document.getElementById("citation").src = citation;
  })
  .catch((error) => {
    console.log(error);
  });
