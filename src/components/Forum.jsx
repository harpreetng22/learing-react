import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import { AddEntry } from '../Actions/Actions';

function Forum() {
  
  
  const [title, settitle] = useState('')  
  const [author, setauthor] = useState('')
  const [date, setdate] = useState('')
  const [catogery, setcatogery] = useState('')
  const [commnet, setcommnet] = useState('')
  const [count, setcount] = useState(4);
  const dispatch=useDispatch();
  const handler=()=>{
     
    
    dispatch(AddEntry({
        Blogtitel:title,
        Id:count,
        Likes:0,
        Comment:[ {
        Date:date,
        Comment:commnet,
        catogery:catogery,
        commentby:author
        }]
        }));
        setcount(count+1);
        settitle('')
        setauthor('')
        setcatogery('')
        setcommnet('')
        setdate('')

  }
  return (
    <div className='p-5'>
        <div className="input-group mb-3">
           <label className="form-label p-3">Title</label>      
           <input type="text" className="form-control" value={title} onChange={(e)=>settitle(e.target.value)} />
        </div>
        <div className="input-group mb-3">
           <label className="form-label p-3">Author</label>      
           <input type="text" className="form-control" value={author} onChange={(e)=>setauthor(e.target.value)} />
        </div>
        <div className="input-group mb-3">
           <label className="form-label p-3">Post Date</label>      
           <input type="text" className="form-control" value={date} onChange={(e)=>setdate(e.target.value)}  />
        </div>
        <div className="input-group mb-3">
           <label className="form-label p-3">Post Catogery</label>      
           <input type="text" className="form-control" value={catogery} onChange={(e)=>setcatogery(e.target.value)}  />
        </div>
        <div className="input-group mb-3">
           <label className="form-label p-3">Content</label>    
           <textarea className="form-control "value={commnet} onChange={(e)=>setcommnet(e.target.value)} ></textarea>  
        </div>
        
        <button type="button" className="btn bg-info bg-opacity-70 border-4  text-white" onClick={handler}>Submit</button>
    </div>
  )
}

export default Forum