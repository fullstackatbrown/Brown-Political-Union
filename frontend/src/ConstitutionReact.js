// import { useState } from 'react';
// import './App.css';
// import Constitution from "./components/Constitution";
import React from 'react';
import Accordion from './components/Accordion';
import constitution from "./data/constitution.json";


const ConstitutionReact = () => {
    return (
        <div className="px-24">
            <div className="mt-32 justify-center">
                <h2 className="text-center text-4xl text-black font-bold">
                    Constitution
                </h2>
                <h3 className="text-center text-2xl text-black">
                    Brown Political Union
                </h3>
            </div>
            <div>
            <h1>The BPU follows a set of principles to guide the organization's mission, brand, and purpose.</h1>
            <div className="accordion">
                {constitution.map(({ header, info }) => (
                <Accordion title={header} content={info} />
                ))}
            </div>
            </div>
        </div> 
    )
}

export default ConstitutionReact;



