import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import {toast } from 'react-toastify';

import AppointmentBanner from './AppointmentBanner';
import AvailableAppointments from './AvailableAppointments';


const Appointment = () => {
    const [date,setDate] = useState(new Date());
    // console.log(date >= new Date() );
    // let appointDate = 
    // console.log(appointDate)
    
    return (
        <div className='container mx-auto'>
          <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
          
            <AvailableAppointments date={date} ></AvailableAppointments>
          
         
           <Footer></Footer>
        </div>
    );
};

export default Appointment;