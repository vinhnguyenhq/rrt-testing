import { Item } from './item.model'
import { Widget } from './widget.model'
import { Base } from './base.model'

export interface Gadget extends Base {
  items: Item[]
  widgets: Widget[]
}
