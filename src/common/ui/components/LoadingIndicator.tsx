import { Spin, Icon } from 'antd'

export default (size: number = 24) => {
  const loadingIcon = <Icon type="loading" style={{ fontSize: size }} spin />
  return <Spin indicator={loadingIcon} />
}
