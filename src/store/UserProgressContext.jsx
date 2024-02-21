import { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  showCheckout: () => {},
  hideModal: () => {},
});

export function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState("");

  function showCart() {
    setUserProgress("cart");
  }
  function hideModal() {
    setUserProgress("");
  }
  function showCheckout() {
    setUserProgress("checkout");
  }

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    showCheckout,
    hideModal,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
