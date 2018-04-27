const wrongCredentialasErrorMsg = 'Usuario o contraseña incorrectos.';

// From: https://firebase.google.com/docs/reference/js/firebase.auth.Auth
const fireBaseErrors = [
  {
    code: 'auth/email-already-in-use',
    message: 'La dirección de correo electrónico no está disponible.'
  },
  {
    code: 'auth/invalid-email',
    message: 'Por favor ingresa una dirección de correo válida.'
  },
  {
    code: 'auth/operation-not-allowed',
    message: 'Ocurrió un error, por favor inténtalo de nuevo más tarde.'
  },
  {
    code: 'auth/weak-password',
    message: 'La contraseña debe contener al menos 6 caracteres.'
  },
  {
    code: 'auth/user-disabled',
    message: 'La cuenta ha sido deshabilitada por un administrador.'
  },
  {
    code: 'auth/user-not-found',
    message: 'El correo no está asociado a ningún usuario registrado.'
  },
  {
    code: 'auth/wrong-password',
    message: wrongCredentialasErrorMsg
  },
  {
    code: 'auth/email-already-in-use',
    message: 'La dirección de correo electrónico no está disponible.'
  },
  {
    code: 'auth/expired-action-code',
    message: 'El enlace de recuperación expiró.'
  },
  {
    code: 'auth/invalid-action-code',
    message: 'El enlace de recuperación no es válido.'
  }
];
const errors = {
  getErrorMessageForCode: code =>
    fireBaseErrors.find(error => error.code === code),
  emailNotVerified: {
    code: 'auth/email-not-verified',
    message: 'La cuenta no se ha activado por correo electrónico.'
  },
  userLoggedInError: {
    code: 'auth/user-signed-in',
    message: 'Cierra la sesión actual para continuar.'
  },
  internalError: {
    code: 'auth/internal-error',
    message: 'Ocurrió un error, por favor inténtalo de nuevo más tarde.'
  }
};

export default errors;
