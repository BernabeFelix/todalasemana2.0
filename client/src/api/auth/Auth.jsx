import FirebaseApp from './FirebaseApp';

const userLoggedInError = user => {
  const err = {
    code: 'auth/user-signed-in',
    message: 'Cierra la sesión actual para continuar.',
    currentUser: user
  };
  throw err;
};

let instance = null;

class Auth {
  constructor() {
    if (!instance) {
      // Initialize Firebase Auth
      this.auth = FirebaseApp.auth();
      instance = this;
    }

    return instance;
  }

  signUp = async data => {
    let user = this.auth.currentUser;
    if (user) userLoggedInError(user);

    // Create user in firebase
    const { email, password } = data;
    try {
      await this.auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      // TODO: Hanlde errors:
      // auth/email-already-in-use
      // auth/invalid-email
      // auth/operation-not-allowed
      // auth/weak-password
      throw error;
    }

    user = this.auth.currentUser;
    try {
      // TODO: change it to a env variable or setting...
      const actionCodeSettings = {
        url: 'http://localhost:8080/entrar',
        handleCodeInApp: true
      };
      await user.sendEmailVerification(actionCodeSettings);
      console.log(`Verification email sent to ${email}.`);
    } catch (error) {
      // Unknown error codes? didn't find in js reference
      // signUpError = 'auth/verification-email-not-sent';
      return error;
    }

    // Logout user, can't use the app if doesn't verify the email
    this.logout();

    // TODO: Post user data to database...

    const result = {
      code: 'ok',
      message: `Verification email sent to ${email}.`
    };
    return result;
  };

  login = async (email, password) => {
    // Check if there is a logged in user
    const user = await this.getCurrentUser();
    if (user) userLoggedInError(user);

    // Login
    try {
      const res = await this.auth.signInAndRetrieveDataWithEmailAndPassword(
        email,
        password
      );
      // Did user verified his email?
      if (!res.user.emailVerified) {
        await this.logout();
        const err = {
          code: 'auth/email-not-verified',
          message: 'La cuenta no se ha activado por correo electrónico.',
          currentUser: user
        };
        throw err;
      }
      // TODO: validate token against backend?
      // user = this.auth.currentUser;
      // const token = user.getIdToken();

      return res;
    } catch (error) {
      // TODO: Handle possible errors, here or in caller?:
      // auth/invalid-email
      // auth/user-disabled
      // auth/user-not-found
      // auth/wrong-password
      throw error;
    }
  };

  logout = async () => {
    // Documentation shows no possible errors for this call
    await this.auth.signOut();
  };

  getCurrentUser = async () => {
    // Doesn't work from Header.jsx??
    const user = this.auth.currentUser;
    return user;
  };
}

export default Auth;
