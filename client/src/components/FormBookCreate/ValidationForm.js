const validationsForm = (form) => {
  let errors = {}

  if (!form.title) {
    errors.title = 'the title field is required'
  }
  if (!form.description) {
    errors.description = 'the description field is required 😠'
  }
  if (!form.author) {
    errors.author = 'the author field is required'
  }
  if (!form.category) {
    errors.category = 'the category field is required'
  }

  return errors
}

export default validationsForm
