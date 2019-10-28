const mongo = require('./data');
const mongoose = require('mongoose');

mongoose
    .connect("mongodb://127.0.0.1:27017/restDB", {useNewUrlParser: true})
    .then(() => console.log('MongoDB is connected'))
    .catch((err) => console.log(err));

const compareAndSaveResult = dataObjs => {
    try{
        const GenkModel = require('./models/genkModel');
        GenkModel.find({}, (err, genkList) => {
            return genkList;
        })
        .then(genkList => {
            let lastTime = new Date(genkList[0].postedTime); // get the last time that data are crawled
            // filter data list to get newData that have postedTime > lastTime 
            dataObjs.filter(genk => {
                let timeCrawl = new Date(genk.postedTime);
                return timeCrawl > lastTime;
            }).sort((a,b) => {                                 // sort new data
                let timeA = new Date(a.postedTime);
                let timeB = new Date(b.postedTime);
                return timeA > timeB;
            });
            dataObjs.forEach(genk => {
                let genkModel = new GenkModel(genk);
                genkModel.save().catch(err => console.log(err));
            });            
        })
        .then(() => {
            mongoose.disconnect();
        })
        .catch(err => console.log(err));        
    }catch(err){    
        console.error(err);
    }
};

module.exports = compareAndSaveResult;