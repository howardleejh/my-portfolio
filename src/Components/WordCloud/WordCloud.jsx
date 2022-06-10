import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, OrbitControls } from '@react-three/drei'
import { Button } from 'antd'
import { HashLink } from 'react-router-hash-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import './WordCloud.scss'

/*
Feature extracted:
Author: Paul Henschel [drcmda]
Link: https://codesandbox.io/s/basic-demo-forked-yup2o?file=/src/App.js
*/

function Word({ children, ...props }) {
  const color = new THREE.Color()
  const fontProps = {
    'fontSize': 2,
    'letterSpacing': -0.05,
    'lineHeight': 1,
    'material-toneMapped': false,
  }
  const ref = useRef()
  const [hovered, setHovered] = useState(false)
  // eslint-disable-next-line
  const over = (e) => (e.stopPropagation(), setHovered(true))
  const out = () => setHovered(false)
  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer'
    return () => (document.body.style.cursor = 'auto')
  }, [hovered])
  // Tie component to the render-loop
  useFrame(({ camera }) => {
    // Make text face the camera
    ref.current.quaternion.copy(camera.quaternion)
    // Animate font color
    ref.current.material.color.lerp(
      color.set(hovered ? '#fa2720' : 'white'),
      0.1
    )
  })
  return (
    <Text
      ref={ref}
      onPointerOver={over}
      onPointerOut={out}
      {...props}
      {...fontProps}
      children={children}
    />
  )
}

function Cloud({ count = 8, radius = 20 }) {
  const words = [
    'Adobe After Effects',
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Adobe Premiere Pro',
    'Adobe XD',
    'ANT Design',
    'Backend',
    'Blockchain',
    'Bootstrap',
    'ChainLink',
    'CryptoZombies',
    'DEFI',
    'Digital Ocean',
    'EIP Standards',
    'ERC20',
    'ERC721',
    'ERC1155',
    'Ethereum',
    'Ethereum Main Net',
    'Ethereum Test Nets',
    'Ethers JS',
    'Express JS',
    'FontAwesome',
    'Frontend',
    'Full Stack',
    'Ganache',
    'Gatsby JS',
    'Git',
    'Github',
    'Gitlab',
    'Hardhat',
    'Heroku',
    'HTML',
    'Javascript',
    'jQuery',
    'Metamask',
    'MongoDB',
    'MongoDB Atlas',
    'Mongoose ODM',
    'NFTS',
    'Node JS',
    'Open Zeppelin',
    'Oracles',
    'React JS',
    'Remix IDE',
    'REST APIs',
    'SASS',
    'Smart Contracts',
    'Solidity',
    'Tenderly',
    'THREE JS',
    'Truffle Framework',
    'Udemy',
    'Web3',
  ]

  const positions = []
  const spherical = new THREE.Spherical()
  const phiSpan = Math.PI / (count + 1)
  const thetaSpan = (Math.PI * 2) / count

  for (let i = 1; i < count + 1; i++)
    for (let j = 0; j < count; j++)
      positions.push([
        new THREE.Vector3().setFromSpherical(
          spherical.set(radius, phiSpan * i, thetaSpan * j)
        ),
      ])

  return positions.map(([pos], index) => (
    <Word key={index} position={pos} children={words[index]} />
  ))
}

export default function WordCloud() {
  return (
    <div className='word-cloud'>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
        <fog attach='fog' args={['#202025', 0, 80]} />
        <Cloud />
        <OrbitControls />
      </Canvas>
      <HashLink
        smooth
        to={'/#contact'}
        scroll={(el) =>
          el.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      >
        <Button type='text' size='large' id='next-btn'>
          <FontAwesomeIcon icon={faChevronDown} />
        </Button>
      </HashLink>
    </div>
  )
}
