const fs = require('fs');
// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
  fs.writeFile(fileName, data, err => {
    if (err) {
      reject(err);
      return;
    }
    else {
      console.log('Page generated');
    };
  });
  });
};
 module.exports = writeToFile;