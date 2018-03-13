import { Item } from './item.model'
import { Widget } from './widget.model'
import { Base } from './base.model'

export interface AppStore extends Base {
  items: Item[]
  selectedItem: Item | null
  widgets: Widget[]
  selectedWidget: Widget | null
}
