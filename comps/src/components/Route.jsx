import useNavigation from '../hooks/use-navigation';

const Route = ({ path, children }) => {
  const { currentPath } = useNavigation();

  // If the currentPath matches the path prop, render the children
  // Otherwise, return null
  return path === currentPath ? children : null;
}

export default Route;
