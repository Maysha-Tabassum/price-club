import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center m-2'>
                <CheckCircleIcon className='h-5 w-5 ml-2 text-green-500'/>
                <p className='ml-2'>{feature}</p>

            </div>
    );
};

export default Feature;