import React, { useState, createContext } from "react";

export const LockScrollContext = createContext();

export const LockScrollProvider = props => {
  const [lockScroll, setLockScroll] = useState(false);

  return <LockScrollContext.Provider value={[lockScroll, setLockScroll]}>{props.children}</LockScrollContext.Provider>;
};
