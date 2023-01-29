import style from './CommentCard.module.css'

export const CommentCard = ({comment}) =>{

    const handleDelete = (e)=>{
        console.log('delete')
    }
    const handleUpdate = () =>{
        
    }
    return(
        <div className={style.container}>
            <div>
                <p>{comment}</p>
            </div>
            <button type='button' onClick={handleDelete}>Delete</button>
            <button type='button' onClick={handleUpdate}>Update</button>
        </div>  
    )
}