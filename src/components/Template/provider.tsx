import React from 'react'

type TTemplate = string | undefined

type TState = {
  template: TTemplate
  setTemplate: React.Dispatch<React.SetStateAction<TTemplate>>
} | undefined;

const Context = React.createContext<TState>(undefined)

export const Provider:React.FC = ({ children }) => {
  const [template, setTemplate] = React.useState<TTemplate>(undefined)

  return (
    <Context.Provider value={{ template, setTemplate }}>
      {children}
    </Context.Provider>
  )
}

export const useProvider = () => {
  const value = React.useContext(Context)

  if (value === undefined) {
    throw new Error('useTemplateProvider should be used with TemplateProvider')
  }

  return value
}
