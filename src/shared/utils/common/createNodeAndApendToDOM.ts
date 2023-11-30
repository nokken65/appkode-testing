export type CreateNodeAndAppendToDOMConfig = {
  nodeId: string
  domElement?: Element
  prepend?: boolean
}

export const createNodeAndAppendToDOM = ({
  nodeId,
  domElement = document.body,
  prepend = false
}: CreateNodeAndAppendToDOMConfig) => {
  const element = document.createElement('div')
  element.setAttribute('id', nodeId)

  if (prepend) {
    domElement.prepend(element)
  } else {
    domElement.append(element)
  }

  return element
}
