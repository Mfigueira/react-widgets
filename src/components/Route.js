import { useEffect, useState } from 'react';

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleLocationChange = () => {
    setCurrentPath(window.location.pathname);
  };

  useEffect(() => {
    window.addEventListener('popstate', handleLocationChange);

    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  return currentPath === path && children;
};

export default Route;
