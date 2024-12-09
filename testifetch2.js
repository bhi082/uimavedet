function allData() {
    fetch("https://bri3.fvh.io/opendata/uiras/uiras_latest.geojson")
      .then(function (response) {
        return response.json();
      })
      .then(function (responseJson) {
        const elements = [];
        for (let i = 0; i < responseJson.features.length; i++) {
          const feature = responseJson.features[i];
          let waterTemp = feature.properties.measurement?.temp_water;
          let servicemapUrl = feature.properties.servicemap_url;
          let sijainti = "Sijainti"
  
          if (waterTemp === undefined) {
            waterTemp = "Ei tiedossa";
          }
          if (servicemapUrl === "") {
            sijainti = ""
          }
  
          const divString =
          `  <div class="kortit">
    <div class="card1, card0" style="width: 25rem">
      <div class="card-body">
        <div class="lead">${feature.properties.name}</div>
        <h2 class="card-title">${waterTemp}&deg;C</h2>
        <p class="small text-muted">
<a href="${servicemapUrl}">${sijainti}</a>
</p>
      </div>
    </div>
    </div>`;
          elements.push(divString);
        }
  
        document.getElementById("kortti").innerHTML = elements.join("");
      })
      .catch(function (error) {
        console.error("Virhe haettaessa dataa:", error);
      });
  }
  
  allData();
  /* <div>${i} ${feature.properties.name} ${waterTemp}</div> */