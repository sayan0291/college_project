import { createContext, useState, useContext ,useEffect } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    const storedLoggedin = localStorage.getItem('isLoggedIn')
    const storedUserdata = localStorage.getItem('userData')

    if(storedLoggedin === 'true' && storedUserdata){
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUserdata))
    }

    setLoading(false)
  },[]
  )

  const login = (user) => {
    console.log(user);
    setIsLoggedIn(true);
    setUserData(user);
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('userData', JSON.stringify(user));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserData(null);
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userData');
    localStorage.clear();
  };


  return (
    <UserContext.Provider value={{ isLoggedIn, userData, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
