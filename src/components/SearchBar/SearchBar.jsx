import "./SearchBar.css"

export default function SearchBar({ inputValue, setInputValue }) {
  return (
    <div className='search--bar'>
      <input
        className='input--box'
        placeholder='Search Question'
        type='text'
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </div>
  )
}
