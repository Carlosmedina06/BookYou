import { google } from 'googleapis'
import dotenv from 'dotenv'
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'
const view_id = 284238882

dotenv.config()

const { CLIENT_EMAIL, PRIVATE_KEY } = process.env

// informacion del .env
// CLIENT_EMAIL= bookyou@bookyou-376813.iam.gserviceaccount.com
//  PRIVATE_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDoSUX1jqghxJmE\nvBF5TE2GkRmXNeOutB8w+HnTHUzbSxArT0c+xraSnuw4GAMMnUtSVdWa7d3AFbpm\neqsp80zm8TPIZiMX0UXeyL9JxxOFHzlinkBO9Ji5Juje63oPlN5hI1+BsxAU7GpC\n4wJQgwCQqpF3x9TkoVtL1+xGtCa5y1MclQXTXyaALWdeOu28UY5jF7IIEx9ivcgU\nGGA7yEzBzVIAm0sFB86Oc+9my6kp8VM1TZTuUAL7m8S9WUntV9fyCK9yRTQ8ktPW\n5QjXeZqd3X8HiOLOKU4F6fN45PQ9rV/XCJUgDDJNLYtdlhmTUMOVOzOPPRvMuNID\n/DGeGS7VAgMBAAECggEARakjx95+YZIaEApumxfc8Aw3xncszsnJyN/beQqCcAl0\n0eg2j4b8XcA3SyM4VuIdIpYHNy06oU5i1jTXe/8xAtk3FFQ9Ffl2oLdHVpLTMcsJ\nZJ/c3VDRNEWM9L1dn6qffjYjgDv5CK1VuLVnjkmbM8dTVL6jA+W4AWjBvPpt2q2i\n9tFZTHnv4SuWYn5+Jc9DbVmsvmK9S/w6ASVhNdVLuRzlrMMTbOKlpv4TlyVt2ekI\nZiXpHCT0wtF5glgO/l+bY7vN3sNSgMXMIvLItlDdkFXuWsExaSWerVB8n8CxeyJL\nTPDE4SmN2MV+yKZ5cOi02AbH9OmR1ST10X7kW50hCQKBgQD4qZd64eHZKZs7itAD\n+OksU67JRFUZpac+/q08eKIL9drQ7K+/mqYueRTNZ4L/B1yJjHUtndsdkFQzkY7p\nPc3TijJxHGHMRSfwTzLhTGd+TFEgNI1P0Iv8YDAuelekPpZvgD1AZHmlCZVbZhTd\nY9KqKp1MtKWRcIS5r0n6sw9D6wKBgQDvI/mA3S4NIodXBE2mXcQDYlCToVYIQY/a\nhriOwz890lJVmopLg4Txaxugvm4wzLTneOHKnmY+b+nbyFWt5O9o1u1vCvohwjfX\n+tqdlzCXaxxRRNR++rWgYuqkMYQZvDHD7r84Qp0QKhl05R9p4u1+xSXVnMD6NmTF\nboDMXUBoPwKBgQCcR9IZe/+6wYh7iomkBXtezZVLj3PAs7kCQYPVPqfxxmno5uiq\nDmMlUBn/4m+VIyZImItIyS5eTUhuRKxB8QL8UZ3UMxdQD6LDSLNcn+1nlkVibUTn\nBdYFHtsJSwDsDB32I+3bG4rMa9J/6A9y+Pr80d2cyOhKGSKBpSZktscAUwKBgDyu\njkNq3KKsnlcwWlva80BAlF3B1Mjnig9TnEVtugB//DCItIsQ5o00NqCFcgSkDUun\nWvRFWYCCeX8xyLwFmdKqpzlEOdCTLgR6PTs8ADKMFXVx19IY4DnAn/XmMrUtEhu7\n2331OVG+vRLyiRQfZ1CBymX4DufvIYcP0VMKXquVAoGBAJfwHYzrc+OuwtRJvTXV\nwukpUghsiZ+UH4HP9vXQIvj+qItcYNKrB5WOvSOjhnHrfbyBx62pI9XX/kq3CoDS\nT9L1fOq+PvsSm1r+WVYicofXxoGyDBONVVbwtdYBp6a37WxS1ICHAflln4MCl5ps\nXGXLVpr4XWgtpctlRTxsIxlS\n-----END PRIVATE KEY-----\n"

const jwt = new google.auth.JWT(
  process.env.CLIENT_EMAIL,
  null,
  process.env.PRIVATE_KEY.replace(/\\n/g, '\n'),
  scopes,
)

export const getViews = async (req, res) => {
  try {
    await jwt.authorize()

    const response = await google.analytics('v3').data.ga.get({
      auth: jwt,
      ids: 'ga:' + view_id,
      'start-date': '30daysAgo',
      'end-date': 'today',
      metrics: 'ga:pageviews',
    })

    res.status(200).json(response.data.totalsForAllResults)
  } catch (err) {
    console.log(err)
  }
}

export default getViews
