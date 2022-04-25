const DoElection=async(name,place,web3,myContract,myContract2)=>{
  const  accounts=await web3.eth.givenProvider.enable();
  const account = accounts[0];
  const gas= await myContract2.methods.createElection(name,place).estimateGas();
  const resutl = await myContract2.methods.createElection(name,place).send({from:account,gas});
  return resutl
}
export default DoElection;