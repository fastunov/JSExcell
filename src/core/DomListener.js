export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('Not provided root for DomListener')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDomListeners() {
    console.log(this.listeners)
  }

  removeDomListeners() {}
}
