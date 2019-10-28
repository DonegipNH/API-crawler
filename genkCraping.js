const puppeteer = require('puppeteer');

const genkCraping = async(time) =>{
    // open browser and access to https://vnexpress.net/
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://genk.vn/');
    console.log(`page opened`);

    // take searched result from https://vnexpress.net/
    const data = await page.evaluate(() => {
        let titles = document.querySelectorAll('h4.knswli-title a');
        let postedTimes = document.querySelectorAll('span.knswli-time');
        titleLinks = [];  
        for(let i =0; i<postedTimes.length; i++){
            titleLinks.push({
                title: titles[i].getAttribute('title'),
                url: titles[i].getAttribute('href'),
                postedTime: postedTimes[i].getAttribute('title')
            });
        }
        return titleLinks;                 
    });      
    console.log(time);
    console.log(data);   
    await browser.close();
};    

module.exports = genkCraping;
