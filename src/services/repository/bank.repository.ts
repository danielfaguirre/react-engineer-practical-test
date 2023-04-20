import http from "../../config/http";
import IBank from "../interfaces/bank.interface";
import { BankType } from '../../components/Bank/model';
import { BASE_URL } from "../constants";
import { EndpointsEnum } from "../models";

const url = `${BASE_URL}${EndpointsEnum.BANKS}`

export default class BankRepository implements IBank {
  getBanks = async (): Promise<BankType[]> => {
    const banks = await http.get(url)
    console.log(banks)

    const banksAdapter: BankType[] = banks.map((bank: any) => ({
      bankName: bank.bankName,
      description: bank.description,
      age: bank.age,
      url: bank.url
    }))

    return banksAdapter
  }
}
