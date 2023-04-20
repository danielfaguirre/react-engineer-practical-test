import { Grid, Typography } from '@mui/material';
import Bank from "../../components/Bank"
import { BankListViewProps } from "./models"
import { BankType } from "../../components/Bank/model"
import style from './styles.module.css'

const BankListView = ({ banks }: BankListViewProps) => {
  const handleClick = ({ url }: BankType) => {
    window.open(url, '_blank')
  }
  return (
    <div className={style.BankListContainer}>
      <Typography className={style.title} variant='h4'>React Engineer Practical Test</Typography>
      <Grid container>
        {banks.map((bank) => (
          <Grid key={bank.bankName} xs={12} sm={6} lg={4}>
            <Bank onClick={handleClick} bank={bank} />
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default BankListView
