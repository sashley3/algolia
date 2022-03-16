

const fileName = './data/products.json'
const file = require(fileName);
const appId = '8OZ9VW6NUV'
const myIndex = 'SpencerWilliams_dataset'
const secretKey = '6aa711c926323382cb379f3212bb187e'
const fs = require('fs')

//Transform data
fs.readFile(fileName, 'utf8', (err, jsonString) => {
  if (err) {
    console.log("Error reading file from disk:", err)
    return
  }
  try {
    const product = JSON.parse(jsonString)

    for (let i = 0; i < product.length; i++){

      const cats = product[i].categories;

      for (let j = 0; j < cats.length; j++){

        const currentCat = cats[j]

        if(currentCat.toLowerCase().includes('cameras')){

          const originalPrice = product[i].price

          const newPrice = Math.floor(originalPrice*.8)

          file[i].price = newPrice

            fs.writeFileSync(fileName, JSON.stringify(file, null, 2), function writeJSON(err) {
            if (err) return console.log(err)
              console.log('writing to ' + fileName)
            })

            break;

          }
       }
     }
   } catch(err) {
    console.log('Error parsing JSON string:', err)
  }

// Send data to Algolia
  const algoliasearch = require('algoliasearch');
  const client = algoliasearch(appId,secretKey);
  const index = client.initIndex(myIndex);
  const productsJSON = require(fileName);
    index.saveObjects(productsJSON, {
      autoGenerateObjectIDIfNotExist: true
    }).then(({ objectIDs }) => {
      console.log(objectIDs);
    });


})





