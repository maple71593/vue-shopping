import request from '@/utils/request'

export const GetHomeData = () => {
  return request.get('/page/detail', {
    params: {
      pageId: 0
    }
  })
}
