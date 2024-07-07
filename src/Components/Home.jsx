import React, { useEffect, useState } from 'react'
import Card from './Card'
let API_Key="&api_key=e9558192bdfd2d14796bdc59d559d027";
let base_url="https://api.themoviedb.org/3";
let url=base_url+"/discover/movie?sort_by=popularity.desc"+API_Key;
let arr=["Popular","Theatre","kids","Drama","Comedy"]
const Home = () => {
  const [movieData,setData]=useState([])
  const[url_set,setUrl]=useState([url])
  const[search,setSearch] =useState()

  useEffect(()=>
{fetch(url_set) .then(res=>res.json()) .then(data=>
{
    // console.log(data.results);
    setData(data.results);
}
)

},[url_set])
const getData=(movieType)=>
{
    if(movieType=="Popular")
    {
        url=base_url+"/discover/movie?sort_by=popularity.desc"+API_Key;
    }
    if(movieType=="Theatre")
   {
     url=base_url+"/discover/movie?primary_release_date.gte=2014-0915&primary_release_date.lte=2014-10-22"+API_Key;
   }
    if(movieType=="kids")
    {
     url=base_url+"/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc "+API_Key;
    }
    if(movieType=="Drama")
        {
        url=base_url+"/discover/movie?with_genres=18&primary_release_year=2014"+API_Key; 
        }
    if(movieType=="Comedy")
   {
       url=base_url+"/discover/movie?with_genres=35&with_cast=23659&sort_by=revenue.desc"+API_Key;      
     }
     setUrl(url);

}

const searchMovie=(evt)=>{
    if(evt.key=="Enter")
    {
        url=base_url+"/search/movie?api_key=db95773a7fb212ba790d71f6adac0e7e&query="+search;
        setUrl(url);
        setSearch(" ");
    }
    // console.log('hello')

}
  return (
   <>
     <div className='header'>
        <nav>
            <ul>
                {
                    arr.map((value,pos)=>
                    {
                        return( <li><a href='#' key={pos} name={value} onClick={(e=>{getData(e.target.name)})}>{value}</a></li>)
                      
                    })
                }
               
              
            <div className='search-btn'>
                <form>
                    <input type='text' placeholder='Enter a movie name'
                     className='inputText' onChange={(e)=>{setSearch(e.target.value)}} value={search} onKeyDown={searchMovie}>
                    
                    </input>
                    <button><i className="fas fa-search"></i></button>
                    
                </form>
            </div>
            </ul>
        </nav>
       
     </div>
     <div className='container'>
       {
        (movieData.length==0)?<p className='notfound'>Not Found</p>:movieData.map((res,pos)=>{
            return( <Card info={res} key={pos} />)
        })
       }
        </div>


     </>
  )
}

export default Home