import { useParams } from "react-router-dom"
import { useContext, useState } from "react"
import { QuestionsContext } from "../../src/Context/CreateContext"
import "./SingleQuestion.css"

export default function SingleQuestion() {
  const [comment, setComment] = useState("")
  let { questions, setChanged } = useContext(QuestionsContext)
  const { id } = useParams()
  questions = questions.find(question => question._id === id)

  async function handleLikeEvent(e) {
    e.preventDefault()
    const response = await fetch(`http://localhost:3000/questions/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        upvotes: "1",
      }),
    })
    const data = await response.json()
    setChanged(currState => !currState)
  }

  async function handleDislikeEvent(e) {
    e.preventDefault()
    const response = await fetch(`http://localhost:3000/questions/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        downvotes: "1",
      }),
    })
    const data = await response.json()
    setChanged(currState => !currState)
  }

  async function handleCommentSubmit(e) {
    e.preventDefault()
    const response = await fetch(`http://localhost:3000/questions/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        comments: comment,
      }),
    })
    const data = await response.json()
    setChanged(currState => !currState)
    setComment("")
  }

  return (
    <div>
      <div>
        <h1>{questions.question}</h1>
        <button onClick={handleLikeEvent}>Like</button>
        <button onClick={handleDislikeEvent}>Dislike</button>
        <p>Upvotes: {questions.upvotes}</p>
        <p>Downvotes: {questions.downvotes}</p>
        {questions.comments.length === 0 ? (
          <p>No Comments!!</p>
        ) : (
          questions.comments.map((comment, idx) => (
            <div key={idx}>{comment}</div>
          ))
        )}
      </div>
      <form onSubmit={handleCommentSubmit}>
        <input
          type='text'
          className='comment--input'
          placeholder='Type your comment on this post'
          value={comment}
          onChange={e => setComment(e.target.value)}
        />
      </form>
    </div>
  )
}
