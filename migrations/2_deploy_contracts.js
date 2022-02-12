const Election = artifacts.require("Election.sol");

module.exports = async function(deployer) {
   
  deployer.deploy(Election,"sujan","damak","0xc27c45c5356897eD427639bD3e4cF6d33DB9aFA8");
};
