// context/CountContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

// 1. Define the interface for the context props
interface CountContextProps {
  count: number;
  increment: () => void; // Explicitly define increment function
  decrement: () => void; // Explicitly define decrement function
}

// 2. Create the context with a default undefined value
const CountContext = createContext<CountContextProps | undefined>(undefined);

// 3. Define the provider component
interface CountProviderProps {
  children: ReactNode;
}

export const CountProvider: React.FC<CountProviderProps> = ({ children }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0));
  };

  // The value provided to consumers of the context
  const value = { count, increment, decrement };

  return (
    <CountContext.Provider value={value}>
      {children}
    </CountContext.Provider>
  );
};

// 4. Custom hook to use the CountContext
export const useCount = () => {
  const context = useContext(CountContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  }
  return context;
};