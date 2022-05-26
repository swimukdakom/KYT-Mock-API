const express = require('express')
const axios = require('axios');
const app = express()
const port = 3033

const sleep = (waitTimeInSecond) => new Promise(resolve => setTimeout(resolve, waitTimeInSecond * 1000));


app.post(`/auth/customerToken`, async (req, res) => {

    var responseLocal = {
        hash: "c4b445fba52021ef267dbe199d39713fc8dcd376485fe6f0cc3d6f5aed3c2188f3f9e36b8cacb4db86f290abd08fc0b61487abd3c9c24e34eef838a9de94d7e8",
        access_token: "access-token-dummy",
        token_type: "Bearer",
        scope: "customer"
    }
    console.log("[Notabene] /auth/customerToken called");
    res.send(responseLocal)
})

app.post(`/tx/validate`, async (req, res) => {

  var responseLocal = {
    isValid: false,
    type: "TRAVELRULE",
    beneficiaryAddressType: "HOSTED",
    addressSource: "ELLIPTIC",
    beneficiaryVASPname: "Binance",
    errors: [
        "beneficiaryNameMissing",
        "beneficiaryAccountNumberMissing",
        "OR [",
        "originatorNationalIdentificationMissing",
        "]"
    ]
  }
  console.log("[Notabene] /tx/validate called"); 
  res.send(responseLocal)
})

app.post(`/tx/create`, async (req, res) => {
  
  var responseLocal = {
    beneficiaryDid: "did:ethr:0xf7378e2a517565a53a271988f5ddac68fbd5f331",
    beneficiaryProof: null,
    beneficiaryVASPdid: "did:ethr:0xc3c489598f18d7468764444075834833f449d340",
    chargedQuantity: 2409,
    createdAt: "2022-04-25T04:49:44.195Z",
    createdBy: "did:ethr:0xb9ff072d5788b6854cc18c347db15c80a5fd424e",
    id: "12949bd8-756d-493e-aa62-9054f0a9f154",
    isTest: null,
    ivms101: {
      beneficiary: {
        accountNumber: [
          " "
        ],
        beneficiaryPersons: [
          {
            naturalPerson: {
              name: [
                {
                  nameIdentifier: [
                    {
                      nameIdentifierType: "LEGL",
                      primaryIdentifier: "James"
                    }
                  ]
                }
              ],
              nationalIdentification: {
                countryOfIssue: "SG",
                nationalIdentifier: " ",
                nationalIdentifierType: "DRLC"
              }
            }
          }
        ]
      },
      beneficiaryVASP: {
        beneficiaryVASP: {
          legalPerson: {
            name: {
              nameIdentifier: [
                {
                  legalPersonName: "Binance",
                  legalPersonNameIdentifierType: "LEGL"
                }
              ]
            }
          }
        }
      },
      originatingVASP: {
        originatingVASP: {
          legalPerson: {
            name: {
              nameIdentifier: [
                {
                  legalPersonName: "Zipmex",
                  legalPersonNameIdentifierType: "LEGL"
                }
              ]
            }
          }
        }
      },
      originator: {
        accountNumber: [
          " "
        ],
        originatorPersons: [
          {
            naturalPerson: {
              geographicAddress: [
                {
                  addressType: "HOME",
                  buildingNumber: " ",
                  city: " ",
                  country: "SG",
                  postCode: " ",
                  streetName: " "
                }
              ],
              name: [
                {
                  nameIdentifier: [
                    {
                      nameIdentifierType: "LEGL",
                      primaryIdentifier: "Sacha Wimukdakom"
                    }
                  ]
                }
              ],
              nationalIdentification: {
                countryOfIssue: "SG",
                nationalIdentifier: " ",
                nationalIdentifierType: "DRLC"
              }
            }
          }
        ]
      }
    },
    ivms101Encrypted: null,
    originatorDid: "did:ethr:0x05cad7b67730ae690e37c4a45d9b0126637fd26d",
    originatorProof: null,
    originatorVASPdid: "did:ethr:0xf1fb9faf89dfaba468ee25fa50403b3fa4e8ccc3",
    protocol: "TRLight",
    protocolData: {
      trLightData: {
        accessLinks: [],
        notificationEmails: []
      }
    },
    showToBeneficiary: false,
    status: "NEW",
    transactionAmount: "840040000100000000",
    transactionAsset: "ETH",
    transactionBlockchainInfo: {
      destination: "0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE"
    },
    transactionType: "TRAVELRULE",
    updatedAt: "2022-04-25T04:49:44.195Z",
    updatedBy: "did:ethr:0xb9ff072d5788b6854cc18c347db15c80a5fd424e"
  }
  console.log("[Notabene] /tx/create called"); 
  await sleep(5) // Sleep 5 seconds
  res.send(responseLocal)
})

app.listen(port, () => {
  console.log(`Notabene Dummy API app listening at http://localhost:${port}`)
})