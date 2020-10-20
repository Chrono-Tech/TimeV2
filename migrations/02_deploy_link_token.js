const version = process.env.VERSION || 'v0.6'

const { TimeToken } = require(`../build/truffle/${version}/TimeToken`)
TimeToken.setProvider(web3.currentProvider)

module.exports = function(deployer, _, accounts) {
  deployer.deploy(TimeToken, { from: accounts[0] })
}
