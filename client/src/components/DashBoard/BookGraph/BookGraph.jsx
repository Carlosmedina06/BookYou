import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import style from './BookGraph.module.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const booksSubs = quantityOFPayBooks()
const booksFree = quantityOfFreeBooks()
console.log(booksSubs, booksFree)

export const data = {
  labels: ['Subscription', 'Free'],
  datasets: [
    {
      label: 'Books',
      data: [12,40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        
      ],
      
      borderWidth: 1,
      
          
      
    },
  ],
  
  
};
export const options = {
  cutout: '75%',
  borderRadius: 2
  
}
export const textCenter = {
  id: 'textCenter',
  beforeDatasetsDraw(chart, args, pluginOptions){
    const { ctx, data } = chart
    ctx.save()
    ctx.font= 'bolder 30px sans serif'
    ctx.fillStyle= 'orange'
    ctx.textAlign= 'center'
    ctx.textBaseline= 'middle'
    ctx.fillText('Books', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
  }
}
export function GraphicBooksFreeToSubs() {
  
  return( 
  <div className={style.graph}>
    <Doughnut data={data} options={options} plugins={[textCenter]}/>
  </div>
  );
}