import { ethers } from 'ethers'
import { toast } from 'react-toastify'

const ethereum = window.ethereum

export function EllipseAdd(address, start, end) {
  let endPosEnd = address.length
  let endPosStart = address.length - end

  return `${address.substring(0, start)}...${address.substring(
    endPosStart,
    endPosEnd
  )}`
}

export function GetProvider(platform) {
  if (platform === 'alchemy') {
    const attachedProvider = new ethers.providers.AlchemyProvider(
      `maticmum`,
      process.env.REACT_APP_ALCHEMY
    )
    return attachedProvider
  } else if (platform === 'metamask') {
    const attachedProvider = new ethers.providers.Web3Provider(ethereum)
    return attachedProvider
  }
}

export function Toast(message) {
  return toast(message)
}
