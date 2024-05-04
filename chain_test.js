const Blockchain = require('./models/blockchain');
const licenceChain = new Blockchain();

const testChain = {
  chain: [
    {
      index: 1,
      timestamp: 1693490625429,
      data: [ ],
      nonce: 1,
      hash: "Genisis",
      previousHash: "Genisis"
    },
    {
      index: 2,
      timestamp: 1693490854615,
      data: [
        {
          fullName: "Marre Marre",
          licenseId: "3740fd002b244346937d01c2cef9f9f3"
        },
        {
          fullName: "Pelle Pelle",
          licenseId: "dfcff45ae4d74181ba5c36e478ed90a8"
        }
      ],
      nonce: 216786,
      hash: "00008c764b5fadd2b7c9c27283e4aa8ae7045cba2a41b2eb6c7c1433e9481559",
      previousHash: "Genisis"
    },
    {
      index: 3,
      timestamp: 1693490923101,
      data: [
        {
          fullName: "Görre Görre",
          licenseId: "12693426212249f38f69707ade8c950d"
        },
        {
          fullName: "Håkan Bråkan",
          licenseId: "c661dd42167a46a3891da2501ca58c67"
        }
      ],
      nonce: 60847,
      hash: "00004eb87703432e639382c0a0e715df1e163b57fc273f290722bf791535e8e8",
      previousHash: "00008c764b5fadd2b7c9c27283e4aa8ae7045cba2a41b2eb6c7c1433e9481559"
    },
    {
      index: 4,
      timestamp: 1693490961877,
      data: [
        {
          fullName: "Siddhartha Guatama",
          licenseId: "6bc5223b73f345478487ed27d06de0f7"
        },
        {
          fullName: "Dalai Lama",
          licenseId: "c17ac251a8c44285be38c4dab3a19dc5"
        }
      ],
      nonce: 15322,
      hash: "00005a6dd736a3b65cc62c9de09c6aa857ebe0100cfaf71208e01ced0835fa52",
      previousHash: "00004eb87703432e639382c0a0e715df1e163b57fc273f290722bf791535e8e8"
    }
  ],
  pendingList: [ ],
  nodeUrl: "http://localhost:3003",
  networkNodes: [
    "http://localhost:3001",
    "http://localhost:3002"
  ]
}

console.log('Chain is valid: ', licenceChain.validateChain(testChain.chain));
