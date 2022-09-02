import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useFBX } from '@react-three/drei'
import model from '../../Assets/Ethereum.fbx'
import './ThreeRenderer.scss'

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
    <div className='renderer'>
      <Canvas
        camera={{ fov: 60 }}
        style={{ position: 'absolute', overflow: 'hidden' }}
      >
        <Stage
          intensity={0.35}
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
    </div>
  )
}
export default ThreeRenderer
