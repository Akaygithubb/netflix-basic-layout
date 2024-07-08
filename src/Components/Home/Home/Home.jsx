import React,{useEffect} from 'react'
import "./Home.scss"
import axios from "axios";


const api_key="579d20170486a2f3fdb949c49a3e1030";
const url="https://api.themoviedb.org/3";
const upcoming="upcoming";

const Card=({img})=>{
  return(
  <img className='card' src={img} alt="cover" />
  )
}

const Row=({title,arr=[{img:"https://m.media-amazon.com/images/M/MV5BMTA3NzkzMDUxODBeQTJeQWpwZ15BbWU4MDM0ODc5ODcz._V1_.jpg"}]})=>{
  return(
  <div className='row'>
    <h2>
      {title}
    </h2>
    
    <div>
      {
        arr.map((item,index)=>(
          <Card key={index} img={item.img}/>
        ))
      }
    
    </div>
   
   
  </div>
  )
}



const Home = () => {

  useEffect(() => {
  const fetchupcoming=async()=>{
    const {data}=await axios.get(`${url}/movie/${upcoming}?api_key=${api_key}`)
    console.log(data);
  }
  fetchupcoming();
  }, [])
  
  return (
    <section className="home">
      <div className="banner"></div>

     <Row title={"Popular on Netflix"}/>
     <Row title={"Tv Shows"}/>
     <Row title={"Movies"}/>
     <Row title={"Recently Added"}/>
     <Row title={"MyList"}/>



    </section>
  )
}

export default Home