const express = require('express')
const app = express()
const axios = require('axios');

async function callAPI() {
    const time = 10
    try {
        if (Math.floor(Math.random() * 4) === 1) {
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
                            "id": "292747",
                            "amount": 0.8400400001,
                            "product_type": "crypto",
                            "device_session": "",
                            "inserted_at": "2022-02-17T05:04:42.506377Z",
                            "product_id": "xlm.th",
                            "details": {
                                "type": "crypto",
                                "beneficiary_name": "James",
                                "is_sending_to_myself": false,
                                "status": "confirmed",
                                "transfer_address": "GCDBX7GTQWJFTAJCJUGV4KXJZE6Q527YRLW75GYDJ2ODSVBOXCS4W7VS?memoId=12393",
                                "tx_id": "0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE"
                            },
                            "user_id": "01FGKD0AW5CY2YWVA826887HT9",
                            "transaction_type": "withdraw",
                            "fee_amount": 3,
                            "received_amount": 13.844069,
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
