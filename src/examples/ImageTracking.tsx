import React from 'react';
import { Scene as AScene } from 'aframe';
import { Camera, GLTFModel, Plane, Assets, Item } from 'aframe-react-component';
import ImageTracking from '../provider/ImageTracking';
import { Entity, Marker, Scene } from '../components';
import useARManager from '../utils/useARManager';

interface ExampleImageTracking{
  data: any;
  
}
const ExampleImageTracking: React.FC<ExampleImageTracking> = ({data}) => {
  const [enabled, setEnabled] = React.useState(false);
  const sceneRef = React.useRef<AScene>();
  // const patterns = Object.values(data);

  const { startAR, stopAR } = useARManager(sceneRef);
  console.log(data)
  const patterns = data ? Object.values(data) : [];

  const onClick = () => {
    if (enabled) {
      stopAR();
    } else {
      startAR();
    }

    setEnabled((curr) => !curr);
  };

  const rotationSettings = {
    enabled: true,
    rotationFactor: 5,
  };

  const scaleSettings = {
    enabled: true,
    minScale: 0.3,
    maxScale: 8,
  };
  return (
    <ImageTracking>
      <button
        onClick={onClick}
        style={{
          position: 'fixed',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 999,
          backgroundColor: 'transparent',
          border: '0px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {enabled ? (
          <img alt="camera-stop" src="/asset/camera-off.png" />
        ) : (
          <img alt="camera-on" src="/asset/camera-on.png" />
        )}
      </button>
      <Scene
        mindARImage={{
          imageTargetSrc:
            'https://firebasestorage.googleapis.com/v0/b/webar-609e0.appspot.com/o/focuss%2Fvideo%2Fd1128fe8-16ab-421f-abd3-e643dfb247d6%2Fd1128fe8-16ab-421f-abd3-e643dfb247d6.mind?alt=media&token=e8e25b23-a08f-473b-b8a2-4c7cb504d56e',
          autoStart: false,
        }}
        color-space="sRGB"
        mouse-detector
        gesture-detector
        embedded
        renderer="colorManagement: true, physicallyCorrectLights"
        orientationUI
        stats={enabled}
        ref={sceneRef}
      >
        <Assets>
          <video
            loop
            preload="auto"
            playsInline
            crossOrigin="anonymous"
            style={{ display: 'none' }}
            id="card"
            src="https://firebasestorage.googleapis.com/v0/b/webar-609e0.appspot.com/o/focuss%2Fvideo%2Fd1128fe8-16ab-421f-abd3-e643dfb247d6%2Ffocuss.jpg?alt=media&token=1e9d1574-e2ad-438b-ab33-b898e6f49667"
          />
        </Assets>
        <Camera position={{ x: 0, y: 0, z: 0 }} look-controls={false} />
        <Entity visible={enabled}>
          <Marker targetIndex={0}>
            <Entity
              mouse-rotation={rotationSettings}
              mouse-scale={scaleSettings}
              gesture-rotation={rotationSettings}
              gesture-scale={scaleSettings}
            >
              <Plane src="#card" position={[0, 0, 0.1]} height={1} width={1} rotation={[0, 0, 0]} />
            </Entity>
          </Marker>
        </Entity>
      </Scene>
    </ImageTracking>
  );
};

export default ExampleImageTracking;
