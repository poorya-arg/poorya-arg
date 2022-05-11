import './App.css';
import { useFrame, extend, useThree, useLoader} from "react-three-fiber"
import {Suspense, useRef} from "react"
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls"
import * as THREE from 'three'
import ImageWood from "./assets/wood.jpg"
import ImageSky from "./assets/sky.jpg"
import { ARCanvas } from '@react-three/xr'
import { Routes, Route} from "react-router-dom";
import AR from "./AR"
extend({OrbitControls})
function App() {


  return (
    <Routes>
        <Route path="/ar" element={<AR />} />
      </Routes>
    
  );
}

export default App;
