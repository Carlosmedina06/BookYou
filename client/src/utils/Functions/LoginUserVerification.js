import jwt_decode from 'jwt-decode'
const loginUserVerification = (token, verification) => {
  if (!token) return false
  let decoded = jwt_decode(token)

  if (!verification.user) return false
  if (!verification.user.id) return false
  if (decoded.id === verification.user.id) return true
  if (decoded.role === 'admin') return true

  return false
}

export default loginUserVerification
