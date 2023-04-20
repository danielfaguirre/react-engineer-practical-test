import BankRepository from "./repository/bank.repository"

const repository = new BankRepository()

export const getBanksService = async () => repository.getBanks()
