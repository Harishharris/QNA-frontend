import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <div>Harish QNA</div>
      <div className='header--right'>
        <Link to='/questions/new-question'>New Ques</Link>
        <div>Contact</div>
        <div>About</div>
      </div>
    </header>
  )
}
