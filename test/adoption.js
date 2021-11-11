
const Adoption = artifacts.require("Adoption");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Adoption", function (accounts) {
  it("check adopt and check address in adopters", async function () {
    const adoption = await Adoption.deployed();
    await adoption.adopt(8, { from: accounts[0] })
    var addrs = await adoption.getAdopters()
    assert.equal(addrs[8], accounts[0])
  });
});
