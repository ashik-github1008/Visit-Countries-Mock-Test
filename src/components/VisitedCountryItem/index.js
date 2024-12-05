import './index.css'

const VisitedCountryItem = props => {
  const {countryDetails, removeVisitedCountry} = props
  const {id, imageUrl, name} = countryDetails

  const onClickRemoveBtn = () => {
    removeVisitedCountry(id)
  }

  return (
    <li className="visited-country-item">
      <img src={imageUrl} alt="thumbnail" />
      <div className="country-name-remove-btn-container">
        <p>{name}</p>
        <button onClick={onClickRemoveBtn}>remove</button>
      </div>
    </li>
  )
}

export default VisitedCountryItem
