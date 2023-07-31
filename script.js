const fs = require("fs");
let apiKey = "";

fs.readFile('keys.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the JSON file:', err);
        return;
    }
  
    try {
        apiKey = JSON.parse(data)["weatherKey"];
        getRequest();
    } catch (parseError) {
        console.error('Error parsing JSON data:', parseError);
    }
});



function getRequest(){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`)
    .then(function(response) {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // Extract JSON data from the response
    })
    .then(function(rjson){
        console.log(rjson);
    })
    .catch(function(err) {console.error('Fetch Error:', err);});
}

