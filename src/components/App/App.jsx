import { useState, useEffect } from "react"
import "./App.css"
import Header from "../Header/Header"
import SearchBar from "../SearchBar/SearchBar"
import Questions from "../../Questions/Questions"
import { BrowserRouter } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import SingleQuestion from "../../../pages/SingleQuestion/SingleQuestion"
import { QuestionsContext } from "../../Context/CreateContext"
import NewQuestion from "../../../pages/NewQuestion/NewQuestion"

function App() {
  const [inputValue, setInputValue] = useState("")
  const [questions, setQuestions] = useState([])
  const [changed, setChanged] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/questions")
      const data = await response.json()
      setQuestions(data)
    }
    fetchData()
  }, [changed])

  return (
    <>
      <BrowserRouter>
        <QuestionsContext.Provider value={{ questions, setChanged }}>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Header />
                  <SearchBar
                    inputValue={inputValue}
                    setInputValue={setInputValue}
                  />
                  <Questions questions={questions} />
                </>
              }
            />
            <Route path='/questions/:id' element={<SingleQuestion />} />
            <Route path='/questions/new-question' element={<NewQuestion />} />
          </Routes>
        </QuestionsContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
