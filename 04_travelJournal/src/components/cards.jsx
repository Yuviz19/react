export default function Card(props) {
  return (
    <>
      <article className="travel-card">
        <img src={props.img.src} alt={props.img.slt} className="card-img"/>
        <div className="card-info">
          <h2 className="Title">{props.title}</h2>
          <h3 className="Country">{props.country}</h3>
          <a href={props.googleMapsLink} className="map-link">Google Map Link</a>
          <h4>{props.dates}</h4>
          <p>{props.text}</p>
        </div>
      </article>
    </>
  )
}
