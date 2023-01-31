import { Link } from "react-router-dom"
import "./Questions.css"

export default function Questions({ questions }) {
  return (
    <div className='questions'>
      {questions.map(question => (
        <div key={question._id}>
          <Link to={`/questions/${question._id}`}>{question.question}</Link>
        </div>
      ))}
    </div>
  )
}
