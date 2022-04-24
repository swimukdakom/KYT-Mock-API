const express = require('express')
const app = express()
const axios = require('axios');

async function callAPI() {
    const time = 10
    try {
        if (Math.floor(Math.random() * 2) === 1) {
            // console.log("LOGIN");
            var times = Math.floor(Math.random() * time)
            for (let index = 0; index < times; index++) {
                var body = {
                            "userid":"01FN5BNKFF36Z79V6AMTDY47SA",
                            "token":"LOGIN_TestTokenID_1",
                            "activity":2
                            }
                var res = await axios.post('http://localhost:9000/api/v1/login', body)
                console.log(res.data);                       
            }
            console.log(`LOGIN Sent ${times} times`);
        } else {
            // console.log("TXN");
            var times = Math.floor(Math.random() * time)
            for (let index = 0; index < times; index++) {
                var body = {
                            "id": 12345,
                            "amount": "120.0",
                            "product_type": "FIAT",
                            "device_session": "test_risk_token",
                            "inserted_at": "2021-02-10 07:57:00.611767",
                            "product_id": "usd.global",
                            "details": {
                                "type": "tha_direct_credit_bank_account",
                                "bank_code": "017",
                                "bank_name": "CITIBANK, N.A.",
                                "reference": "a7f58393-438b-4a0d-b848-6b043b993d6b",
                                "bank_name_th": "ธ. ซิตี้แบงก์",
                                "account_number": "123456789012",
                                "bank_account_id": "01FRNJ9JXTSZG8A4CDEMPS22XP",
                                "account_holder_name": "CITIBANK",
                                "transaction_initiation_number": "xxx"
                            },
                            "user_id": "01EGMHEA4GTTBPNJEJ35JAWPKM",
                            "transaction_type": "withdraw",
                            "fee_amount": "10.0",
                            "received_amount": "110.0",
                            "state": "fully_processed"
                            }
                var res = await axios.post('http://localhost:9000/api/v1/transaction', body)
                console.log(res.data);
            }
            console.log(`TXN Sent ${times} times`);
        }
    } catch (error) {
        console.log("ERROR -------> " + error);
    }

}

async function run(sec) { 
    while (true) {
        callAPI()
        await timer( sec * 1000); 
    }
}

const timer = ms => new Promise(res => setTimeout(res, ms))

run(1)
