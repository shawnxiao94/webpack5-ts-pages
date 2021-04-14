/*
 * @Author: shawnxiao
 * @Date: 2021-04-11 22:34:07
 * @LastEditTime: 2021-04-12 12:02:59
 * @FilePath: /webpack5-ts-pages/src/common/utils/request.ts
 */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import qs from 'qs'
import { getCookie } from './cookie'
import { getTokenKeyForPage, dataURLtoFile } from './index'
import { loginOutCas } from './auth'
import ErrorMessage from './errorMessage'
import { notification, Modal } from 'antd'

interface axiosInstance {
  baseURL: string;
  headers: {
    'content-type': string;
    'Accept': string;
  };
  timeout:number;
  withCredentials: boolean;
  credentials: string
}
interface ResponseData<T> {
  code: number;
  data: T;
  msg?: string;
  message?: string;
}
interface instanceError{
  response?:{
    status?: number | string;
    data?: {
      message?: string;
      msg?: string;
    }
  };
  message: string;
  data?: {
    message?: string;
  }
}

// 声明一个 Map 用于存储每个请求的标识 和 取消函数
const pending:any = new Map()

/**
 * 添加请求
 * @param {Object} config
 */
const addPending = (config:any) => {
  const url = [
    config.method,
    config.url,
    JSON.stringify(config.params),
    JSON.stringify(config.data)
  ].join('&')
  config.cancelToken =
    config.cancelToken ||
    new axios.CancelToken((cancel) => {
      if (!pending.has(url)) {
        // 如果 pending 中不存在当前请求，则添加进去
        pending.set(url, cancel)
      }
    })
}

/**
 * 移除请求
 * @param {Object} config
 */
const removePending = (config:any) => {
  const url = [
    config.method,
    config.url,
    JSON.stringify(config.params),
    JSON.stringify(config.data)
  ].join('&')
  if (pending.has(url)) {
    // 如果在 pending 中存在当前请求标识，需要取消当前请求，并且移除
    const cancel = pending.get(url)
    cancel(url)
    pending.delete(url)
  }
}
/**
 * 清空 pending 中的请求（在路由跳转时调用）
 */
export const clearPending = () => {
  for (const [url, cancel] of pending) {
    cancel(url)
  }
  pending.clear()
}

/**
 * 创建axios实例
 */
const instance = axios.create({
  baseURL: '/',
  headers: {
    'content-type': 'application/json;charset=utf-8'
  },
  timeout: 300000,
  withCredentials: true,
  credentials: 'include'
} as axiosInstance)

/**
 * 添加请求拦截
 */
instance.interceptors.request.use((request:AxiosRequestConfig) => {
  removePending(request) // 在请求开始前，对之前的请求做检查取消操作
  addPending(request) // 将当前请求添加到 pending 中
  // token
  if (getCookie(getTokenKeyForPage())) {
    request.headers['tg-token'] = getCookie(getTokenKeyForPage())
  }
  return request
})

instance.interceptors.response.use(
  (response:AxiosResponse<ResponseData<any>>):any => {
    removePending(response) // 在请求结束后，移除本次请求
    if ((response.config.url as string).includes('.json')) {
      // 走的json本地数据场景
      return Promise.resolve(response)
    }
    if (~~response.data.code !== 200) {
      if (~~response.data.code === 403 || ~~response.data.code === 401) {
        Modal.error({
          title: '错误提示！',
          content: response.data?.msg || response.data?.message,
          okText: '确定',
          onOk() {
            loginOutCas()
          }
        })
      } else {
        return Promise.reject(response)
      }
    } else {
      return Promise.resolve(response)
    }
  },
  (error:instanceError) => {
    if (axios.isCancel(error)) {
      console.log('repeated request:数据请求中，请稍后！ ' + error?.message)
    } else {
      if (error && error.response) {
        switch (~~(error?.response?.status as number | string)) {
          case 400:
            error.message = ErrorMessage.STATUS_400
            break
          case 401:
            error.message = ErrorMessage.STATUS_401
            break
          case 403:
            error.message = ErrorMessage.STATUS_403
            break
          case 404:
            error.message = ErrorMessage.STATUS_404
            break
          case 408:
            error.message = ErrorMessage.STATUS_408
            break
          case 500:
            error.message = ErrorMessage.STATUS_500
            break
          case 501:
            error.message = ErrorMessage.STATUS_501
            break
          case 502:
            error.message = ErrorMessage.STATUS_502
            break
          case 503:
            error.message = ErrorMessage.STATUS_503
            break
          case 504:
            error.message = ErrorMessage.STATUS_504
            break
          case 505:
            error.message = ErrorMessage.STATUS_505
            break
          default:
        }
        Modal.error({
          title: '错误提示！',
          content: `请求失败-${
            error?.response?.data?.msg || error?.response?.data?.message || error.message
          }`,
          // okText:''
          onOk() {
            if (~~(error?.response?.status as number | string) === 401 || ~~(error?.response?.status as number | string) === 403) {
              loginOutCas()
            }
          }
        })
      } else {
        // 服务器请求失败时错误提示
        notification.error({
          message: '错误提示！',
          description: `请求超时${ErrorMessage.API_ERROR_LOAD}`
        })
      }
    }
    // return Promise.reject(error)
  }
)

const ContentTypeArr:any[] = [
  { raw: 'application/json;charset=utf-8' },
  {
    'x-www-form-urlencoded': 'application/x-www-form-urlencoded;charset=utf-8'
  }, // 声明了请求体中的数据会以键值对（普通表单形式）发送到后端，这种类型是Ajax默认的。
  { 'form-data': 'multipart/form-data;charset=utf-8' }, // 一般用来上传文件，指定传输数据为二进制数据，例如图片、mp3、文件，也可以用来上传键值对,它将表单数据处理为一条消息，以标签为单元，用分隔符分开。既可以单独上传键值对，也可以直接上传文件（当上传字段是文件时，会有Content-Type来说明文件类型,但该文件不会作为历史保存，只能在每次需要发送请求的时候，重新添加文件。）；post请求里较常用的一种
  { binary: 'application/octet-stream;charset=utf-8' } // 只能上传二进制文件，且没有键值对，一次只能上传一个文件, 也不能保存历史，每次选择文件，提交；
]

// 使用post请求方式数组
const postMethods:string[] = ['put', 'post', 'delete']

/**
 * API请求封装
 * @param  {String} url api请求url
 * @param  {String} method 请求方法，默认为post
 * @param  {String} model
 * @param  {Object} params 入参
 * @param  {String} isPost 请求方法
 * @return 返回一个经加工的axios实例
 */
export interface instanceProps{
  url:string;
  method: string;
  model?: any;
  params?: Object;
  isPost?: boolean;
  ContentType?: string;
  responseType: any;
}

export default function ({ url, method, model, params = {}, isPost, ContentType, responseType }: instanceProps) {
  const _config:any = {
    url,
    method,
    headers: {
      'content-type': ContentType
        ? Object.values(ContentTypeArr.find((item) => item[ContentType]) as Object)[0]
        : ContentTypeArr[0].raw
    }
  }
  if (ContentType && ContentType === 'form-data') {
    _config.headers.Accept = '*/*'
  }
  if (responseType) {
    _config.responseType = responseType
  }

  const _params = params
    ? model
      ? ContentType && ContentType === 'form-data'
        ? model.request(params)
        : model.request(JSON.parse(JSON.stringify(params)))
      : params
    : ''
  if (postMethods.includes(method.toLowerCase()) || isPost) {
    if (ContentType) {
      if (ContentType === 'x-www-form-urlencoded') {
        _config.data = qs.stringify(_params)
      }
      if (ContentType === 'form-data') {
        // 文件上传流
        const obj:any = {
          fileName: '',
          image: '',
          file: '',
          params: {}
        }
        Object.assign(obj, _params)
        const formData = new FormData()
        if (obj.image !== '') {
          formData.append(obj.fileName, dataURLtoFile(_params.image))
        } else {
          formData.append(obj.fileName, _params.file)
        }
        if (obj.params) {
          Object.keys(obj.params).forEach((key) => {
            formData.append(key, obj.params[key])
          })
        }
        _config.data = formData
      }
    } else {
      _config.data = _params
    }
  } else {
    _config.params = _params
  }
  return new Promise((resolve, reject) => {
    return instance(_config)
      .then((response) => {
        resolve(model ? model.response(response?.data) : response?.data)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
