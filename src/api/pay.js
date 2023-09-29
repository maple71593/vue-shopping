import request from '@/utils/request'

export const AddressDefaultId = () => {
  return request.get('/address/defaultId')
}

export const CheckoutOrder = (mode, cartIds, obj) => {
  return request.post('/checkout/order', {
    params: {
      mode,
      delivery: 10,
      couponId: 0,
      isUsePoints: 0,
      cartIds,
      ...obj
    }
  })
}
export const getMyOrderList = (dataType, page) => {
  return request.get('/order/list', {
    params: {
      dataType,
      page
    }
  })
}
