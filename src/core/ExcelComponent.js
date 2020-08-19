import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscribers = []

    this.prepare()
  }

  // Настройки компонента до init
  prepare() {
  }

  // Уведомляем члушателей о подписке
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписываемся на событие
  $on(event, callback) {
    const unsub = this.emitter.subscribe(event, callback)
    this.unsubscribers.push(unsub)
  }

  // Возвращаем шаблон компонента
  toHTML() {
    return ''
  }

  // Инициализация компонента
  // Добавление слушателей
  init() {
    this.initDomListeners()
  }

  // Удаление компонента
  // Очистка списка слушателей
  destroy() {
    this.removeDomListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
