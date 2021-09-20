const SHA256 = require('crypto-js/sha256'); // importing the crypto-js library

// creating the block for the blockchain
class CryptoBlock{
    constructor(index, timestamp, data, precedingHash=" "){
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.precedingHash = precedingHash;
        this.hash = this.computeHash();
        this.nonce = 0;
    }

    computeHash(){
        return SHA256(this.index + this.precedingHash + this.timestamp + JSON.stringify(this.data) + this.nonce).toString();
    }


// Proof Of Work 
proofOfWork(difficulty) {
    while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) 
    {
        this.nonce++;
        this.hash = this.computeHash();
    }
    }
}

// Creating the Gldnf blockchain
class gldnfBlockchain {
    constructor() {
        this.blockchain = [this.startGenesisBlock()];
        this.difficulty = 4;
    }
    startGenesisBlock(){
        return new CryptoBlock(0, "09/21/2021", "Initial Block in GLDNF Blockchain", "0");
    }

    obtainLatestBlock() {
        return this.blockchain[this.blockchain.length - 1];
    }
    addNewBlock(newBlock) {
        newBlock.precedingHash = this.obtainLatestBlock().hash; // newBlock.hash = newBlock.computeHash();
        newBlock.proofOfWork(this.difficulty);
            this.blockchain.push(newBlock);
    }

// Validating the integrity of the blockchain

    checkChainValidity() {
        for (let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const precedingBlock = this.blockchain[i - 1];

            if (currentBlock.hash !== currentBlock.computeHash()){return false;}
            if (currentBlock.precedingHash !== precedingBlock.hash) return false;}
                return true;
        }
    }

// Testing the blockchain

    let gldnfCoin = new
    gldnfBlockchain();

    console.log('GLDNFCoin Mining In Progress...');
    console.log('Loading.......');
    gldnfCoin.addNewBlock(
        new CryptoBlock(1, "09/20/2021", {
            sender: "Orion Ford",
            recipient: "Micah Ford",
            quantity: 50
        })
    );

    gldnfCoin.addNewBlock(
        new CryptoBlock (2, "09/20/2021", {
            sender: "Kendra Spann",
            recipient: "Maji Spann ",
            quantity: 25 
        })
    );


// printing details to the console.
    console.log(JSON.stringify(gldnfCoin, null, 4));