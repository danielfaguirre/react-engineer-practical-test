import { StorageEnum } from "./models"

export const set = (key: string, data: string) => {
  localStorage.setItem(key, data)
}

export const get = <T,>(key: StorageEnum) => {
  const data = localStorage.getItem(key)
  if (data) {
    return JSON.parse(data) as T
  }
  return null
}

export default {
  set,
  get
}
