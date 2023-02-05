export function getTopBooks(allBooks) {
  let booksSort = allBooks.sort((a, b) => {
    return b.comment.length - a.comment.length;
  });

  let mostEightCommented = booksSort.slice(0, 8);

  return mostEightCommented;
}

// console.log(
//   getTopBooks([
//     {
//       title: 'La metamorfosis',
//       description:
//         'En esta narración la trama gira en torno a Gregorio Samsa, un hombre corriente, un simple comerciante de telas, que vive con su familia y que un buen día se transforma en un gran insecto.',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675372141/qea8od5weavhs02j36ex.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675372141/trrgnumgd1xfu837yr49.jpg',
//       author: 'Franz Kafka',
//       report: 0,
//       available: true,
//       subscription: 'free',
//       user: {
//         username: 'test@gmail.com',
//         id: '63dc1a77862829ec94e75f88',
//       },
//       comment: ['63dd16c6a35e12d7c128a745'],
//       category: 'Ciencias De La Tierra Y Medioambiente',
//       createdAt: '2023-02-02T21:09:02.032Z',
//       id: '63dc266edc762eb81d6da1f9',
//     },
//     {
//       title: 'prueba 1wfsdfsdfsd',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/rnyui52lqtpmaeoljher.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/hvrndcfkujhyxvhiduu6.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [
//         '63dc7312e169fb70be457198',
//         '63dc9693eb19857f1169deb0',
//         '63dc972ae1414d6ca4a2e5aa',
//         '63dd15bba35e12d7c128a6d1',
//         '63dd15ffa35e12d7c128a6de',
//         '63dd1619a35e12d7c128a6e8',
//         '63dd1667a35e12d7c128a6f9',
//         '63dd1683a35e12d7c128a706',
//         '63dd1694a35e12d7c128a713',
//         '63deebafe29c88c0ea6ea5ad',
//       ],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:08.200Z',
//       id: '63dc2b9cdc762eb81d6da243',
//     },
//     {
//       title: 'libro editado mi bro asdasdas2asdas',
//       description: 'xd xd xd',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/ndja3v3knkexrtdd7iml.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/qw4fuxdzrx0lxdamvf79.jpg',
//       author: 'you know who i am',
//       report: 0,
//       available: true,
//       subscription: 'free',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [
//         '63dc360a2c1225e2fd9413e6',
//         '63dc940ce169fb70be48ad1b',
//         '63dc9420e169fb70be48ad22',
//         '63dc945ce169fb70be48ad29',
//         '63dc9484e169fb70be48ad30',
//       ],
//       category: 'Materia Indisciplinar',
//       createdAt: '2023-02-02T21:31:08.224Z',
//       id: '63dc2b9cdc762eb81d6da247',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/dhnqhwkakayfdrtwiyx9.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/evur1xy3bu8kbe05nddp.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:08.463Z',
//       id: '63dc2b9cdc762eb81d6da24d',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/dxgb9fcg3vldgeftwupu.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/n4agdzk35vq0lzee9mzf.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:08.475Z',
//       id: '63dc2b9cdc762eb81d6da24f',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/gjbccavllksifxqc97ur.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/tkdsmohvxpw2neryeyik.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:08.479Z',
//       id: '63dc2b9cdc762eb81d6da251',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/ry4qzvm2igcklnho9pme.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/v1hhreb0tpmuevdhnil1.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: ['63dc95b1e169fb70be48adfa'],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:08.756Z',
//       id: '63dc2b9cdc762eb81d6da259',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/bfzwzaumpuhwiqfclm9v.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/gbqgfqprnnnvcdanmtcw.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:08.764Z',
//       id: '63dc2b9cdc762eb81d6da25b',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/pn5zowhbzw551muerpuc.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/ud0kd9jkkdcrzp70yibq.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: ['63dee27862505662a2934952'],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:08.767Z',
//       id: '63dc2b9cdc762eb81d6da25d',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373470/n6lbuztdenbicznyunqd.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373472/c6a6qpz4dzi7vbf9nnt5.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:12.764Z',
//       id: '63dc2ba0dc762eb81d6da263',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373472/pqkk7ngtsglmeqkf7c57.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373473/ynyacs4btsi0qdj1w37k.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:14.668Z',
//       id: '63dc2ba2dc762eb81d6da267',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373474/udsfq9oeliktw4dqdueo.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373475/shppvivvy2n3jg7gayp0.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:16.477Z',
//       id: '63dc2ba4dc762eb81d6da26c',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373474/zqvjs1kxlohnr7wkw2pt.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373475/aurzje7uhaothdbmqfsw.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:16.570Z',
//       id: '63dc2ba4dc762eb81d6da26e',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373475/oiri6tusurfu0aaxlniy.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373476/ex8vzd1xslbhl3rkvnzf.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:17.109Z',
//       id: '63dc2ba5dc762eb81d6da274',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373475/iw0ibjjdlvslcobbwqd4.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373476/bumx9q7nt8toly9blzbu.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:17.123Z',
//       id: '63dc2ba5dc762eb81d6da276',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373475/y3demaqvjzmtvjgtfwul.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373476/pq62jlh641qqd39ehtbj.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:17.230Z',
//       id: '63dc2ba5dc762eb81d6da27b',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373475/rq9lq6y4gectm0dblq8q.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373476/r0fi6dimqgyfh6ghv7qc.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:17.283Z',
//       id: '63dc2ba5dc762eb81d6da27f',
//     },
//     {
//       title: 'prueba 1',
//       description: 'probando form',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373475/fcmxt4si20k75fugbfrq.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373477/fplngsvaxabgwqzlvnhc.jpg',
//       author: 'vane',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'vancig88@gmail.com',
//         id: '63dc0cd7144eda05175d494b',
//       },
//       comment: [],
//       category: 'Estilos De Vida, Aficiones Y Ocio',
//       createdAt: '2023-02-02T21:31:17.391Z',
//       id: '63dc2ba5dc762eb81d6da283',
//     },
//     {
//       title: 'El Principito',
//       description:
//         'El principito es una narración corta del escritor francés Antoine de Saint-Exupéry. La historia se centra en un pequeño príncipe que realiza una travesía por el universo. En este viaje descubre la extraña forma en que los adultos ven la vida y comprende el valor del amor y la amistad.',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675401998/jzumediwauugpvxkqkyb.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675401999/o6g4olsec39oze9csvfs.jpg',
//       author: 'Antoine de Saint-Exupéry',
//       report: 0,
//       available: true,
//       subscription: 'free',
//       user: {
//         username: 'daniejuegos073@gmail.com',
//         id: '63dc4163a76ef03de440257c',
//       },
//       comment: ['63deda8c62505662a29340ee'],
//       category: 'Ficción',
//       createdAt: '2023-02-03T05:26:39.971Z',
//       id: '63dc9b0fdada9a220e04552e',
//     },
//     {
//       title: 'El fantasma de la ópera',
//       description:
//         'El extraordinario libro de Gastón Leroux, un versátil escritor francés apasionado por el teatro, El fantasma de la ópera, fue publicado en 1910. La novela está ambientada en París del siglo XIX, en la Ópera Garnier, un edificio lujoso construido sobre un lago subterráneo. El mismo Leroux declaró que la historia había sido inspirada tras una visita a los subterráneos de la Ópera de París. En esos sótanos llenos de laberintos y en el misterioso lago había restos históricos de la guerra franco-prusa, cuando el edificio fue ocupado como prisión.',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675431460/ypb0fjfdihgvp9wbqmmr.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675431461/l0oqhdsh5kviizamawzo.jpg',
//       author: 'Gastón Leroux',
//       report: 0,
//       available: true,
//       subscription: 'free',
//       user: {
//         username: 'slaawmedina14@gmail.com',
//         id: '63dbec6afca075e279ff35d2',
//       },
//       comment: [],
//       category: 'Ficción',
//       createdAt: '2023-02-03T13:37:41.595Z',
//       id: '63dd0e25a35e12d7c128a064',
//     },
//     {
//       title: 'El fantasma de la opera',
//       description:
//         'El extraordinario libro de Gastón Leroux, un versátil escritor francés apasionado por el teatro, El fantasma de la ópera, fue publicado en 1910. La novela está ambientada en París del siglo XIX, en la Ópera Garnier, un edificio lujoso construido sobre un lago subterráneo. El mismo Leroux declaró que la historia había sido inspirada tras una visita a los subterráneos de la Ópera de París. En esos sótanos llenos de laberintos y en el misterioso lago había restos históricos de la guerra franco-prusa, cuando el edificio fue ocupado como prisión.',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675432240/t1xzf87zcz9esnp5uk6y.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675432242/xxgpzqse6xahcfexl0vm.jpg',
//       author: 'Gastón Leroux',
//       report: 0,
//       available: true,
//       subscription: 'free',
//       user: {
//         username: 'slaawmedina14@gmail.com',
//         id: '63dbec6afca075e279ff35d2',
//       },
//       comment: [],
//       category: 'Ficción',
//       createdAt: '2023-02-03T13:50:43.125Z',
//       id: '63dd1133a35e12d7c128a2c4',
//     },
//     {
//       title: 'Los lanzallamas',
//       description:
//         'Tercera novela del autor y dramaturgo Roberto Arlt y precedida por Los siete locos, Los lanzallamas fue editada en 1931, y actualmente se encuentra disponible en formato digital PDF para su descarga al final de esta reseña. Constituye, junto con su primera parte, una misma novela debido a su continuidad argumental que es, para algunos, en ocasiones paralela. En esta segunda parte, se retoma la historia iniciada en Los siete locos. Los lanzallamas inicia con un encuentro entre la coja y el Astrólogo, quien revela que está castrado; ambos personajes ya habían aparecido en la primera parte. En Los lanzallamas persisten los mismos conflictos. Por un lado, el astrólogo y sus deseos casi desesperados de una revolución que cambie de una vez y para siempre la sociedad en que vive, y Remo, que permanece en lucha con su alma tormentosa. El rufián melancólico es asesinado, y la ex esposa de Erdosain, Elsa, que había huido con un capitán, lo abandona y se recluye en un convento. Erdosain abandona su hogar y se refugia en una pensión. Con la llegada a la pensión aparece un nuevo personaje, la Bizca, con quien termina involucrándose de manera íntima; esto vendrá a significar el nivel más alto de humillación para el atormentado Erdosain.',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675432921/ssrbrvcyivehqfnf2ukw.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675432922/gnqb7bosnu9podxuk9pa.jpg',
//       author: 'Roberto Arlt',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'slaawmedina14@gmail.com',
//         id: '63dbec6afca075e279ff35d2',
//       },
//       comment: [],
//       category: 'Ciencias De La Tierra Y Medioambiente',
//       createdAt: '2023-02-03T14:02:02.503Z',
//       id: '63dd13daa35e12d7c128a480',
//     },
//     {
//       title: 'Don Quijote de la Mancha ',
//       description:
//         'es la historia del ingenioso hidalgo que dio inmortalidad a la pluma de Miguel de Cervantes. Se cree que el texto más viejo de esta obra es de 1605, y que se publicó en Madrid por Juan de la Cuesta. Se considera a Don Quijote de la Mancha como la más genial creación humorística de todos los tiempos. Su máximo valor está en el juego de contrastes y perspectivas, en la benévola ironía con que Cervantes maneja unas criaturas ficticias ricas en facetas, que evolucionan y crecen ante nuestros ojos, lejos de los estereotipos cómicos al uso. Un adicto lector de novelas caballerescas sale por el mundo a librar sus propias y particularísimas batallas. Su inspiración y a quien piensa dedicar las victorias de su empresa es la bella Dulcinea del Toboso. Pero la celebridad del personaje Don Quijote no sería tanta si faltase Sancho Panza, entrañable escudero que, montado en su burro, lo acompaña en sus desopilantes aventuras.',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675433097/naozwy1uqa8syoalatdh.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675433098/itpl3q2kux0vlmhaqxlf.jpg',
//       author: 'Miguel de Cervantes',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'slaawmedina14@gmail.com',
//         id: '63dbec6afca075e279ff35d2',
//       },
//       comment: ['63dee24a62505662a2934918'],
//       category: 'Ficción',
//       createdAt: '2023-02-03T14:04:58.441Z',
//       id: '63dd148aa35e12d7c128a4f7',
//     },
//     {
//       title: 'asdasd',
//       description: 'asd',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675437225/ieulujrrgvle7kdosvrq.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675437225/wvvenfwjspjpkn039g9h.png',
//       author: 'asdasd',
//       report: 0,
//       available: true,
//       subscription: 'free',
//       user: {
//         username: 'dsebastianc397@gmail.com',
//         id: '63dd23f5a35e12d7c128af7d',
//       },
//       comment: [],
//       category: 'Filosofía Y Religión',
//       createdAt: '2023-02-03T15:13:46.262Z',
//       id: '63dd24aaa35e12d7c128b018',
//     },
//     {
//       title: 'asdasd',
//       description: 'asd',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675437227/of0na76rhy7q8crx2yva.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675437228/areujvno4tzelwks3xrt.png',
//       author: 'asdasd',
//       report: 0,
//       available: true,
//       subscription: 'free',
//       user: {
//         username: 'dsebastianc397@gmail.com',
//         id: '63dd23f5a35e12d7c128af7d',
//       },
//       comment: [],
//       category: 'Filosofía Y Religión',
//       createdAt: '2023-02-03T15:13:48.700Z',
//       id: '63dd24aca35e12d7c128b044',
//     },
//     {
//       title: 'asdasd',
//       description: 'asd',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675437228/ytwx3v6dse0wrrkk2v9w.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675437229/ij2lfkiphpgt1hpdiku2.png',
//       author: 'asdasd',
//       report: 0,
//       available: true,
//       subscription: 'free',
//       user: {
//         username: 'dsebastianc397@gmail.com',
//         id: '63dd23f5a35e12d7c128af7d',
//       },
//       comment: [],
//       category: 'Filosofía Y Religión',
//       createdAt: '2023-02-03T15:13:49.661Z',
//       id: '63dd24ada35e12d7c128b056',
//     },
//     {
//       title: 'asdasd',
//       description: 'asd',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675437228/irtmvapoccqgbrpl9pcg.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675437229/tpmmtxyyc4fdstivwhbd.png',
//       author: 'asdasd',
//       report: 0,
//       available: true,
//       subscription: 'free',
//       user: {
//         username: 'dsebastianc397@gmail.com',
//         id: '63dd23f5a35e12d7c128af7d',
//       },
//       comment: [],
//       category: 'Filosofía Y Religión',
//       createdAt: '2023-02-03T15:13:49.832Z',
//       id: '63dd24ada35e12d7c128b05a',
//     },
//     {
//       title: 'asdasd',
//       description: 'asdasd',
//       content:
//         'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675438929/qeygmkkivltef6dzntn6.pdf',
//       img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675438930/z8gjajglrcbeq9nfrk3v.jpg',
//       author: 'asdasd',
//       report: 0,
//       available: true,
//       subscription: 'premium',
//       user: {
//         username: 'slaawmedina14@gmail.com',
//         id: '63dbec6afca075e279ff35d2',
//       },
//       comment: [],
//       category: 'Ciencias De La Tierra Y Medioambiente',
//       createdAt: '2023-02-03T15:42:11.115Z',
//       id: '63dd2b53a35e12d7c128bdc7',
//     },
//   ])
// );

// import api from '../axios/axios.js';

// export async function anyComments(arr) {
//   const booksCommented = arr.filter(book => book.comment.length > 0);

//   const idsArray = booksCommented.map(b => b.id);

//   let booksWithComments = [];

//   for (let i = 0; i < idsArray.length; i++) {
//     const info = await api.get(`/book/${idsArray[i]}`);

//     let sum = 0;

//     for (let y = 0; y < info.data.comment.length; y++) {
//       if (!Number.isNaN(parseInt(info.data.comment[y].rate))) {
//         sum += parseInt(info.data.comment[y].rate);
//       }
//     }

//     let averageRating = Math.round(sum / info.data.comment.length);
//     let newObj = { ...info.data, rating: averageRating };
//     booksWithComments.push(newObj);
//   }

//   let booksSort = booksWithComments.sort((a, b) => {
//     return b.rating - a.rating;
//   });

//   let topFiveEightBooks = booksSort.slice(0, 8);

//   return topFiveEightBooks;
// }

// const arr = await anyComments([
//   {
//     title: 'La celestina',
//     description:
//       'Es una obra de abundantes escenarios, donde el amor protagoniza el argumento. Por la forma en que fue escrita, se debate entre los géneros literarios del drama y la novela, y a juzgar por sus diálogos y personajes da la impresión de que fue concebida con fines educativos.',
//     content:
//       'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675357546/ac3unao1mnbrdd9yyhuc.pdf',
//     img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675357547/pffji0fyzbaa4wi8v6wo.jpg',
//     author: 'Fernando de Rojas.',
//     report: 0,
//     available: true,
//     subscription: 'premium',
//     user: {
//       username: 'slaawmedina14@gmail.com',
//       id: '63dbec6afca075e279ff35d2',
//     },
//     comment: [
//       '63dc07ea3a7e7c87c8389141',
//       '63dc0e973a7e7c87c838914b',
//       '63dc734b1a40e87923afc980',
//       '63dd2861a35e12d7c128b479',
//       '63dd2876a35e12d7c128b483',
//       '63dd287fa35e12d7c128b48d',
//       '63dd3259a35e12d7c128c0b5',
//       '63dd3d98a35e12d7c128c3de',
//       '63dd401ca35e12d7c128c546',
//       '63dd4036a35e12d7c128c559',
//     ],
//     category: 'Arte',
//     createdAt: '2023-02-02T17:05:48.171Z',
//     id: '63dbed6cfca075e279ff35f4',
//   },
//   {
//     title: 'La metamorfosis',
//     description:
//       'En esta narración la trama gira en torno a Gregorio Samsa, un hombre corriente, un simple comerciante de telas, que vive con su familia y que un buen día se transforma en un gran insecto.',
//     content:
//       'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675372141/qea8od5weavhs02j36ex.pdf',
//     img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675372141/trrgnumgd1xfu837yr49.jpg',
//     author: 'Franz Kafka',
//     report: 0,
//     available: true,
//     subscription: 'free',
//     user: {
//       username: 'test@gmail.com',
//       id: '63dc1a77862829ec94e75f88',
//     },
//     comment: ['63dd16c6a35e12d7c128a745'],
//     category: 'Ciencias De La Tierra Y Medioambiente',
//     createdAt: '2023-02-02T21:09:02.032Z',
//     id: '63dc266edc762eb81d6da1f9',
//   },
//   {
//     title: 'prueba 1',
//     description: 'probando form',
//     content:
//       'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/rnyui52lqtpmaeoljher.pdf',
//     img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/hvrndcfkujhyxvhiduu6.jpg',
//     author: 'vane',
//     report: 0,
//     available: true,
//     subscription: 'premium',
//     user: {
//       username: 'vancig88@gmail.com',
//       id: '63dc0cd7144eda05175d494b',
//     },
//     comment: [
//       '63dc7312e169fb70be457198',
//       '63dc9693eb19857f1169deb0',
//       '63dc972ae1414d6ca4a2e5aa',
//       '63dd15bba35e12d7c128a6d1',
//       '63dd15ffa35e12d7c128a6de',
//       '63dd1619a35e12d7c128a6e8',
//       '63dd1667a35e12d7c128a6f9',
//       '63dd1683a35e12d7c128a706',
//       '63dd1694a35e12d7c128a713',
//     ],
//     category: 'Estilos De Vida, Aficiones Y Ocio',
//     createdAt: '2023-02-02T21:31:08.200Z',
//     id: '63dc2b9cdc762eb81d6da243',
//   },
//   {
//     title: 'prueba 1',
//     description: 'probando form',
//     content:
//       'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/ndja3v3knkexrtdd7iml.pdf',
//     img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/qw4fuxdzrx0lxdamvf79.jpg',
//     author: 'vane',
//     report: 0,
//     available: true,
//     subscription: 'premium',
//     user: {
//       username: 'vancig88@gmail.com',
//       id: '63dc0cd7144eda05175d494b',
//     },
//     comment: [
//       '63dc360a2c1225e2fd9413e6',
//       '63dc940ce169fb70be48ad1b',
//       '63dc9420e169fb70be48ad22',
//       '63dc945ce169fb70be48ad29',
//       '63dc9484e169fb70be48ad30',
//     ],
//     category: 'Estilos De Vida, Aficiones Y Ocio',
//     createdAt: '2023-02-02T21:31:08.224Z',
//     id: '63dc2b9cdc762eb81d6da247',
//   },
//   {
//     title: 'prueba 1',
//     description: 'probando form',
//     content:
//       'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/dhnqhwkakayfdrtwiyx9.pdf',
//     img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/evur1xy3bu8kbe05nddp.jpg',
//     author: 'vane',
//     report: 0,
//     available: true,
//     subscription: 'premium',
//     user: {
//       username: 'vancig88@gmail.com',
//       id: '63dc0cd7144eda05175d494b',
//     },
//     comment: [],
//     category: 'Estilos De Vida, Aficiones Y Ocio',
//     createdAt: '2023-02-02T21:31:08.463Z',
//     id: '63dc2b9cdc762eb81d6da24d',
//   },
//   {
//     title: 'prueba 1',
//     description: 'probando form',
//     content:
//       'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/dxgb9fcg3vldgeftwupu.pdf',
//     img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/n4agdzk35vq0lzee9mzf.jpg',
//     author: 'vane',
//     report: 0,
//     available: true,
//     subscription: 'premium',
//     user: {
//       username: 'vancig88@gmail.com',
//       id: '63dc0cd7144eda05175d494b',
//     },
//     comment: [],
//     category: 'Estilos De Vida, Aficiones Y Ocio',
//     createdAt: '2023-02-02T21:31:08.475Z',
//     id: '63dc2b9cdc762eb81d6da24f',
//   },
//   {
//     title: 'prueba 1',
//     description: 'probando form',
//     content:
//       'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/gjbccavllksifxqc97ur.pdf',
//     img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/tkdsmohvxpw2neryeyik.jpg',
//     author: 'vane',
//     report: 0,
//     available: true,
//     subscription: 'premium',
//     user: {
//       username: 'vancig88@gmail.com',
//       id: '63dc0cd7144eda05175d494b',
//     },
//     comment: [],
//     category: 'Estilos De Vida, Aficiones Y Ocio',
//     createdAt: '2023-02-02T21:31:08.479Z',
//     id: '63dc2b9cdc762eb81d6da251',
//   },
//   {
//     title: 'prueba 1',
//     description: 'probando form',
//     content:
//       'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/ry4qzvm2igcklnho9pme.pdf',
//     img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/v1hhreb0tpmuevdhnil1.jpg',
//     author: 'vane',
//     report: 0,
//     available: true,
//     subscription: 'premium',
//     user: {
//       username: 'vancig88@gmail.com',
//       id: '63dc0cd7144eda05175d494b',
//     },
//     comment: ['63dc95b1e169fb70be48adfa'],
//     category: 'Estilos De Vida, Aficiones Y Ocio',
//     createdAt: '2023-02-02T21:31:08.756Z',
//     id: '63dc2b9cdc762eb81d6da259',
//   },
//   {
//     title: 'prueba 1',
//     description: 'probando form',
//     content:
//       'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/bfzwzaumpuhwiqfclm9v.pdf',
//     img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/gbqgfqprnnnvcdanmtcw.jpg',
//     author: 'vane',
//     report: 0,
//     available: true,
//     subscription: 'premium',
//     user: {
//       username: 'vancig88@gmail.com',
//       id: '63dc0cd7144eda05175d494b',
//     },
//     comment: [],
//     category: 'Estilos De Vida, Aficiones Y Ocio',
//     createdAt: '2023-02-02T21:31:08.764Z',
//     id: '63dc2b9cdc762eb81d6da25b',
//   },
//   {
//     title: 'prueba 1',
//     description: 'probando form',
//     content:
//       'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373467/pn5zowhbzw551muerpuc.pdf',
//     img: 'https://res.cloudinary.com/ddzjbp2i1/image/upload/v1675373468/ud0kd9jkkdcrzp70yibq.jpg',
//     author: 'vane',
//     report: 0,
//     available: true,
//     subscription: 'premium',
//     user: {
//       username: 'vancig88@gmail.com',
//       id: '63dc0cd7144eda05175d494b',
//     },
//     comment: [],
//     category: 'Estilos De Vida, Aficiones Y Ocio',
//     createdAt: '2023-02-02T21:31:08.767Z',
//     id: '63dc2b9cdc762eb81d6da25d',
//   },
// ]);
// console.log(arr);
