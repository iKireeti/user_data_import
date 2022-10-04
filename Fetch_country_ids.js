
const fs = require('fs');
fs.readFile('./countries.json', (err, input) => {

    if (err) throw err;
    var data = JSON.parse(input);

    fs.writeFile("country.csv", "id,display_name,name" + "\n", { flag: 'a' }, (err) => {
        if (err) console.log(err);
    })

    for (i in data["field"]["picklist"]["values"]) {

        var ite = data["field"]["picklist"]["values"][i]["id"] + "," + data["field"]["picklist"]["values"][i]["displayName"] + "," + data["field"]["picklist"]["values"][i]["name"];
        console.log(ite)

        fs.writeFile("country.csv", ite + "\n", { flag: 'a' }, (err) => {
            if (err) console.log(err);
        })
    }
})

