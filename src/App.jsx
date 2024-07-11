import './App.css'

import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { FiSend } from 'react-icons/fi'

import { useForm } from './hooks/useForm'

import { UserForm } from './components/UserForm/UserForm'
import ReviewForm from './components/ReviewForm/ReviewForm'
import Thanks from './components/Thanks/Thanks'
import Steps from './components/Steps/Steps'
import { useState } from 'react'

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: ""
}

function App() {

  const [ data, setData ] = useState(formTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return {...prev, [key]: value}
    })
  }

  const formComponents = [<UserForm data={data} updateFieldHandler={updateFieldHandler} />, <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />, <Thanks data={data} />]

  const { currentComponent, currentStep, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

  return (
    <div className='app'>
      <header>
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com a sua compra, utilize o formulário a baixo para avaliar o produto</p>
      </header>
      <div className="form-container">
        <Steps currentStep={currentStep}/>
        <form>
          <div className="inputs-container">
            {currentComponent}
          </div>
          <div className="form-action">
            {!isFirstStep &&
            (<button type="button" onClick={(e) => changeStep(currentStep - 1, e)}>
              <GrFormPrevious/>
              <span>Voltar</span>
            </button>)
            }
            {!isLastStep ? (
              <button type="submit" onClick={(e) => changeStep(currentStep + 1, e)}>
                <span>Avançar</span>
                <GrFormNext/>
              </button>)
              :
              (
              <button type="submit" onClick={(e) => changeStep(currentStep + 1, e)}>
                <span>Enviar</span>
                <FiSend/>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
