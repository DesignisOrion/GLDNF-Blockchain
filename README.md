# GLDNF BlockChain

<img src="https://github.com/DesignisOrion/GLDNF-Blockchain/blob/main/img/thought-catalog-bj8U389A9N8-unsplash.jpg"/>

Created a GLDNF Blockchain with a gldnf coin in which can be mined. Goal was to get a deeper insight of the blockchain development and cryptocurrency. For this blockchain I was able to review how to create the genesis block, obtaining the latest block, adding new blocks and testing the blockchain. 

## Terminology

index - Unique number that tracks the position of every block in the entire blockchain.

timestamp - A record of teh time of occurence of each completed transaction.

data - provides data about the completed transactions, such as the sender details, recipient's details and quanitity of transaction.

precedingHash - points to the hash of the preceding block in the blockchain. This is important in maintaining the blockchain integrity.




## Installation

Install Nodejs.
Install crypto-js (https://www.npmjs.com/package/crypto-js)
```bash
nodejs & npm
npm install crypto-js
```

## Usage

```javascript
const SHA256 = require('crypto-js/sha256');
```

## Run Program in Terminal
```terminal
node block.js
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. Thx

Please make sure to update tests as appropriate.

## Author
[DesignIsOrion] (https://designisorion.com)
