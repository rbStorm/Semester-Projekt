import Category from '../../components/Category'
import {useEffect, useState} from 'react'

//Missing image from server
const NewLanding = () => {
    const [categories,setCategories] = useState([])

    //saving categories on first mount
    useEffect(() => 
    {
       
         const getCategories = async()=>{
          const categoriesFromServer = await fetchCategories()
          setCategories(categoriesFromServer)      //save to state
         }
           getCategories()     //run fetch method
    },[])
       
     //fetch categories from server
    const fetchCategories = async()=>
    {
         const res = await fetch('http://localhost:5001/categories')
         const data = await res.json()
        return data
    }
    

    return (
 <div>

        <div className="landingKatalog">
            <div className="landingHeader"> Katalog</div>
            <form>
                <input className="form-input-search" placeholder="Enter search parameter"></input>
            </form>
        </div>

       <div className="terLanding">
        
            {categories.map((category)=>(
                <Category key={category.id} category={category}/>
                ))}
        </div> 
        
    </div>
        
                
    )
}

export default NewLanding
