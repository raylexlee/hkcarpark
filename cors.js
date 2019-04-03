const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = "http://wyk.edu.hk"; // site that doesn’t send Access-Control-*
fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/http://esda.wyk.edu.hk/status/staff.html
.then(response => response.text())
.then(contents => console.log(contents))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))
