fetch("https://bri3.fvh.io/opendata/uiras/24E124126D011299.geojson")
    .then(function(response) { 
        return response.json(); 
    })
    .then(function(responseJson) {
        // Etsi veden lämpötila JSON-objektista oikeasta kohdasta
        const tempWater = responseJson.properties.measurement.temp_water;

        // Aseta lämpötila HTML-elementtiin
        document.getElementById("water_temp").innerHTML = `Veden lämpötila: ${tempWater} °C`;
    })
    .catch(function(error) {
        console.error("Virhe haettaessa dataa:", error);
        document.getElementById("water_temp").innerHTML = "Virhe haettaessa lämpötilatietoa";
    });
