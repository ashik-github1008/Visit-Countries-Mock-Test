import './index.css'

const CountryItem = props => {
  const {countryDetails, clickVisitButton} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisitBtn = () => {
    clickVisitButton(id)
  }

  return (
    <li className="country-item-container">
      <p> {name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button onClick={onClickVisitBtn}>Visit</button>
      )}
    </li>
  )
}

export default CountryItem
