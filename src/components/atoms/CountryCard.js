import './CountryCard.css'

const CountryCard = (props) => {
    return (
        <div className='country-card'>
            <div>
                <img className='country-image' src={props.country.imageSrc}/>
            </div>
        </div>
    )
}

export default CountryCard
