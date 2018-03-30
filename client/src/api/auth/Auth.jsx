import FirebaseApp from './FirebaseApp';

const userLogedInError = user => {
  const err = {
    code: 'auth/user-signed-in',
    message: 'Close the current session before creating new account.',
    currentUser: user
  };
  throw err;
};

class Auth {
  constructor() {
    // Initialize Firebase Auth
    this.auth = FirebaseApp.auth();
  }

  signUp = async data => {
    let user = this.auth.currentUser;
    if (user) userLogedInError(user);

    // Create user in firebase
    const { email, password } = data;
    let signUpError = null;
    await this.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        // TODO: Hanlde errors:
        // auth/email-already-in-use
        // auth/invalid-email
        // auth/operation-not-allowed
        // auth/weak-password
        signUpError = error;
      });

    if (signUpError) return signUpError;

    user = this.auth.currentUser;
    // Save user to database
    await user.sendEmailVerification().catch(error => {
      // Unknown error codes? didn't find in js reference
      // signUpError = 'auth/verification-email-not-sent';
      signUpError = error;
    });

    if (signUpError) return signUpError;

    // TODO: Post user data to database...
    console.log(`Verification email sent to ${email}.`);

    // Logout user, can't use the app if doesn't verify the email
    this.logout();
    const result = {
      code: 'ok',
      message: `Verification email sent to ${email}.`
    };
    return result;
  };

  login = async (email, password) => {
    // Check if there is a logged in user
    const user = this.auth.currentUser;
    if (user) userLogedInError(user);

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
          message: 'The account is not activated. Please check your inbox.',
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
}

export default Auth;
