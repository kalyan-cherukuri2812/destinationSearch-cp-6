import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {name, imgUrl} = destinationDetails
  return (
    <li>
      <img src={imgUrl} alt={name} className="img" />
      <p className="img-name">{name}</p>
    </li>
  )
}

export default DestinationItem
