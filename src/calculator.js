class Calculator {
  constructor() {
    console.log('in constructor');
  }

  sum(a, b) {
    console.log('in sum');
    return a + b;
  }

  difference(a, b) {
    console.log('in difference');
    return a - b;
  }

  async saveResult(result) {
    await Promise.resolve(result);
  }
}

export default Calculator;
