import {ExcelComponent} from '@core/ExcelComponent'

export class Formula extends ExcelComponent {
  static className = 'excel__formula'

  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    })
  }

  toHTML() {
    return `
    <div class="info">
      fx
    </div>

    <dvi class="input" contenteditable spellcheck="false">

    </dvi>
  `
  }

  onInput(event) {
    console.log('Formula onInput', event)
  }
}
