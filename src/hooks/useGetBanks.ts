import { useCallback, useEffect } from "react"
import { useBankContext } from "../context/BankContext"
import { getBanksService } from "../services/bank.service"
import storage from "../config/storage"
import { BankType } from '../components/Bank/model';
import { StorageEnum } from "../config/storage/models";

const useGetBanks = () => {
  const { banks, setBanks } = useBankContext()

  const getBanks = useCallback(async () => {
    let data: BankType[] | null = null
    const storageData = storage.get<BankType[]>(StorageEnum.BANKS)
    if (storageData) {
      data = storageData
    } else {
      data = await getBanksService()
      storage.set(StorageEnum.BANKS, JSON.stringify(data))
    }
    setBanks(data)
  }, [])

  useEffect(() => {
    getBanks()
  }, [getBanks])

  return {
    banks: banks as BankType[],
    loading: banks === null
  }
}

export default useGetBanks
