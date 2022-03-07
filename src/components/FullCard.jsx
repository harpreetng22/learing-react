import React from 'react'
import { useSelector } from 'react-redux'

function FullCard(props) {
    
  const cards=useSelector(store=>store.Cards)
  const card=cards.find(card=>card.Id===Number(props.match.params.Id))
  
  console.log(card)
  return (
    <div className='p-5 '>
        <div className="input-group mb-3">
           <label className="form-label p-3">Title</label>      
           <input type="text" className="form-control" value={card.Blogtitel}  />
        </div>
        <div className="input-group mb-3">
           <label className="form-label p-3">Author</label>      
           <input type="text" className="form-control" value={card.Comment[0].commentby}  />
        </div>
        <div className="input-group mb-3">
           <label className="form-label p-3">Post Date</label>      
           <input type="text" className="form-control" value={card.Comment[0].Date}   />
        </div>
        <div className="input-group mb-3">
           <label className="form-label p-3">Post Catogery</label>      
           <input type="text" className="form-control" value={card.Comment[0].catogery}   />
        </div>
        <div className="input-group mb-3">
           <label className="form-label p-3">Content</label>    
           <textarea className="form-control "value={card.Comment[0].Comment}  ></textarea>  
        </div>
        <div className="input-group mb-3">
           <label className="form-label p-3">Likes</label>    
           <textarea className="form-control "value={card.Likes}  ></textarea>  
        </div>
        
        
    </div>
  )
}

export default FullCard