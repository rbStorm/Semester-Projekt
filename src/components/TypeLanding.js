import Type from './Type'

//Missing image from server
const TypeLanding = ({chosenTypes, /*pickCategory*/}) => {
    

    return (
        <div className="terLanding">
           
            {chosenTypes.map((type)=>(
                <Type key={type.id} type={type} /*pickCategory={pickCategory}*//>
            ))}
        </div>
    )
}

export default TypeLanding
