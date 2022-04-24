const express = require('express')
const axios = require('axios');
const app = express()
const port = 3032

app.use(express.json());       
app.use(express.urlencoded()); 
const sleep = (waitTimeInSecond) => new Promise(resolve => setTimeout(resolve, waitTimeInSecond * 1000));


app.post(`/transaction/v2/check`, async (req, res) => {

    var activityType = req.body.activity.activityType
    var responseLocal = ''
    var timeout = 0
    if (activityType == "REGISTRATION") {

      responseLocal = {
        checkId: "908242ad-fbd8-4624-8324-7282c7c6eae8",
        entityId: "b3ad4b1c-6b3c-1e12-689e-7d0cb52d40a2",
        extraData: null,
        frankieId: "b3ad4b1c-6b3c-1e12-689e-7d0cb52d40a2",
        riskLevel: "LOW",
        riskResults: [
          {
            riskLevel: "NONE",
            type: "CUSTOMER"
          }
        ]
      }
      console.log("/frankie/transaction/v2/check Called - REGISTRATION");
    } else {
      responseLocal = {
        checkId: "2ed78e2f-dd49-489a-a564-863f6131b341",
        entityId: "b3ad4b1c-6b3c-1e12-689e-7d0cb52d40a2",
        extraData: [
          {
            kvpKey: "payment.alternative.value",
            kvpType: "general.string",
            kvpValue: "0.84004"
          },
          {
            kvpKey: "payment.alternative.currencyCode",
            kvpType: "general.string",
            kvpValue: "XLM"
          }
        ],
        frankieId: "b3ad4b1c-6b3c-1e12-689e-7d0cb52d40a2",
        riskLevel: "LOW",
        riskResults: [
          {
            riskLevel: "NONE",
            type: "FRAUD"
          },
          {
            riskLevel: "NONE",
            type: "AML"
          },
          {
            riskLevel: "NONE",
            type: "CUSTOMER"
          }
        ]
      }
      console.log("/frankie/transaction/v2/check Called - TRXN");
    }
    await sleep(timeout);
    res.send(responseLocal)
})

app.listen(port, () => {
  console.log(`FrankieOne Dummy API app listening at http://localhost:${port}`)
})