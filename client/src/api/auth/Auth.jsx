import FirebaseApp from './FirebaseApp';

class Auth {
  constructor() {
    // Initialize Firebase Auth
    this.auth = FirebaseApp.auth();
  }

  signUp = async data => {
    let user = this.auth.currentUser;
    if (user) {
      return {
        code: 'auth/user-signed-in',
        message: 'Close the current session before creating new account.',
        currentUser: user
      };
    }
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

    console.log(`Verification email sent to ${email}`);
    return user;
  };

  login = async (email, password) => {
    // Check if there is a logged in user
    const user = this.auth.currentUser;
    if (user) {
      Promise.reject(new Error('There is a user logged in already.'));
    }

    let loginError = null;

    const res = await this.auth
      .signInAndRetrieveDataWithEmailAndPassword(email, password)
      .catch(error => {
        // TODO: Handle possible errors, here or in caller?:
        // auth/invalid-email
        // auth/user-disabled
        // auth/user-not-found
        // auth/wrong-password
        loginError = error;
      });

    if (loginError) return loginError;

    if (!res.user.emailVerified) {
      return {
        code: 'auth/email-not-verified',
        message: 'The account is not activated. Please check your inbox.',
        currentUser: user
      };
    }

    return res;
  };

  logout = async () => {
    await this.auth.signOut();
  };
}

export default Auth;
