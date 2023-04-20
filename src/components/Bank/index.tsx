import { Card, CardContent, Typography } from "@mui/material"
import { BankType } from "../../components/Bank/model"
import style from './styles.module.css'

export type BankProps = {
  bank: BankType
  onClick: (item: BankType) => void
}

const Bank = ({ bank, onClick }: BankProps) => {
  const { bankName, description, age } = bank
  return (
    <div className={style.bankContainer}>
      <Card className={style.bankCard} onClick={() => onClick(bank)}>
        <CardContent>
          <Typography className={style.title} variant="h5">{bankName}</Typography>
          <Typography variant="body1">{description}</Typography>
          <Typography variant="caption">Age: {age}</Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default Bank
