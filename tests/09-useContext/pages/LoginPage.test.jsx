import { fireEvent, render, screen } from "@testing-library/react"
import { LoginPage } from "../../../src/09-useContext/pages/LoginPage"
import { UserContext } from "../../../src/09-useContext/context/UserContext"

describe('Pruebas en LoginPage', () => {
    test('Debe de mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        )
        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
    })

    test('debe de llamar al setUser cuando se hace click en el botón', () => { 

        const setUserMock = jest.fn()

        render(
            <UserContext.Provider value={{user: null,setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        )

        const setUserButton = screen.getByRole('button')
        fireEvent.click(setUserButton)
        expect(setUserMock).toHaveBeenCalledWith({id:123,name:'Camilo',email:'camilo@gmail.com'})
    })
})