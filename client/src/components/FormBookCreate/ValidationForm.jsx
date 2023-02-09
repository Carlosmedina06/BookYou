const validationsForm = (form) => {
  let caracteresDescription = /^.{1,500}$/
  let errors = {}

  if (!form.title) {
    errors.title = 'El  título es requerido'
  }

  if (!form.description) {
    errors.description = 'La descripción es requerida'
  } else if (!caracteresDescription.test(form.description.trim())) {
    errors.description = 'No puedo superar los 500 caracteres'
  }

  if (!form.author) {
    errors.author = 'El nombre del autor es requerido'
  }
  if (!form.category) {
    errors.category = 'La Categoría es requerida'
  }

  return errors
}

export default validationsForm
