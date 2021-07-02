const { fetchMyIP,  fetchCoordsByIP } = require('./iss');

let ip = '';

fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned IP:' , ip);
});

fetchCoordsByIP(ip, (error, coords) => {
  if (error) {
    console.log("It didn't work!", error);
    return;
  }
  console.log('It worked! Returned ', coords);
});

//fetchCoordsByIP(fetchMyIP(callback));
// call the function fetchCoordsByIP to get coordinates by ip address
// fetchCoordsByIP(ip,callback) {
// }