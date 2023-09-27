import request from '@/utils/request'

export const GetCartAddData = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsSkuId,
    goodsNum,
    goodsId
  })
}
