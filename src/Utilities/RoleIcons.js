import mongodb from '../Assets/mongodb.svg'
import express from '../Assets/express.svg'
import react from '../Assets/react.svg'
import node from '../Assets/nodejs.svg'
import solidity from '../Assets/solidity.svg'
import chainlink from '../Assets/chainlink.svg'
import openzeppelin from '../Assets/openzeppelin.svg'
import hardhat from '../Assets/hardhat.svg'
import ethers from '../Assets/ethers.svg'
import etherscan from '../Assets/etherscan.svg'
import tenderly from '../Assets/tenderly.svg'

export const RoleIcons = {
  mern: [
    {
      icon: mongodb,
      name: 'MongoDB'
    }, {
      icon: express,
      name: 'ExpressJS'
    }, {
      icon: react,
      name: 'ReactJS'
    }, {
      icon: node,
      name: 'NodeJS'
    }
  ],
  solidity: [{
    icon: solidity,
    name: 'Solidity'
  }, {
    icon: openzeppelin,
    name: 'Open Zeppelin'
  }, {
    icon: chainlink,
    name: 'Chainlink'
  }],
  hardhat: [{
    icon: hardhat,
    name: 'Hardhat'
  }, {
    icon: ethers,
    name: 'EthersJS'
  }, {
    icon: etherscan,
    name: 'Etherscan'
  }, {
    icon: tenderly,
    name: 'Tenderly'
  }],
}
