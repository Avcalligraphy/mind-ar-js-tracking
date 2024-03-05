import React, {useEffect, useState} from 'react';
import FaceTracking from './examples/FaceTracking';
import { ImageTracking, ImageCompiler } from './examples';
import { database } from './Database/Fire';
import { onValue, ref } from 'firebase/database';

function App() {
  const [data, setData] = useState<any | null>();
  useEffect(() => {
    const starCountRef = ref(database, 'focuss/');
     const fetchData = () => {
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (data !== null) {
          setData(data);
        }
      });
     }
     fetchData();
    return () => {
      const starCountListener = onValue(starCountRef, () => {});
      starCountListener();
    }
  }, [])
  
  return (
    <div className="App bg-black">
      <div className="container">
        <ImageTracking data={data} />
      </div>
    </div>
  );
}

export default App;
