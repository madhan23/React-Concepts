import { createContext, useContext, useState } from "react";

const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});

  const saveUser = (user) => setUserDetails(user);

  return (
    <UserContext.Provider value={{ userDetails, saveUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserData = () => useContext(UserContext);
