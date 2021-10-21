require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth prefer property half climb outer giant'; 
let testAccounts = [
"0xaf5aed331beee43711eaa4c887e7ddb8ccaf27dc67e5b972e2a8b8cd2155f11b",
"0xa9b39abee303ffda97f6aae40c456099d43af0895ff5b1747bc7707423358573",
"0x3547597a642d85878a4e63b4ac3a31cebe5a3882508c3ce01e20fc6eb3d09135",
"0x060d5b7b21c072f780118d3d60f5b515ee3e684e7e7cd67dd68cab079380a46a",
"0x18be5cf6f801b05aa52772b4548a9934c3bba137524e875accb3f80c2221ffbc",
"0x9c7b278f6632c45159ca5b89f68d5520ada3dea0a718fab09b50400ddbbd43ac",
"0x93521a0922653d281b65dcaf5bcf349e784d81a8c0ae5be758be4eab5895864e",
"0x564ef850f142434c0a249e3e1f8046106bf5cdf65701454ec7d58b0d0f232d00",
"0xd29fc6916f8f3617a0cf0fb960e611849fedf461bb6c21b7be725d3a3dc0f298",
"0xcc4fa58c70c9e0fe7d95907ee2d18559cd9a85b8b866c3da0b93cd97b79a75d2"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

