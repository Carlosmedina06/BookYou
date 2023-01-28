const validationsForm = (form) => {
  let errors = {}

  if (!form.title) {
    errors.title = 'El  titulo es requerido'
  }
  if (!form.description) {
    errors.description = 'La descripcion es requerida 😠'
  }
  if (!form.author) {
    errors.author = 'El nombre del autor es requerido'
  }
  if (!form.category) {
    errors.category = 'La Categoria es requerida'
  }

  return errors
}

export default validationsForm
