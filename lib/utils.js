import BigNumber from 'bignumber.js';

function fromWei(wei, decimal = 3) {
  try {
    const weiNumber = new BigNumber(wei);
    return weiNumber.dividedBy('1e18').toFixed(decimal);
  } catch (e) {
    return '';
  }
}

function toWei(eth) {
  try {
    const ethNumber = new BigNumber(eth);
    return ethNumber.times('1e18');
  } catch (e) {
    return 0;
  }
}

function friendlyAddress(address) {
  return `${address.substring(0, 8)}…${address.substring(address.length - 8)}`;
}

export default { fromWei, toWei, friendlyAddress };
