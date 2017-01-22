import BigNumber from 'bignumber.js';

function fromWei(wei, decimal = 3) {
  try {
    const weiNumber = new BigNumber(wei);
    return weiNumber.dividedBy('1e18').toFixed(decimal);
  } catch (e) {
    return '';
  }
}

export default { fromWei };
