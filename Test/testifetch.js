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
  
          if (waterTemp === undefined) {
            waterTemp = "Ei tiedossa";
          }
  
          const divString = `<div>${i} ${feature.properties.name} ${waterTemp}</div>`;
          elements.push(divString);
        }
  
        document.getElementById("kortti").innerHTML = elements.join("");
      })
      .catch(function (error) {
        console.error("Virhe haettaessa dataa:", error);
      });
  }
  
  allData();