import request from '@/utils/request'

export const getPicServer = () => {
  return request.get('/captcha/image')
}
export const getphoneServe = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}
