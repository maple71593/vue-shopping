import request from '@/utils/request'

// 獲取個人資訊
export const getUserInfoDetail = () => {
  return request.get('/user/info')
}
