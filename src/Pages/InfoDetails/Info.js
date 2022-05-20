import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import { primary } from 'daisyui/src/colors';

const Info = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4 p-5'>
            <InfoCard img={clock} bgclassName="bg-gradient-to-r from-secondary to-primary" title='Opening Hours'></InfoCard>
            <InfoCard img={marker} bgclassName="bg-[#3A4256]" title="Visit our location"></InfoCard>
            <InfoCard img={phone} bgclassName="bg-gradient-to-r from-secondary to-primary" title="Contact us now"></InfoCard>
        </div>
    );
};

export default Info;