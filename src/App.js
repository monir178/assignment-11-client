import React, { useRef, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import backgroundVideo from './assests/video/backVideo.mp4';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Set the video speed to slower (0.5x)
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="h-full w-full relative">
      <>
        <video
          ref={videoRef}
          className="absolute z-[-10] w-full h-full object-cover brightness-75"
          autoPlay
          loop
          muted
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </>

      <div className="relative z-10 max-w-[1980px] mx-auto" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
