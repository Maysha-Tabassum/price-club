import React from 'react';
import Feature from '../Feature/Feature';


const PricingOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-indigo-300'>
            <div>
                <h2>
                    <span className='text-6xl text-white font-bold'>{option.price}</span>
                    <span className='text-3xl text-gray-100'>/Month</span>
                </h2>
                <p className='text-2xl text-white font-bold my-4'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature 
                key={idx} 
                feature={feature}
                ></Feature>)
            }
            <button className='bg-green-500 w-full rounded-md py-2 font-bold text-white my-2 '>Buy Now</button>
        </div>
    );
};

export default PricingOption;