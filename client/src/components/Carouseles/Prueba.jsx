import api from '../../utils/axios/axios.js'

export async function anyComments(arr) {
  const booksCommented = arr.filter((book) => book.comment.length > 0)

  const idsArray = booksCommented.map((b) => b.id)

  let booksWithComments = []

  for (let i = 0; i < idsArray.length; i++) {
    const info = await api.get(`/book/${idsArray[i]}`)

    let sum = 0

    for (let y = 0; y < info.data.comment.length; y++) {
      if (!Number.isNaN(parseInt(info.data.comment[y].rate))) {
        sum += parseInt(info.data.comment[y].rate)
      }
    }

    let averageRating = Math.round(sum / info.data.comment.length)
    let newObj = { ...info.data, rating: averageRating }

    booksWithComments.push(newObj)
  }

  let booksSort = booksWithComments.sort((a, b) => {
    return b.rating - a.rating
  })

  let topFiveEightBooks = booksSort.slice(0, 8)

  return topFiveEightBooks
}

const arr = await anyComments([
  {
    title: 'La celestina',
    description:
      'Es una obra de abundantes escenarios, donde el amor protagoniza el argumento. Por la forma en que fue escrita, se debate entre los géneros literarios del drama y la novela, y a juzgar por sus diálogos y personajes da la impresión de que fue concebida con fines educativos.',
    content: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675357546/ac3unao1mnbrdd9yyhuc.pdf',
    img: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675357547/pffji0fyzbaa4wi8v6wo.jpg',
    author: 'Fernando de Rojas.',
    report: 0,
    available: true,
    subscription: 'premium',
    user: {
      username: 'slaawmedina14@gmail.com',
      id: '63dbec6afca075e279ff35d2',
    },
    comment: [
      '63dc07ea3a7e7c87c8389141',
      '63dc0e973a7e7c87c838914b',
      '63dc734b1a40e87923afc980',
      '63dd2861a35e12d7c128b479',
      '63dd2876a35e12d7c128b483',
      '63dd287fa35e12d7c128b48d',
      '63dd3259a35e12d7c128c0b5',
      '63dd3d98a35e12d7c128c3de',
      '63dd401ca35e12d7c128c546',
      '63dd4036a35e12d7c128c559',
    ],
    category: 'Arte',
    createdAt: '2023-02-02T17:05:48.171Z',
    id: '63dbed6cfca075e279ff35f4',
  },
  {
    title: 'La metamorfosis',
    description:
      'En esta narración la trama gira en torno a Gregorio Samsa, un hombre corriente, un simple comerciante de telas, que vive con su familia y que un buen día se transforma en un gran insecto.',
    content: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675372141/qea8od5weavhs02j36ex.pdf',
    img: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675372141/trrgnumgd1xfu837yr49.jpg',
    author: 'Franz Kafka',
    report: 0,
    available: true,
    subscription: 'free',
    user: {
      username: 'test@gmail.com',
      id: '63dc1a77862829ec94e75f88',
    },
    comment: ['63dd16c6a35e12d7c128a745'],
    category: 'Ciencias De La Tierra Y Medioambiente',
    createdAt: '2023-02-02T21:09:02.032Z',
    id: '63dc266edc762eb81d6da1f9',
  },
  {
    title: 'prueba 1',
    description: 'probando form',
    content: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/rnyui52lqtpmaeoljher.pdf',
    img: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/hvrndcfkujhyxvhiduu6.jpg',
    author: 'vane',
    report: 0,
    available: true,
    subscription: 'premium',
    user: {
      username: 'vancig88@gmail.com',
      id: '63dc0cd7144eda05175d494b',
    },
    comment: [
      '63dc7312e169fb70be457198',
      '63dc9693eb19857f1169deb0',
      '63dc972ae1414d6ca4a2e5aa',
      '63dd15bba35e12d7c128a6d1',
      '63dd15ffa35e12d7c128a6de',
      '63dd1619a35e12d7c128a6e8',
      '63dd1667a35e12d7c128a6f9',
      '63dd1683a35e12d7c128a706',
      '63dd1694a35e12d7c128a713',
    ],
    category: 'Estilos De Vida, Aficiones Y Ocio',
    createdAt: '2023-02-02T21:31:08.200Z',
    id: '63dc2b9cdc762eb81d6da243',
  },
  {
    title: 'prueba 1',
    description: 'probando form',
    content: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/ndja3v3knkexrtdd7iml.pdf',
    img: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/qw4fuxdzrx0lxdamvf79.jpg',
    author: 'vane',
    report: 0,
    available: true,
    subscription: 'premium',
    user: {
      username: 'vancig88@gmail.com',
      id: '63dc0cd7144eda05175d494b',
    },
    comment: [
      '63dc360a2c1225e2fd9413e6',
      '63dc940ce169fb70be48ad1b',
      '63dc9420e169fb70be48ad22',
      '63dc945ce169fb70be48ad29',
      '63dc9484e169fb70be48ad30',
    ],
    category: 'Estilos De Vida, Aficiones Y Ocio',
    createdAt: '2023-02-02T21:31:08.224Z',
    id: '63dc2b9cdc762eb81d6da247',
  },
  {
    title: 'prueba 1',
    description: 'probando form',
    content: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/dhnqhwkakayfdrtwiyx9.pdf',
    img: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/evur1xy3bu8kbe05nddp.jpg',
    author: 'vane',
    report: 0,
    available: true,
    subscription: 'premium',
    user: {
      username: 'vancig88@gmail.com',
      id: '63dc0cd7144eda05175d494b',
    },
    comment: [],
    category: 'Estilos De Vida, Aficiones Y Ocio',
    createdAt: '2023-02-02T21:31:08.463Z',
    id: '63dc2b9cdc762eb81d6da24d',
  },
  {
    title: 'prueba 1',
    description: 'probando form',
    content: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/dxgb9fcg3vldgeftwupu.pdf',
    img: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/n4agdzk35vq0lzee9mzf.jpg',
    author: 'vane',
    report: 0,
    available: true,
    subscription: 'premium',
    user: {
      username: 'vancig88@gmail.com',
      id: '63dc0cd7144eda05175d494b',
    },
    comment: [],
    category: 'Estilos De Vida, Aficiones Y Ocio',
    createdAt: '2023-02-02T21:31:08.475Z',
    id: '63dc2b9cdc762eb81d6da24f',
  },
  {
    title: 'prueba 1',
    description: 'probando form',
    content: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/gjbccavllksifxqc97ur.pdf',
    img: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/tkdsmohvxpw2neryeyik.jpg',
    author: 'vane',
    report: 0,
    available: true,
    subscription: 'premium',
    user: {
      username: 'vancig88@gmail.com',
      id: '63dc0cd7144eda05175d494b',
    },
    comment: [],
    category: 'Estilos De Vida, Aficiones Y Ocio',
    createdAt: '2023-02-02T21:31:08.479Z',
    id: '63dc2b9cdc762eb81d6da251',
  },
  {
    title: 'prueba 1',
    description: 'probando form',
    content: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/ry4qzvm2igcklnho9pme.pdf',
    img: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/v1hhreb0tpmuevdhnil1.jpg',
    author: 'vane',
    report: 0,
    available: true,
    subscription: 'premium',
    user: {
      username: 'vancig88@gmail.com',
      id: '63dc0cd7144eda05175d494b',
    },
    comment: ['63dc95b1e169fb70be48adfa'],
    category: 'Estilos De Vida, Aficiones Y Ocio',
    createdAt: '2023-02-02T21:31:08.756Z',
    id: '63dc2b9cdc762eb81d6da259',
  },
  {
    title: 'prueba 1',
    description: 'probando form',
    content: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/bfzwzaumpuhwiqfclm9v.pdf',
    img: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/gbqgfqprnnnvcdanmtcw.jpg',
    author: 'vane',
    report: 0,
    available: true,
    subscription: 'premium',
    user: {
      username: 'vancig88@gmail.com',
      id: '63dc0cd7144eda05175d494b',
    },
    comment: [],
    category: 'Estilos De Vida, Aficiones Y Ocio',
    createdAt: '2023-02-02T21:31:08.764Z',
    id: '63dc2b9cdc762eb81d6da25b',
  },
  {
    title: 'prueba 1',
    description: 'probando form',
    content: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/pn5zowhbzw551muerpuc.pdf',
    img: 'https:res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/ud0kd9jkkdcrzp70yibq.jpg',
    author: 'vane',
    report: 0,
    available: true,
    subscription: 'premium',
    user: {
      username: 'vancig88@gmail.com',
      id: '63dc0cd7144eda05175d494b',
    },
    comment: [],
    category: 'Estilos De Vida, Aficiones Y Ocio',
    createdAt: '2023-02-02T21:31:08.767Z',
    id: '63dc2b9cdc762eb81d6da25d',
  },
])

console.log(arr)
