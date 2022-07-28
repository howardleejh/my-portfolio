import { Suspense } from 'react'
import { Spin } from 'antd'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useFBX } from '@react-three/drei'
import model from '../../Assets/Ethereum.fbx'

const Model = () => {
  const fbx = useFBX(model)
  return (
    <>
      <primitive object={fbx} />
    </>
  )
}

const ThreeDRenderer = () => {
  return (
    <>
      <Suspense fallback={<Spin />}>
        <Canvas camera={{ fov: 60 }}>
          <Stage
            intensity={0.25}
            contactShadow={false}
            shadows
            environment='studio'
          >
            <Model />
          </Stage>
          <OrbitControls
            makeDefault
            autoRotate={true}
            autoRotateSpeed={5}
            enableZoom={false}
            enablePan={false}
          />
        </Canvas>
      </Suspense>
    </>
  )
}
export default ThreeDRenderer
