export const script = [
  {
    id: 'CHOICES/intro',
    options: [{ label: 'Hola!', trigger: 'BOT/intro' }],
  },
  {
    id: 'BOT/intro',
    message: 'Hola amigo! cual es tu nombre',
    trigger: 'BOT/name',
  },
  {
    id: 'BOT/name',
    user: true,
    trigger: 'BOT/Hello',
  },
  {
    id: 'BOT/Hello',
    message: 'Hola {previousValue}, un gusto, que puedo hacer por ti?',
    trigger: 'CHOICES/menu',
  },
  {
    id: 'CHOICES/menu',
    options: [
      { label: 'Como registrarme?', trigger: 'BOT/registro' },
      { label: 'Como crear un libro?', trigger: 'BOT/libro' },
      { label: 'Como ser usuario premium?', trigger: 'BOT/premium' },
    ],
  },
  {
    id: 'BOT/registro',
    message:
      'Es facil solo debes dar click en el boton acceder, luego ir al boton registrarse y llenar el formulario',
    trigger: 'BOT/final',
  },
  {
    id: 'BOT/libro',
    message:
      "Podria ayudarte con eso, una vez logeado podes crear un libro llenando el formulario en la seccion 'CREAR LIBRO'",
    trigger: 'BOT/final',
  },
  {
    id: 'BOT/premium',
    message:
      'Veo que quieres subir de nivel, podes ser premium haciendo click en el boton de suscribirse',
    trigger: 'BOT/final',
  },
  {
    id: 'BOT/final',
    message: 'Podria ayudarte en algo mas?',
    trigger: 'CHOICES/menu',
  },
]
