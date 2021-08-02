import {useParams} from 'react-router'
import {useEffect, useState} from 'react'
import Type from '../../components/Type.js'
const SubcategoryPage = () => {
    
    const {categoryId} = useParams();
    const [types, setTypes] = useState([])

    useEffect(() => 
    {
        if(!categoryId)
        {
            return 
        }
        
        //const findCategoryById= categories.find(category=>parseInt(categoryId)===parseInt(category.id))           
            const getTypes = async()=>
            {
                const typesFromServer = await fetchTypes()
                const sortedTypes = typesFromServer.filter((type)=>parseInt(type.fk) === parseInt(categoryId));
                setTypes(sortedTypes)
            }
        getTypes()
    }, [])


    const fetchTypes = async()=>
    {
        const res = await fetch('http://localhost:5001/type')
        const data = await res.json()
        return data
    }

    return (
        <div className="terLanding">
            {types.map((type)=>(
            <Type key={type.id} type={type}/>
            ))}
        </div>
    )
}

export default SubcategoryPage
