import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'
const LoginUser = 'LoginUser'

/**
 *获取Token
 * @export
 * @returns
 */
export function getToken() {
  return Cookies.get(TokenKey)
}

/**
 *设置Token
 * @export
 * @param {*} token
 * @returns
 */
export function setToken(token) {
  return Cookies.set(TokenKey, token, config.COOKIE_EXTIME)
}

/**
 * 获取Token过期时间
 */
export function getExpireTime() {
  return Cookies.get(TokenExpireTime)
}

/**
 * 设置Token过期时间
 * @param {*} expireTime 
 */
export function setExpireTime(expireTime) {
  return Cookies.set(TokenExpireTime, expireTime, config.COOKIE_EXTIME)
}

/**
 * 移除Token
 */
export function removeToken() {
  return Cookies.remove(TokenKey)
}

/**
 * 移除过期时间
 */
export function removeExpireTime() {
  return Cookies.remove(TokenExpireTime)
}

/**
 * 获取用户信息
 */
export function getUser() {
  return Cookies.get(LoginUser)
}

/**
 * 移除用户信息
 */
export function removeUser() {
  return Cookies.remove(LoginUser)
}

/**
 *设置登录用户
 * @export
 * @param {*} user
 * @returns
 */
export function setUser(user) {
  return Cookies.set(LoginUser, user, config.COOKIE_EXTIME)
}
