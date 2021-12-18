import React, { useCallback, useEffect, useState } from 'react';
import './App.css';
import AddData from './components/AddData';
import Card from './components/Card';

function App() {
  const[post, setPost]=useState([]);
  const [isLoading,setIsloading]=useState(false);
  const [error,setError]=useState(null);


  ////GET data from firebase
   const fetchMovieHandler=useCallback(async()=>{
      setIsloading(true);
      setError(null);
      try{     
        const res= await fetch('https://reactapi-c07f6-default-rtdb.firebaseio.com/datas.json');
        if(!res.ok){
        throw new Error('Something went wrong');
        }
        const data= await res.json();
 
         const loadPost=[];

         for(const key in data){
           loadPost.push({
             ids: key,
             id: data[key].id,
             title: data[key].title,
             body: data[key].body
           })
         }

       
        setPost(loadPost);
        setIsloading(false);
      } 
     catch(error){
            setError(error.message);
            setIsloading(false);
    }

   },[])

   useEffect(()=>{
    fetchMovieHandler();
   },[fetchMovieHandler]);


   ///POSTing data to firebase
   async function addDataHandler(post){
     const response = await fetch('https://reactapi-c07f6-default-rtdb.firebaseio.com/datas.json',{
       method:'POST',
       body: JSON.stringify(post),
       headers:{
         'Content-Type': 'application/json'
       }
     });
     const data= await response.json();
     console.log(data);
   }

   let content=<p>Found no movies</p>;
   
   if(post.length>0){
     content= 
       <Card post={post} />
       
   }

   if(isLoading){
     content=<p>Loading...</p>
   }
   if(error){
     content=<p>{error}</p>
   }

  return (
    <React.Fragment>
      <section>
      <AddData onAddData={addDataHandler}/>
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>

      <section>
       {content}
       </section>
     
    </React.Fragment>
  );
}

export default App;
