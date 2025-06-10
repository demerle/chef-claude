import marker from "../assets/marker.png"
export default function Entry(props){
    const {img, country, title, googleMapsLink, dates, text } = props

    return (
        <article className = "journal-entry">
            <div className="main-image-container">
                <img className = "main-image" src={img.src} alt={img.alt} />
            </div>
            <div>
                <img src={marker} alt="map marker icon"/>
                <span>{country}</span>
                <a href={googleMapsLink}>View on Google Maps</a>
                <h2>{title}</h2>
                <p>{dates}</p>
                <p>{text}</p>
            </div>

        </article>
    )
}
