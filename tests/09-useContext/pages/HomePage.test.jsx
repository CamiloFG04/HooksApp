const { render, screen } = require("@testing-library/react")
const { HomePage } = require("../../../src/09-useContext/pages/HomePage")
const { UserContext } = require("../../../src/09-useContext/context/UserContext")

describe('Pruebas en HomePage', () => { 

    const user = {
        id: 1,
        name: 'Camilo'
    }

    test('Debe de mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe('null')
    })

    test('Debe de mostrar el componente con el usuario', () => { 
        render(
            <UserContext.Provider value={{user}}>
                <HomePage />
            </UserContext.Provider>
        )

        const preTag = screen.getByLabelText('pre')
        expect(preTag.innerHTML).toBe(JSON.stringify(user,null,3))
    })
})