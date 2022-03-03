import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'https://back.examswitch.online';

export const AuthContext = React.createContext({});

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
    let navigate = useNavigate();
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        error,
        login: (email, password) => {
          axios.post('https://finalexam.online/user/'+email+'/signin', {
            password: password,
          })
          .then(response => {
            const userResponse = {
              email: response.data.data.emailId,
              firstName: response.data.data.firstName,
              lastName: response.data.data.lastName,
              gender:response.data.data.gender,
            }
            setUser(userResponse);
            setError(null);
            navigate("/user")
          })
          .catch(error => {
            const key = Object.keys(error.response.data.errors)[0];
            setError(error.response.data.errors[key][0]);
          })
        },
        logout: () => {
          setUser(null)
          navigate('/login')
        }
      }}>
      {children}
    </AuthContext.Provider>
  );
}
