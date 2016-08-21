const museumsDatasetUrl = "../../atasets/museums.json";

fetch(museumsDatasetUrl)
  .then(response => response.json())
  .catch(function (e) {
    console.log("tripped");
    return [1,2,3];
  })
  .then(museums => console.log(museums));
//  .catch(error => console.log("oh no", error));