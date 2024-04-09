import React from 'react';
import './App.css';
import EmblaCarousel from "./features/Gallery/EmblaCarousel";
import {EmblaOptionsType} from "embla-carousel";
import data from './data/slidesData.json'

export interface SlideData {
    "picture": string,
    "heading": string,
    "title": string,
    "description": string
}

const OPTIONS: EmblaOptionsType = {

}
const SLIDE_COUNT = data.length
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

function App() {
  return (
    <div className="App bg-french-gray-200 h-lvh content-center">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default App;
