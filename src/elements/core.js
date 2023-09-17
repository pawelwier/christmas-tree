import { CylinderGeometry, MeshBasicMaterial, Mesh } from 'three'
import { getCoreHeight } from '../utils/utils'

export const getCore = config => {
  const { radius } = config
  const height = getCoreHeight(config)
  const geometry = new CylinderGeometry(radius, radius, height, radius * 20)
  const material = new MeshBasicMaterial({color: 0x1e4620})
  return new Mesh(geometry, material)
}

