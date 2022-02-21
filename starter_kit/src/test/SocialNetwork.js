var SocialNetwork = artifacts.require("./SocialNetwork.sol");

require('chai')
    .use(require('chai-as-promised'))
    .should();


contract('SocialNetwork', (accounts) => {
    let social;

    before(async () => {
        console.log("dbfsfhx");
        social = await SocialNetwork.deployed()
    });

    describe('Sagar', async () => {

        it('deploy is success', async () => {

            const address = await social.address
            assert.notEqual(address, 0x0)
        });

        it('has a name', async () => {

            const name = await social.name()
            assert.equal(name, 'I am the best')
        });
    });

});