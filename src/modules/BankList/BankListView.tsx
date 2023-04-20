import Bank from "../../components/Bank"
import { BankListViewProps } from "./models"

const BankListView = ({ banks }: BankListViewProps) => {
  return (
    <div>
      {banks.map((bank) => <Bank key={bank.bankName} bank={bank} />)}
    </div>
  )
}

export default BankListView
