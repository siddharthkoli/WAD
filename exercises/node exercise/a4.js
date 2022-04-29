const fs = require('fs');

const path = './testfile.txt'

fs.appendFile(path, `Random number appended ${(Math.random() * 100) % 100}\n`, (err) => {
    if (err)
        console.log(`Error while appending to file: ${err}`);
    else
        console.log("Successfully written file.");
});

fs.readFile(path, (err, data) => {
    if (err)
        console.log(`Error while reading file: ${err}`);
    else {
        console.log("Data read from file:\n" + data);
    }
});