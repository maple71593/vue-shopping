// 通用鍵名
const INFO_KEY = '登入本地保存'
const HISTORY_KEY = '搜尋歷史紀錄本地保存'

// 獲取個人訊息
export const getInfo = () => {
  // 如果回傳沒有值的初始值
  const defaultObj = { token: '', userId: '' }
  // 將存至本地的方法包裝
  const result = localStorage.getItem(INFO_KEY)
  //   三元表達式
  return result ? JSON.parse(result) : defaultObj
}

// 設置個人訊息
export const setInfo = (obj) => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}

// 移除個人訊息
export const removeInfo = () => {
  localStorage.removeItem(INFO_KEY)
}

// 在store中調用
// https://www.bilibili.com/video/BV1HV4y1a7n4/?p=117&spm_id_from=pageDriver&vd_source=13942c6c16741804cebefc67e42e4fe5

// 獲取搜尋歷史訊息
export const getHistory = () => {
  // 將存至本地的方法包裝
  const result = localStorage.getItem(HISTORY_KEY)
  //   三元表達式
  return result ? JSON.parse(result) : []
}

// 設置搜尋歷史訊息
export const setHistory = (arr) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
