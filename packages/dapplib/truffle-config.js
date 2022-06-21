require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remind honey hockey clog olympic tag'; 
let testAccounts = [
"0xe5d0b2266c6a1bb3f05ccf732a84fa16b4ad9093ebf6f7a29b41a4872f10ac4f",
"0xb128ec00067c7a0a7038bf57c809ca07422bc232624521c96e21d6016ed7eaee",
"0x5a4ac39638aa2a97bf52770468474adee254c45e442daabd6c9db6c7b431d981",
"0x35d6f50f58da7647fc07daa2bca1ec5d44c8ded9078e64d4e645694949a322d0",
"0xe554ce0657bc1e1532e150d5cffee527f22c2a30d3d7895e63958d1fca92ca7f",
"0xad6cf1c8d995613f8c0c68bffc1e9472a24c6192f0faba21c4a3e7204c33d03c",
"0x072a16eef69ffa0d170477ccf7a7df7ffc9c880332dc7b273ea88c6dc61509a1",
"0xfae6859cc3b9cd033d8fc5d4f63d75599809a593795712f9bf4454dcdfebbddf",
"0x3b2d65e01717bcb52289be5a233267b4e016074aa70ac04bc419f863fe2e8489",
"0x60144a6a1c96e4a508a29f2fc6cc9b91b1a9bba3fccd1a39abd940d727ec84b6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

