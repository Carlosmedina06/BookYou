import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux'
import style from './UserGraph.module.css'

ChartJS.register(ArcElement, Tooltip, Legend);

// export const quantityOfSubsUsers = () =>{

//   const users = useSelector(state => state.users)
//   const usersSubscribed = users.filter(el=> el.subscription === 'premium')
//   const howManySubs = usersSubscribed.length
//   return howManySubs

// }

// export const quantityOFFreeUsers = () =>{

//   const users = useSelector(state => state.users)
//   const usersFree = users.filter(el=> el.subscription === 'free')
//   const howManyFree = usersFree.length
//   return howManyFree
// }


const aa = 13
export const data = {
  labels: ['Subscription', 'Free'],
  datasets: [
    {
      label: 'Users',
      data: [aa, 20],
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
    ctx.fillText('Users', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
  }
}
export function GraphicUsersFreeToSubs() {
  return( 
  <div className={style.graph}>
    <Doughnut data={data} options={options} plugins={[textCenter]}/>
  </div>
  );
}