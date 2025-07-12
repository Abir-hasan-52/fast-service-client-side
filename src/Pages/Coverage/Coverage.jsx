import React from 'react';
import DeliveryMap from './DeliveryMap';
import { useLoaderData } from 'react-router';

const Coverage = () => {
    const serviceCenters = useLoaderData();
    console.log(serviceCenters)
    return (
        <div className='max-w-4xl mx-auto px-4 py-6'>
            <h1 className='text-3xl font-bold text-center mb-6'>We are available in 64 districts </h1>
            <DeliveryMap serviceCenters={serviceCenters}></DeliveryMap>
        </div>
    );
};

export default Coverage;