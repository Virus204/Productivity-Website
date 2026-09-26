import React from 'react'
import { ShaderGradientCanvas, ShaderGradient } from 'shadergradient'

export default function GradientBackground() {
  return (
    <ShaderGradientCanvas
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      <ShaderGradient
        control="props"
        shader="defaults"
        type="waterPlane"
        animate="on"
        brightness={1.1}
        cAzimuthAngle={180}
        cDistance={3.9}
        cPolarAngle={115}
        cameraZoom={1}
        color1="#5606ff"
        color2="#fe8989"
        color3="#000000"
        envPreset="city"
        fov={45}
        grain="off"
        lightType="3d"
        pixelDensity={1}
        positionX={-0.5}
        positionY={0.1}
        positionZ={0}
        reflection={0.1}
        rotationX={0}
        rotationY={0}
        rotationZ={235}
        uAmplitude={0}
        uDensity={1.1}
        uFrequency={5.5}
        uSpeed={0.1}
        uStrength={2.4}
        uTime={0.2}
        wireframe={false}
      />
    </ShaderGradientCanvas>
  )
}