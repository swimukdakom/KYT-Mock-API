const express = require('express')
const axios = require('axios');
const app = express()
const port = 3031

const server = "local"

app.get(`/user/:g_user_id`, async (req, res) => {

  if (server == "local") {
    var responseLocal = {
      email: 'stg.zm.trader.02+govjyv2oipwfvk@gmail.com',
      inserted_at: '2020-08-26T04:46:58.488694Z',
      invitation_code: 'e2ehWqA36Wu',
      is_deactivated: false,
      is_email_verified: true,
      is_mobile_number_verified: false,
      mfa_enabled: false,
      mobile_number: null,
      preferred_language: 'th-TH',
      referral_code: 'bRrfIvW13g',
      signup_hostname: 'staging.zipmex.co.th',
      signup_platform: 'web',
      signup_instance: 'tha',
      terms_accepted: false,
      updated_at: '2021-02-24T05:54:32.855638Z',
      user_id: '01EGMHEA4GTTBPNJEJ35JAWPKM',
      new_column: 'TEST',
    }
    console.log("/user called [LOCAL]");
    res.send(responseLocal)
  } else {
    var g_user_id = req.params.g_user_id
    var responseUserApp = await axios.get(`https://user-app.zipmex.dev/user/${g_user_id}`)
      .then(response => {
        console.log(response.data);
        return response.data
      })
      .catch(error => {
        console.log(error);
      });
    console.log("/user called [USER-APP]");
    res.send(responseUserApp)
  }
})

app.get('/personal-info', async (req, res) => {

  if (server == "local") {
    var responseLocal = {
      hostname: 'trade.zipmex.co.sg',
      new_column: 'TEST',
      info: {
        last_name: null,
        work_address_postal_code: null,
        work_address_sub_district: null,
        address_in_id_card: null,
        type_of_work: null,
        present_address_province: null,
        present_address_postal_code: null,
        work_address_district: null,
        work_address: null,
        present_address_country: 'THA',
        native_last_name: null,
        middle_name: null,
        personal_number: "JYV2OIPW",
        work_address_province: null,
        work_position: null,
        first_name: "Sacha Wimukdakom",
        part_time_job: null,
        country: null,
        address_in_id_card_district: null,
        gender: null,
        address_in_id_card_sub_district: null,
        address_in_id_card_country: null,
        primary_source_of_funds: null,
        work_address_country: 'THA',
        document_number: "123456abcdef",
        document_type: "110122124564742356123",
        emergency_contact_number: null,
        present_address_district: null,
        occupation: null,
        present_address_city: null,
        company_name: null,
        address_in_id_card_city: null,
        emergency_contact_last_name: null,
        nationality: null,
        present_address: null,
        address_in_id_card_postal_code: null,
        emergency_contact_first_name: null,
        source_of_fund_type_of_business: null,
        native_first_name: null,
        dob: null,
        present_address_sub_district: null,
        address_in_id_card_province: null
      }
    }
    console.log("/txn called [LOCAL]");
    res.send(responseLocal)
  } else {
    var p_user_id = req.query.user_id
    var responseUserApp = await axios.get(`https://user-app.zipmex.dev/personal-info?user_id=${p_user_id}`)
      .then(response => {
        console.log(response.data);
        return response.data
      })
      .catch(error => {
        console.log(error);
      });
    console.log("/txn called [USER-APP]");
    res.send(responseUserApp)
  }


})

app.listen(port, () => {
  console.log(`UserApp Dummy API app listening at http://localhost:${port}`)
})