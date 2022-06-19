export function ellipseAdd(address, start, end) {
  let endPosEnd = address.length
  let endPosStart = address.length - end

  return `${address.substring(0, start)}...${address.substring(
    endPosStart,
    endPosEnd
  )}`
}
