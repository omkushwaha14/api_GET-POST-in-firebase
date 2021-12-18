import React, { useRef } from "react";



const AddData=(props)=>{

    const idRef=useRef('');
    const titleRef=useRef('');
    const bodyRef=useRef('');

    const submitHandler=(event)=>{
       event.preventDefault();

      const post={
          id:idRef.current.value,
          title:titleRef.current.value,
          body:bodyRef.current.value,

      }
     props.onAddData(post);
      
    }
 
    return(
        <form onSubmit={submitHandler}>
        <div className="form-group">
          <label >Symbol Number</label>
          <input type="id" class="form-control" ref={idRef}   aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label >Title</label>
          <input type="text" class="form-control" ref={titleRef}   placeholder="text"/>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" class="form-control" ref={bodyRef}    placeholder="text"/>
        </div>
        
        <button>Submit</button>
      </form>
    )


}


export default AddData;