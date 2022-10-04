import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Stage,
  useFBX,
  Html,
  useProgress,
} from '@react-three/drei'
import model from '../../Assets/Ethereum.fbx'
import './ThreeRenderer.scss'

const Model = () => {
  const fbx = useFBX(model)
  return <primitive object={fbx} />
}

const Loader = () => {
  const { progress } = useProgress()
  return <Html center>{progress} % loaded</Html>
}

const ThreeRenderer = () => {
  return (
    <>
      <Canvas camera={{ zoom: 1.25 }} resize={{ scroll: false }}>
        <Suspense fallback={<Loader />}>
          <Stage
            intensity={0.35}
            contactShadow={false}
            shadows
            environment='studio'
            background
          >
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls
          makeDefault
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
          autoRotate={true}
          autoRotateSpeed={5}
        />
      </Canvas>
    </>
  )
}
export default ThreeRenderer
