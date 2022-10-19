import React from 'react';
import Slider from './components/Slider'

function App () {
    return (
        <div className="flex min-h-screen w-full min-w-[800px] justify-center items-center">
            <div className="bg-sky-50 h-72 w-[800px] shadow-custom rounded-2xl">
                <Slider />
            </div>
        </div>
    );
}

export default App;
