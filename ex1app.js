import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
  @track inputValue = '';
  @track outputValue = '';

  handleInput(event) {
    this.inputValue += event.target.value;
  }

  handleClear() {
    this.inputValue = '';
    this.outputValue = '';
  }

  handleOperator(event) {
    this.inputValue += ` ${event.target.value} `;
  }

  handleCalculate() {
    try {
      this.outputValue = eval(this.inputValue);
    } catch (error) {
      this.outputValue = 'Error';
    }
  }
}
