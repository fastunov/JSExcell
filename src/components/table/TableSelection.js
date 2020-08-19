export class TableSelection {
  static selectClass = 'selected'

  constructor() {
    this.group = []
    this.current = null
  }

  select($el) {
    this.clear()
    this.group.push($el)
    this.current = $el
    $el.focus().addClass(TableSelection.selectClass)
  }

  clear() {
    this.group.forEach($cell => $cell.removeClass(TableSelection.selectClass))
    this.group = []
  }

  selectGroup($group = []) {
    this.clear()
    this.group = $group
    this.group.forEach($el => $el.addClass(TableSelection.selectClass))
  }
}
