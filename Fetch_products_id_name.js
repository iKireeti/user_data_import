
const fs = require('fs');
fs.readFile('./products.json', (err, input) => {

    if (err) throw err;

    var data = JSON.parse(input);

    const map = new Map();

    fs.writeFile("products.csv", "id,name" + "\n", { flag: 'a' }, (err) => {
        if (err) console.log(err);
    })
    for (i in data["content"]) {
        var ite = data["content"][i]["id"] + "," + data["content"][i]["name"];
        console.log(ite);
        fs.writeFile("products.csv", ite + "\n", { flag: 'a' }, (err) => {
            if (err) console.log(err);
        })
    }
})

