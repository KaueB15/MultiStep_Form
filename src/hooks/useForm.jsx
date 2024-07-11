import { useState } from "react"

export function useForm(steps) {

    const [currentStep, setCurrentStep] = useState(0)

    const changeStep = (index, e) => {
        e.preventDefault()

        if(index < 0 || index > steps.length - 1) return

        setCurrentStep(index)

    }

    return{
        currentStep,
        currentComponent: steps[currentStep],
        changeStep,
        isLastStep: currentStep === steps.length - 1 ? true : false,
        isFirstStep: currentStep === 0 ? true : false
    }

}