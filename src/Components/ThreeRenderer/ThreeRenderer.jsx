import { Suspense } from 'react'
import { Spin } from 'antd'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useFBX } from '@react-three/drei'
import model from '../../Assets/ethereum.fbx'

const Model = () => {
  const fbx = useFBX(model)
  return (
    <>
      <primitive object={fbx} />
    </>
  )
}

const ThreeRenderer = () => {
  return (
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
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          autoRotate={true}
          autoRotateSpeed={5}
        />
      </Canvas>
    </Suspense>
  )
}
export default ThreeRenderer
