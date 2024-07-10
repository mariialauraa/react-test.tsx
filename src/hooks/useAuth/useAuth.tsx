import { useState } from "react"

type UserProps = {
    name: string;
    permissions: string[];
    isAdmin: boolean;
    token: string;
}

type LoginParamsProps = {
    login: string;
    password: string;
}

const useAuth = () => {
    const [user, setUser] = useState<UserProps | null>(null)
    
    //const [isAuthenticated, setIsAuthenticated] = useState(false)
    const isAuthenticated = Boolean(user)

    const login = ({ login, password }: LoginParamsProps) => {
        // try ...catch
        // axios.post('/...', { login, password })

        const response = {
            name: 'Jhon',
            permissions: ['all'],
            isAdmin: true,
            token: 'token'
        }
        setUser(response)
    }

    const logout = () => {
        // remover os cookies
        // remover os dados do localStorage
        setUser(null)
    }

  return {
    user,
    isAuthenticated,
    login,
    logout
  }
}

export default useAuth