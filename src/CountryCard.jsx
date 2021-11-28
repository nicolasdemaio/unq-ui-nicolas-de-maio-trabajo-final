import './CountryCard.css'

const CountryCard = (props) => {

    return(
        <div className='card-container'>
            <img
                className='country-img'
                src={require('./assets/not_selected_country.png').default}
                alt={props.country.name}
                onClick={(e) => {
                    e.target.src =
                        props.country.imageSrc
                }}
            />
        </div>
    )

}

export default CountryCard