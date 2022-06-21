import { Button } from 'antd'
import { ethers } from 'ethers'
import { TOKEN_CONTRACT } from '../../Constants/Addresses'
import { Toast } from '../../Utilities/Helper'
import './TokenAddBtn.scss'

const ethereum = window.ethereum

const TokenAddBtn = (props) => {
  const handleClick = async () => {
    const tokenAddress = `${props.tokenAdd}`
    const tokenSymbol = `DUMB`
    const tokenDecimals = 18
    const tokenImage = 'http://placekitten.com/200/300'

    try {
      let provider = new ethers.providers.Web3Provider(ethereum)
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20', // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      })

      if (wasAdded) {
        console.log('Thanks for your interest!')
      } else {
        console.log('Your loss!')
      }
    } catch (err) {
      Toast(err.message)
      return
    }
  }

  return (
    <>
      <Button
        type='primary'
        onClick={handleClick}
        disabled={props.disabled}
        loading={props.loading}
        className={props.className}
      >
        Add DUMB to Wallet
      </Button>
    </>
  )
}
export default TokenAddBtn
