class SmartCalculator {
  constructor(initialValue) {
          this.value = initialValue.toString();
      }

      add(number) {
          this.value = this.value + ' + ' + number.toString();
          return this;
      }

      subtract(number) {
          this.value = this.value + ' - ' + number.toString();
          return this;
      }

      multiply(number) {
          this.value = this.value + ' * ' + number.toString();
          return this;
      }

      devide(number) {
          this.value = this.value + ' / ' + number.toString();
          return this;
      }

      pow(number) {
          let exprArr = this.value.split(' ');
          let i = 1;
          while (exprArr[exprArr.length - i] === ')') {
            i++;
          }
          let base = exprArr[exprArr.length - i];
          exprArr.splice(-i, 1, ' Math.pow(' + base + ', ' + number.toString() + ' )');
          this.value = exprArr.join(' ');

        return this;
      }

      toString() {
          return eval(this.value);
      }
}

module.exports = SmartCalculator;
