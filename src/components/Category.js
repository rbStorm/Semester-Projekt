import CategoryTP from '../assets/images/CategorySmallTP.png'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'


const Category = ({category, pickCategory}) => {
    

    return (
        <Link to={`/category/${category.id}`} className="categoryLinks" /*onClick={()=>pickCategory(category.Name)}*/>
            <img src={CategoryTP} width='100' height='100' alt='placeholder'/>
            <p>{category.name}  [ID:{category.id}]</p>
        </Link>
    )
}

Category.defaultProps={
    name: 'Default',
    id:0
}

// Category.propTypes={
//     name: PropTypes.string,
// }


export default Category
