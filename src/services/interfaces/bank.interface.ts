import { BankType } from '../../components/Bank/model';
export default interface IBank {
  getBanks: () => Promise<BankType[]>
}
