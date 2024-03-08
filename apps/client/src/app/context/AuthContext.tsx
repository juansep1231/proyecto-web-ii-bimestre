import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
  sendPasswordResetEmail,
  Auth,
} from 'firebase/auth';
import { auth } from '../../firebase';

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthContextType {
  signup: (email: string, password: string) => Promise<UserCredential>;
  login: (email: string, password: string) => Promise<void>;
  loginWithGoogle: () => Promise<UserCredential>; // Modificado el tipo de retorno
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  user: Auth['currentUser'] | null;
  loading: boolean;
}

const authContext = createContext<AuthContextType>({
  signup: async () => {
    throw new Error('signup not implemented');
  },
  login: async () => {},
  loginWithGoogle: async () => {
    throw new Error('loginWithGoogle not implemented');
  }, // Inicializar como una función que arroja un error
  logout: async () => {},
  resetPassword: async () => {},
  user: null,
  loading: true,
});

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error('There is no Auth provider');
  return context;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Auth['currentUser'] | null>(null);
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email: string) =>
    sendPasswordResetEmail(auth, email);

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log({ currentUser });
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        loginWithGoogle,
        resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
