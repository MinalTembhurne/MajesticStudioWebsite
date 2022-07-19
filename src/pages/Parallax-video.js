import React from 'react';
import "../styles/Parallax-video.css";

function ParallaxVideo() {
    return (
        <div className='video-container'>
            <div className='parallax-video' >
                <video type="video/mp4" width="100%" height="100%" autoPlay muted loop crossOrigin='anonymous' playsInline preload='auto'>
                    <source src="https://video.wixstatic.com/video/30a214_6ddb2a1287184f56ab62101bbde1e195/1080p/mp4/file.mp4" type="video/mp4" />
                </video>
                <div className="hey">
                    <h1> Hey, I'm </h1> <h1 className='majestic'>The Majestic Studio ,</h1><br />
                    <h1 className='Wheel'>your new third wheel.</h1>
                </div>
            </div>
        </div>
    )
}

export default ParallaxVideo;