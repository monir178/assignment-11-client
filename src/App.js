import React, { useRef, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import backgroundVideo from './assests/video/backVideo.mp4';

function App() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="h-full w-full relative max-w-[1980px] mx-auto">
      <>
        <video
          ref={videoRef}
          className="absolute z-[-10] w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </>

      <div className="relative z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <RouterProvider router={routes}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
