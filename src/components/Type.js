import TypeTP from '../assets/images/TypeSmallTP.png'
import {Link} from 'react-router-dom'

const Type = ({type}) => {
    return (
        
        <Link to={`/products`} className="categoryLinks">
            <img src={TypeTP} width='100' height='100' alt='placeholder'/>
            <p>{type.name}  [{type.category}]</p>
        </Link>
    )
}


export default Type
