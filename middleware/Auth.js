import FirebaseApp from './FirebaseApp';

class Auth {
  constructor() {
    // Initialize Firebase Auth
    this.auth = FirebaseApp.auth();
  }

  signUp = async (email, password) => {
    let user = this.auth.currentUser;
    if (user) {
      return {
        code: 'error/user-signed-in',
        message: 'Close the current user session before creating new account.',
        currentUser: user
      };
    }

    let signUpError = null;
    const res = await this.auth
      .createUserWithEmailAndPassword(email, password)
      .catch(error => {
        console.error('Sign Up failed:');
        console.error(error);
        signUpError = error;
      });

    if (signUpError) return signUpError;

    user = this.auth.currentUser;
    console.log('USER OBJECT ******************************************* ');
    console.log(user);
    await user.sendEmailVerification().catch(error => {
      console.log(error);
    });
    console.log(`Verification email sent to ${email}`);
    return user;
  };
}

export default Auth;
