import { ReactNode } from "react"
import { BankType } from "../../components/Bank/model"

export type BankContextType = {
  banks: BankType[] | null
  setBanks: React.Dispatch<React.SetStateAction<BankType[] | null>>
}

export type BankContextProviderType = {
  children: ReactNode
}
