import request from '@/utils/request'

export const GetCartAddData = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsSkuId,
    goodsNum,
    goodsId
  })
}

export const GetCartList = () => {
  return request.get('/cart/list')
}

export const GetCartListDataUp = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

export const DelIDList = (cartIds) => {
  return request.post('/cart/clear', {
    cartIds
  })
}
