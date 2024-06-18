import { createContext, useContext, useState } from 'react';

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      api.defaults.headers.authorization = `bearer ${token}`;
      setData({ user, data });
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else 'Não foi possivel entrar.';
    }
  }

  return <AuthContext.Provider value={{ signIn, user: data.user }}>{children}</AuthContext.Provider>;
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
