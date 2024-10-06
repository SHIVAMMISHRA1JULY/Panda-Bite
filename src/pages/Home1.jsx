import React, { useEffect, useRef, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Home1.css';

const Home1 = () => {
let  searchRef=useRef();
const[item,setitem]= useState('pizza')
console.log(item)


    // https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}
    const [dataRecipe, setdataRecipe] = useState([]);

   async function getData(){
        let res = await fetch(`https://api.edamam.com/search?q=${item}&app_id=714082e1&app_key=d31b23492530553b4262bcc6de57742e`)

        let data = await res.json();

        console.log(data.hits)
        setdataRecipe(data.hits)

    }
   
    useEffect(()=>{
        getData()
    },[item])

    const handleClick = (ans)=>{
      // console.log(item[i])
      console.log(ans.recipe)
    }

    const  handleSearch=(e)=>{
      e.preventDefault();
      let value=searchRef.current.value
      console.log(value)

      setitem(value)

    }
  return (
  
   
  
   <div onSubmit={handleSearch} className='background-color'>
    <form action="" className=' flex justify-center w-[50%] m-auto gap-5 '>
      <input ref={searchRef} type="text" placeholder='Search  Recipe' className=' w-[340px] h-[30px] p-3' />
      <button  type='submit' className='bg-violet-400 w-[100px] rounded-lg'>Search</button>
    </form>




      <div  className='grid grid-cols-12 gap-2 p-8 '>
      {/* <h3>home page</h3> */}

      {
        dataRecipe.map((ele,i)=>{
          return  <Card className=' lg:col-span-3 md:col-span-4 sm:col-span-6 col-span-12  p-2  flex flex-col justify-between'>

            <CardMedia
              sx={{ height: 140 }}
              image={ele.recipe.image}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                    {ele.recipe.label}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small">Share</Button> */}
             <div className='btn'> <Link state={ele.recipe} to={'/ViewRecipe'} size="small" className='glow-button' type='button'>View recipe</Link>
              <button  onClick={()=>handleClick(ele)} ></button></div>
            </CardActions>
          </Card>
        })
      }
    </div>
   </div>
  
  )
}

export default Home1
