import { createContext, useContext, useState } from 'react';

// Default value makes this safe to use even where no <GraphProvider> exists
// (e.g. the standalone /projects page) — setActiveIndex just no-ops.
const GraphContext = createContext({
  activeIndex: null,
  setActiveIndex: () => {},
});

export function GraphProvider({ children }) {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <GraphContext.Provider value={{ activeIndex, setActiveIndex }}>
      {children}
    </GraphContext.Provider>
  );
}

export function useGraphContext() {
  return useContext(GraphContext);
}
