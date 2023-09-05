import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

// const Room3D = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Set up scene
//     const scene = new THREE.Scene();

//     // Set up camera
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.z = 5;

//     // Set up renderer
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     containerRef.current.appendChild(renderer.domElement);

//     // Set up geometry (floor and walls)
//     const floorGeometry = new THREE.PlaneGeometry(10, 10);
//     const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, side: THREE.DoubleSide });
//     const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial);
//     floorMesh.rotation.x = Math.PI / 2;
//     scene.add(floorMesh);

//     // Set up room walls (similar to the floor, with different positioning and sizes)

//     // Set up rendering loop
//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(scene, camera);
//     };

//     animate();

//     // Handle window resize
//     const handleResize = () => {
//       const newWidth = window.innerWidth;
//       const newHeight = window.innerHeight;

//       camera.aspect = newWidth / newHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(newWidth, newHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <div ref={containerRef} />;
// };

// export default Room3D;

const Room3D = ({ containerRef }) => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
  
    useEffect(() => {
      // Attach the renderer to the containerRef current property
      containerRef.current.appendChild(renderer.domElement);
  
      // Set up your scene, camera, and rendering logic here
      // ...
  
      // Ensure the camera and renderer adjust to window size changes
      const handleResize = () => {
        const { clientWidth, clientHeight } = containerRef.current;
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(clientWidth, clientHeight);
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Initialize the dimensions
  
      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [containerRef, camera, renderer]);
  
    return <div ref={containerRef}></div>; // This div will be empty; the Three.js canvas is appended to it programmatically
  };
  
  export default Room3D;

