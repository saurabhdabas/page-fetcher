const args = process.argv;
const input = args.slice(2,4);
console.log(input);

const request = require('request');
const fs = require('fs')

request(`${input[0]}`, function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  
  fs.writeFile('./fetcheddata.js', body, err => {
  if (err) {
    console.error(err)
    return
  }
  //file written successfully
})

});


