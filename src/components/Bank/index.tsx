import { BankType } from "../../components/Bank/model"

export type BankProps = {
  bank: BankType
}

const Bank = ({ bank }: BankProps) => {
  const { bankName, description, age } = bank
  return (
    <div>
      <h1>{bankName}</h1>
      <p>{description}</p>
      <small>{age}</small>
    </div>
  )
}

export default Bank
