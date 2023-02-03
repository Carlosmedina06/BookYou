export const validate = (user, available) => {
  const errors = {}

  if (user.name.length < 1) errors.name = 'Must enter a name'
  if (user.name.trim().length < 1) errors.name = 'Name cant be just spaces'
  if (!/^[A-Za-z\s]*$/.test(user.name)) errors.name = 'Valid name only includes letters and spaces'

  if (user.username.length < 1) errors.username = 'Username is required'

  if (!available) errors.email = 'Email is NOT available'
  if (user.email.trim().length < 1) errors.email = 'Email is required'

  if (user.password.length < 8) errors.password = 'Password should have at least 8 characters'

  return errors
}

export function check(user, allUsers) {
  if (typeof user.email !== '') {
    const exists = allUsers.filter(
      (el) => el.email.toLowerCase() === user.email.toLowerCase().trim(),
    )

    if (exists.length > 0) {
      return false
    } else {
      return true
    }
  }
}
