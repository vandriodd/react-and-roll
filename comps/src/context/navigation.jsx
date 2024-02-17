import { createContext, useState, useEffect } from 'react';

const NavigationContext = createContext();

const NavigationProvider = ({ children }) => {
  // The currentPath state will be updated whenever the user navigates to a new page
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // This useEffect will listen for changes to the URL and update the currentPath state
  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Add event listener to listen for changes to the URL
    window.addEventListener('popstate', handleRouteChange);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, [])

  // This function will be used to navigate to a new page
  const navigate = (to) => {
    // {} is the state, '' is the path (verbose), and to is the URL
    window.history.pushState({}, '', to);
    setCurrentPath(to);
  }

  return (
    <NavigationContext.Provider value={{ currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
