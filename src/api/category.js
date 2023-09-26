import request from '@/utils/request'

export const GetCateGoryData = () => {
  return request.get('/category/list')
}
