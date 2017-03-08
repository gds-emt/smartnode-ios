import BigNumber from 'bignumber.js';

function fromWei(wei, decimal = 3) {
  try {
    const weiNumber = new BigNumber(wei);
    return weiNumber.dividedBy('1e18').toFixed(decimal);
  } catch (e) {
    return '';
  }
}

function friendlyAddress(address) {
  return `${address.substring(0, 8)}…${address.substring(address.length - 8)}`;
}

export default { fromWei, friendlyAddress };
