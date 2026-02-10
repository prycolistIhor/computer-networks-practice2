const mymodule = require('./mymodule');

const directory = process.argv[2]
const extention = process.argv[3]

mymodule(directory, extention, (error, files) => {
  if (error) {
    console.error('Error: ', error.message);
    return;
  }

  files.forEach(file => {
    console.log(file);
  });
});
