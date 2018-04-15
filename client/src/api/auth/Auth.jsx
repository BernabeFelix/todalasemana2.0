import FirebaseApp from './FirebaseApp';
import { signInUrl } from '../../routes';
import errors from './errors';

class Auth {
  static auth = FirebaseApp.auth();

  // TODO: take from settings.json at root from branch ps/shares
  continueUrlHome = 'http://localhost:8080';

  signInUrl = `${this.continueUrlHome}/${signInUrl}`;

  signUp = async data => {
    let user = Auth.auth.currentUser;
    if (user) throw errors.userLoggedInError;

    // Create user in firebase
    const { email, password } = data;
    try {
      await Auth.auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      throw errors.getErrorMessageForCode(error.code);
    }

    user = Auth.auth.currentUser;
    try {
      const actionCodeSettings = { url: this.continueUrlHome };
      await user.sendEmailVerification(actionCodeSettings);
    } catch (error) {
      // Unknown error codes? didn't find in js reference, so rolling back and throwing generic error
      // Delete user
      user.delete();
      throw errors.internalError;
    }

    // TODO: Post user data to database...

    // Logout user, can't use the app if doesn't verify the email
    this.logout();

    const result = {
      code: 'ok',
      message: 'Te enviamos un correo de activación.'
    };
    return result;
  };

  login = async (email, password) => {
    // Check if there is a logged in user
    const user = await this.getCurrentUser();
    if (user) throw errors.userLoggedInError;

    // Login
    let res;
    try {
      res = await Auth.auth.signInAndRetrieveDataWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      throw errors.getErrorMessageForCode(error.code);
    }
    // Did user verified his email?
    if (!res.user.emailVerified) {
      await this.logout();
      throw errors.emailNotVerified;
    }
    // Maybe TODO: validate token against backend?
  };

  logout = async () => {
    // Documentation shows no possible errors for this call
    await Auth.auth.signOut();
  };

  sendRecoveryEmail = async email => {
    try {
      const actionCodeSettings = { url: this.continueUrlHome };
      await Auth.auth.sendPasswordResetEmail(email, actionCodeSettings);
    } catch (error) {
      // The following are not user facing errors, so will throw internal error...
      // auth/missing-android-pkg-name
      // auth/missing-continue-uri
      // auth/invalid-continue-uri
      // auth/unauthorized-continue-uri
      // auth/missing-ios-bundle-id
      let err = errors.getErrorMessageForCode(error.code);
      if (!err) err = { message: errors.internalError };
      throw err;
    }
  };

  getCurrentUser = async () => {
    const user = Auth.auth.currentUser;
    return user;
  };
}

export default Auth;
