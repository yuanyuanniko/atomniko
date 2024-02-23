// 导入所需的库
const Web3 = require('web3');

// 配置以太坊节点的 URL
const ethereumNodeUrl = 'https://mainnet.infura.io/v3/your_infura_project_id'; // 使用你自己的 Infura 项目 ID

// 创建一个新的 Web3 实例
const web3 = new Web3(new Web3.providers.HttpProvider(ethereumNodeUrl));

// 一个简单的示例函数，获取最新的区块号
async function getLatestBlockNumber() {
    try {
        const blockNumber = await web3.eth.getBlockNumber();
        return blockNumber;
    } catch (error) {
        console.error('Error fetching latest block number:', error);
        throw error;
    }
}

// 将函数导出，以便其他人可以使用
module.exports = {
    getLatestBlockNumber
};
