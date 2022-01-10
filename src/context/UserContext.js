import React, { createContext, useEffect, useState } from "react";

export const userContext = createContext(null);

const UserContext = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const userLS = JSON.parse(localStorage.getItem("user"));
    if (userLS) setUser(userLS);
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContext;
