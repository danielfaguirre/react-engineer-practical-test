import BankListView from "./BankListView"
import useGetBanks from "../../hooks/useGetBanks"
import { BankType } from "../../components/Bank/model"

const BankList = () => {
  const { banks, loading } = useGetBanks()

  if (loading)
    return <>Loading...</>

  return (
    <BankListView banks={banks as BankType[]} />
  )
}

export default BankList
