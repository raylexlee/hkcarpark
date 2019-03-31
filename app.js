fetch('https://api.data.gov.hk/v1/carpark-info-vacancy?lang=zh_TW')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const myArr = JSON.parse(JSON.stringify(myJson));  
    console.log(myArr);
  });

