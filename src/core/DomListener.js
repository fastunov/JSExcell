export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error('Not provided root for DomListener')
    }
    this.$root = $root
  }
}
