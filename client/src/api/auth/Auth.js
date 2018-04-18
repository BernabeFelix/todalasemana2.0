import FirebaseApp from './FirebaseApp';
import errors from './errors';

let instance = null;

class Auth {
  // todo: refactor this to be static class properties
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
    if (user) throw errors.userLoggedInError;

    // Create user in firebase
    const { email, password } = data;
    try {
      await this.auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw errors.getErrorMessageForCode(error.code);
    }

    user = this.auth.currentUser;
    try {
      // TODO: change it to a env variable or setting...
      const actionCodeSettings = {
        url: 'http://localhost:8080/entrar',
        handleCodeInApp: true
      };
      await user.sendEmailVerification(actionCodeSettings);
    } catch (error) {
      // Unknown error codes? didn't find in js reference, so rolling back and throwing generic error
      // Delete user
      user.delete();
      throw errors.internalError;
    }

    // Logout user, can't use the app if doesn't verify the email
    this.logout();

    // TODO: Post user data to database...

    const result = {
      code: 'ok',
      message: `Hemos enviado un correo de activación a '${email}'.`
    };
    return result;
  };

  login = async (email, password) => {
    // Check if there is a logged in user
    const user = await this.getCurrentUser();
    if (user) throw errors.userLoggedInError;

    // Login
    try {
      const res = await this.auth.signInAndRetrieveDataWithEmailAndPassword(
        email,
        password
      );
      // Did user verified his email?
      if (!res.user.emailVerified) {
        await this.logout();
        throw errors.emailNotVerified;
      }
      // Maybe TODO: validate token against backend?
      // user = this.auth.currentUser;
      // return user.getIdToken();;
    } catch (error) {
      throw errors.getErrorMessageForCode(error.code);
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
