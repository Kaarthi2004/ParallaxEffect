import React, { useRef } from 'react';
import i3 from './bc4e2f5bdd32f877672ef35a20bf46c7.gif';
import land from './land.png';
import and from './photo-1505635552518-3448ff116af3.avif';

// The layer is a page that takes up the entire screen
import { IParallax, Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  const ref = useRef<IParallax | null>(null);

  return (
    <Parallax pages={4} ref={ref}>
      <ParallaxLayer
        offset={0} 
        speed={1}
        factor={2}
        style={{
          backgroundImage: `url(${i3})`,
          backgroundSize: 'cover',
          filter: 'blur(0px)' // Add a blur effect here
        }}
      />
    <h2>hello</h2>
      <ParallaxLayer 
        offset={2} 
        speed={1}
        factor={4}
        style={{
          backgroundImage: `url(${and})`,
          backgroundSize: 'cover'
        }}
      />

      <ParallaxLayer
        sticky={{ start: 0.9, end: 2.5 }}
        style={{ textAlign: 'center' }}
      >
    
      </ParallaxLayer>

      <ParallaxLayer
        offset={0.2}
        speed={0.05}
        onClick={() => ref.current?.scrollTo(3)}
      >
        <h2>Click to Scroll down</h2>
      </ParallaxLayer>
      <ParallaxLayer
        offset={3.2}
        speed={2}
        onClick={() => ref.current?.scrollTo(0)}
      >
        <h2>Click to Scroll up</h2>
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
