import { useState, useContext } from "react"
import { QuestionsContext } from "../../src/Context/CreateContext"
import { useNavigate } from "react-router-dom"

export default function NewQuestion() {
  const [question, setQuestion] = useState("")
  const { setChanged } = useContext(QuestionsContext)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    const resposne = await fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question,
      }),
    })
    const data = await resposne.json()
    setChanged(currState => !currState)
    setQuestion("")
    navigate("/")
  }
  return (
    <>
      <h1>Ask New Question</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={question}
          placeholder='Ask Question'
          onChange={e => setQuestion(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  )
}
