const cheerio = require("cheerio");
const axios = require("axios");
const qs = require("qs");

function threed_result() {
  axios
    .get("https://philnews.ph/pcso-lotto-result/swertres-result/")
    .then((urlResponse) => {
      const $ = cheerio.load(urlResponse.data);

      let elevenDraw =
        "2PM: " + $('label[id="shortcode_swertres11am_id"]').text();
      let fourDraw = "4PM: " + $('label[id="shortcode_swertres4pm_id"]').text();
      let nineDraw = "9PM: " + $('label[id="shortcode_swertres9pm_id"]').text();

      let result = elevenDraw + "  " + fourDraw + "  " + nineDraw;
      console.log(result);

      

      var postData = qs.stringify({
        name: "Swertres",
        recipient: "+639261822638",
        msg: result,
      });
      //test
      let axiosConfig = {
        headers: {
          Accept: "application/json, text/javascript, */*; q=0.01",
          Origin: "http://txt.cogentech.biz",
          Referer: "http://txt.cogentech.biz",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Cookie: "0x369b808887=0x369b808887",
          "Accept-Language": "en-US,en;q=0.9",
          "X-Requested-With": "XMLHttpRequest",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 10; RMX1851 Build/QKQ1.190918.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/91.0.4472.120 Mobile Safari/537.36",
        },
      };

      axios
        .post("http://txt.cogentech.biz/main.php", postData, axiosConfig)
        .then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        });
    });
}


setInterval(threed_result, 60000)
