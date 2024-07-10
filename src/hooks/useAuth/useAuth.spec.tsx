import { renderHook, act } from "@testing-library/react"
import useAuth from "./useAuth"

/*
logout();
login({ login, password }) 
    -> void
    -> error
;
return
    -> user
    -> isAuthenticated
    -> login
    -> logout
*/

describe('useAuth', () => {

    it('shoud returns default values', () => {
        const { result } = renderHook(() => useAuth())
        
        // retorna usuário nulo
        expect(result.current.user).toBe(null)
        // que não esteja autenticado
        expect(result.current.isAuthenticated).toBe(false)
        // espera que as funções estejam presentes
        expect(typeof result.current.login).toBe('function')
        expect(typeof result.current.logout).toBe('function')
    })

    it('shoud isAuthenticated to be false and user to be null when LOGOUT was called', () => {
        const { result } = renderHook(() => useAuth())

        // executa a função logout
        act(() => {
            result.current.logout()
        })

        expect(result.current.user).toBe(null)
        expect(result.current.isAuthenticated).toBe(false)
    })
    
    it('shoud isAuthenticated to be true and user contains complete infos when LOGIN was called correctly', () => {
        const { result } = renderHook(() => useAuth())

        // executa a função login
        act(() => {
            result.current.login({ 
                login: 'email@test.com',
                password: 'password'
            })
        })

        expect(result.current.user).toMatchObject({
            name: 'Jhon',
            permissions: ['all'],
            isAdmin: true,
            token: 'token'
        })
        expect(result.current.isAuthenticated).toBe(true)
    })
})