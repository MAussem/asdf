import React from 'react';
import DeviceOrientation, { Orientation } from 'react-screen-orientation'



function App() {

  return (

    <div>
      <DeviceOrientation lockOrientation={'portrait'}>
        {/* Will only be in DOM in landscape */}
        <Orientation orientation='portrait' alwaysRender={false}>
          <div>
            <p>Only visible in landscape</p>
          </div>
        </Orientation>
        {/* Will stay in DOM, but is only visible in portrait */}
        <Orientation orientation='landscape'>
          <div>
            <p>Please rotate your device</p>
          </div>
        </Orientation>
      </DeviceOrientation>
    </div>

  );
}

export default App;
