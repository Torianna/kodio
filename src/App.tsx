import React from 'react';
import Gallery from "./features/Gallery";
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
    <div className="bg-french-gray-200 h-lvh content-center">
        <Gallery slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default App;
