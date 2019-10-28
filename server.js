const genkCraping = require('./genkCraping');
const compareAndSaveResult = require('./resultAnalysis');

genkCraping(Date.now()).then(dataObjs => {
    compareAndSaveResult(dataObjs);
}).catch(console.error)