import moongose from 'mongoose'

const BookSchema = new moongose.Schema({
  title: String,
  description: String,
  content: String,
  img: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  subscription: {
    type: String,
    enum: ['free', 'premium'],
    default: 'free',
  },
  user: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'User',
  },
  comment: [
    {
      type: moongose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
  category: {
    type: moongose.Schema.Types.ObjectId,
    ref: 'Category',
    enum: [
      'Arte',
      'Biografías, Literaturas Y Estudios Literarios',
      'Ciencias De La Tierra Y Medioambiente',
      'Ciencias Económicas Sobre Finanzas, Empresa Y Gestión',
      'Computación Y Tecnología De La Información',
      'Deportes Y Actividades De Ocio Al Aire Libre',
      'Derecho',
      'Estilos De Vida, Aficiones Y Ocio',
      'Ficción',
      'Filosofía Y Religión',
      'Historia Y Arqueología',
      'Infantiles, Juveniles Y Didácticos',
      'Lenguaje Y Lingüística',
      'Matemáticas Y Ciencias',
      'Materia Indisciplinar',
      'Medicina, Enfermería Y Veterinaria',
      'Novelas Gráficas',
      'Salud, Relaciones Y Desarrollo Personal',
      'Sociedad Y Ciencias Sociales',
      'Tecnología, Ingeniería, Agricultura, Procesos Industriales',
      'Calificadores De Estilo',
      'Calificadores De Fines Educativos',
      'Calificadores De Interés',
      'Calificadores De Lugar',
      'Calificadores De Lengua',
      'Calificadores De Periodo De Tiempo',
    ],
    default: 'Arte',
  },
})

BookSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  },
})

const Book = moongose.model('Book', BookSchema)

export default Book
