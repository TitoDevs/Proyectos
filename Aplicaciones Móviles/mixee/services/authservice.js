import { auth } from './firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

const signInWithEmail = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

const signUpWithEmail = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

const signInWithGoogle = () => {
  // Lógica para iniciar sesión con Google
};

const signOut = () => {
  return auth.signOut();
};

export { signInWithEmail, signUpWithEmail, signInWithGoogle, signOut };
