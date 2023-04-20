import { createContext, useContext, useState } from "react";
import { BankType } from "../../components/Bank/model";
import { BankContextProviderType, BankContextType } from "./models";

const BankContext = createContext<BankContextType>({
  banks: null,
  setBanks: () => { }
})

const BankContextProvider = ({ children }: BankContextProviderType) => {
  const [banks, setBanks] = useState<BankType[] | null>(null)

  return (
    <BankContext.Provider value={{ banks, setBanks }}>
      {children}
    </BankContext.Provider>
  )
}

export const useBankContext = () => {
  return useContext(BankContext as React.Context<BankContextType>)
}

export default BankContextProvider
