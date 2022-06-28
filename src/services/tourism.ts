import { request, AxiosRequestConfig, AxiosResponse } from '../../utils/api'

// 取得觀光資料 https://tdx.transportdata.tw/api-service/swagger#/Tourism

interface TokenResult {
  access_token: string,
  expires_in: number
}

export const getTdxAccessToken = (config?: AxiosRequestConfig): Promise<AxiosResponse<TokenResult>> => {
  // data須為 x-www-form-urlencoded 格式
  const params = new URLSearchParams()
  params.append('grant_type', 'client_credentials')
  params.append('client_id', 'dekknm0971-39059b57-2958-4982')
  params.append('client_secret', '38ac1d7e-d07d-42e4-aebf-01ffbaa36b6a')

  return request({
    url: 'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',
    method: 'POST',
    data: params,
    signal: config?.signal,
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  })
}

export const getTourismList = (config?: AxiosRequestConfig) => request({
  url: 'https://tdx.transportdata.tw/api/basic/v2/Tourism/ScenicSpot',
  params: config?.params,
  signal: config?.signal,
  headers: config?.headers
})
