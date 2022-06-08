import { Row, Col } from 'antd'
import * as THREE from 'three'
import { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, TrackballControls } from '@react-three/drei'
import './WordCloud.scss'

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

function Cloud({ count = 6, radius = 25 }) {
  const words = [
    'Solidity',
    'Truffle Framework',
    'Smart Contracts',
    'Open Zeppelin',
    'Tenderly',
    'ChainLink',
    'Remix IDE',
    'Ganache',
    'Hardhat',
    'Ethers JS',
    'Web3',
    'Javascript',
    'React JS',
    'Gatsby JS',
    'Frontend',
    'Backend',
    'Full Stack',
    'Blockchain',
    'Ethereum',
    'Express JS',
    'Node JS',
    'MongoDB',
    'REST APIs',
    'HTML',
    'SASS',
    'Bootstrap',
    'ANT Design',
    'jQuery',
    'CryptoZombies',
    'Udemy',
    'DEFI',
    'Mongoose ODM',
    'MongoDB Atlas',
    'Adobe Photoshop',
    'Adobe After Effects',
    'Adobe Premiere Pro',
    'Adobe Illustrator',
    'Adobe XD',
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
        <TrackballControls rotation={true} />
      </Canvas>
    </div>
  )
}
