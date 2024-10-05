import React from 'react'

export const NewLaunch = () =>{
    return(
        <div className="new-launch">
            <div className="launch-image">
                <img src="https://sfycdn.speedsize.com/56385b25-4e17-4a9a-9bec-c421c18686fb/https://beminimalist.co/cdn/shop/files/Home_Ind_1.png?v=1726812064" alt="Launch Image"/>
            </div>
            <div className="launch-details">
                <span className='new-launch-img'>New Launch</span>
                <span className='launch-title'>Retinal 0.2% Liposomal Cream</span>
                <span className='launch-desc'>Introducing Our Most Potent Retinoid. Ever!</span>
                <span className='launch-advertise'>The power of Retinal combined with the potent antioxidants Resveratrol and EUK-134 to fight multiple signs of aging.</span>
                <button className='launch-btn'>Buy Now</button>
            </div>
        </div>
    );
}