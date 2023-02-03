
import style from './CommentCard.module.css'
import api from '../../../utils/axios/axios'
export const CommentCard = ({comment}) =>{


  const handleDelete = async ()=>{
      
      const info = await api.put(`/comment/delete/${comment.id}`, null, {
          headers: {
            authorization: `bearer ${localStorage.getItem('token')}`,
          },
        })
      const response = info.data
      console.log(response)
  }
  
  const handleBan = async () =>{
      
      const banned = await api.get(`/user/${comment.user}`)
      const bannedUser = banned.data
      const dataUserForBan = {...bannedUser, strike : bannedUser.strike + 1}
      
      const info = await api.put(`/user/update`, 
      dataUserForBan, {
        headers: {
          authorization: `bearer ${localStorage.getItem('token')}`,
        },
      })
      const response = info.data
      console.log(response)
  }
  const handleClear = async () =>{
      
      const turnReportToZero = {...comment, report:0 }
      
      const info = await api.put(`/comment/update/${comment.id}`,
      turnReportToZero,{
      headers: {
        authorization: `bearer ${localStorage.getItem('token')}`,
      },
    })
      const response = info.data
      console.log(response)
  }
  
  return(
      <div className={style.container} key=''>
          <div>
            <h1>User {comment.username}</h1>
            <h3>Number of reports {comment.report}</h3>
              <p>Content: {comment.comment}</p>
              
          </div>
          <button type='button' onClick={handleDelete}>Delete</button>
          <button type='button' onClick={handleBan}>Ban</button>
          <button type='button' onClick={handleClear}>Clear</button>
          
      </div>  
  )
}