import { createContext, useContext,  useState, ReactNode } from "react"

interface CountContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

// Ensure this line is still:
export const CountContext = createContext<CountContextProps | null>(null)

export const CountProvider = ({ children }: { children: ReactNode}) => {
  const [count, setCount] = useState<number>(0)
  const increment = () => setCount((count ) =>count + 1)
  const decrement = () => setCount((count) => count > 0 ? count - 1 : 0)

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  )
}

export const useCount = () => {
  const context = useContext(CountContext)

  if (!context) {
    throw new Error("useCount must be used within a CountProvider")
  }

  // Ensure this line is still:
  return context as CountContextProps
}
