"use client";
import ReactLenis from '@studio-freight/react-lenis'

const page = () => {
    return (
        <ReactLenis root>
            <div className='projects'>
                <div className='images'>
                    <img src='img1.png' alt='img' />
                    <img src='img2.png' alt='img' />
                    <img src='img3.png' alt='img' />
                    <img src='img5.png' alt='img' />
                </div>
            </div>
        </ReactLenis>
    )
}

export default page
