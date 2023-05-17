const Blockchain = require('./src/blockchain');
const Block = require('./src/block');

async function run(){
    
    const blockchain = await new Blockchain();
    const block1 = new Block({ data: 'Block #1' });
    const block2 = new Block({ data: 'Block #2' });
    const block3 = new Block({ data: 'Block #3' });
    const block4 = new Block({ data: 'Block #4' });
    const block5 = new Block({ data: 'Block #5' });
    const block6 = new Block({ data: 'Block #6' });
    const block7 = new Block({ data: 'Block #7' });

    await blockchain.addBlock(block1);
    await blockchain.addBlock(block2);
    await blockchain.addBlock(block3);
    await blockchain.addBlock(block4);
    await blockchain.addBlock(block5);
    await blockchain.addBlock(block6);
    await blockchain.addBlock(block7);

    blockchain.print();
}

run();