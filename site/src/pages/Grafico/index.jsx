import './index.scss'
import React from 'react';
import {  Line } from 'react-chartjs-2'
const Grafico =() => {
    return <div className='gra'>
        aaaaaaaaaaa
        <Line
        data={{
            labels:['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']
        }} 
        
        heigth={300}
        width={500}
        options={{
            maintainAspectRatio: false,
        }}
        />
    </div>
}

export default Grafico