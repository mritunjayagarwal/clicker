const puppeteer = require('puppeteer')
describe("Setup Testing",()=>{
    var i = 0;
    while(i < 10){
        it("Home landing page",async()=>{
            const names = ["hameli", "Chanda", "Charan", "Chatura", "Chetan", "Chitrinee", "Chitt", "Darshan", "Deepika", "Deepnita", "Devanand", "Devansh", "Devika", "Dharma", "Dhaval", "Dinesh", "Garima", "Gauri", "Harini" ,"Aarav", "Abhinav", "Alka", "Anamika", "Ananya", "Archana", "Basanti", "Bhavya", "Aaryan", "Abhay", "Amrita", "Ashwin", "Arun", "Ananda", "Amrit", "Ishan", "Jiva", "Kalyani", "Kaveri", "Himani", "Isha", "Jatin", "Jyoti", "Kanika", "Karan", "Karishma", "Karma", "Kartik", "Karuka", "Kash", "Kashiti", "Kasi", "Kaur", "Kaushal", "Kirti", "Krish", "Laxmi", "Manas", "Lavanya", "Mallika", "Mitali", "Latika", "Monisha", "Nikhil", "Nitish", "Ojas", "Pallavi", "Paras", "Param", "Prema", "Prem", "Priti", "Radhika", "Priyanka", "Priya", "Rajni", "Sanjay", "Sachin", "Savita", "Sanjiv", "Tamanna", "Tanay", "Tarun", "Taru", "Tvisha", "Tanuja", "Umika", "Vandana", "Varun", "Vasudha", "Vijay", "Urvi", "Uttara", "Uttam", "Vasanti", "Vikram", "Vinay", "Virendra", "Visala", "Yogi", "Yuvraj", "Zeeshan"]
            const surnames = ["Agarwal", "Kaushal", "Goyal", "Agrawal", "Mangal", "Gautam", "Chaudhary", "Jain", "Gupta", "Sharma", "Singh", "Tiwari", "Tyagi"]
            const cities = ["Agra", "Mathura"];
            const first = ["8", "9"];
            const name = names[Math.floor(Math.random() * names.length)] + " " + surnames[Math.floor(Math.random() * surnames.length)];
            const number = String(first[Math.floor(Math.random() * first.length)] + Math.floor(Math.random() * 1000000000));
            const city = cities[Math.floor(Math.random() * cities.length)]
            const browser = await puppeteer.launch({ headless: false})
            const context = await browser.createIncognitoBrowserContext();
            const page = await context.newPage();
            page.goto("https://live.feetracer.com/EventManagement/Likers/Index/722f096f-a6c5-468d-b5aa-595f8781aab1196")
            await page.waitForSelector("#likeit")
            await page.click("#likeit");
            await page.waitForSelector("#Name");
            await page.waitFor(500)
            await page.type("#Name", name);
            await page.type("#City", city);
            await page.type("#Mobileno", number);
            await page.waitFor(500);
            await page.click("#Submitlike");
            await page.waitFor(2000);
            await page.close();
            await browser.close();
          });
          i++;
    }
});