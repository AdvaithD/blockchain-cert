/* eslint-disable */

const EmbarkJS = require("/Users/jenilthakker/Desktop/Coding/blockchain-cert/embarkArtifacts/modules/embarkjs").default || require("/Users/jenilthakker/Desktop/Coding/blockchain-cert/embarkArtifacts/modules/embarkjs");
EmbarkJS.environment = 'development';
global.EmbarkJS = EmbarkJS;

const Web3 = global.__Web3 || require('/Users/jenilthakker/Desktop/Coding/blockchain-cert/embarkArtifacts/modules/web3');
global.Web3 = Web3;

      const __embarkWeb3 = require('/Users/jenilthakker/Desktop/Coding/blockchain-cert/embarkArtifacts/modules/embarkjs-web3');
      EmbarkJS.Blockchain.registerProvider('web3', __embarkWeb3.default || __embarkWeb3);
      EmbarkJS.Blockchain.setProvider('web3', {});
    
if (!global.__Web3) {
  const web3ConnectionConfig = require('/Users/jenilthakker/Desktop/Coding/blockchain-cert/embarkArtifacts/config/blockchain.json');
  EmbarkJS.Blockchain.connect(web3ConnectionConfig, (err) => {if (err) { console.error(err); } });
}if (typeof web3 === 'undefined') {
        throw new Error('Global web3 is not present');
      }
      EmbarkJS.Blockchain.setProvider('web3', {web3});
var whenEnvIsLoaded = function(cb) {
  if (typeof document !== 'undefined' && document !== null && !/comp|inter|loaded/.test(document.readyState)) {
      document.addEventListener('DOMContentLoaded', cb);
  } else {
    cb();
  }
}

var whenEnvIsLoaded = function(cb) {
  if (typeof document !== 'undefined' && document !== null && !/comp|inter|loaded/.test(document.readyState)) {
      document.addEventListener('DOMContentLoaded', cb);
  } else {
    cb();
  }
}

var whenEnvIsLoaded = function(cb) {
  if (typeof document !== 'undefined' && document !== null && !/comp|inter|loaded/.test(document.readyState)) {
      document.addEventListener('DOMContentLoaded', cb);
  } else {
    cb();
  }
}
"use strict";

if (typeof WebSocket !== 'undefined') {
  const ws = new WebSocket(`${location.protocol === 'https:' ? 'wss' : 'ws'}://${location.hostname}:${location.port}`);
  ws.addEventListener('message', evt => {
    if (evt.data === 'outputDone') {
      location.reload(true);
    }
  });
}
//# sourceMappingURL=reload-on-change.js.map
export default EmbarkJS;
if (typeof module !== 'undefined' && module.exports) {
	module.exports = EmbarkJS;
}
/* eslint-enable */
