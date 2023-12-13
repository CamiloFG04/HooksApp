import { todoReducer } from "../../src/08-UseReducer/todoReducer"

describe('Pruebas en todoReducer', () => { 

    const initialState = [{
        id: 1,
        description: 'Demo',
        done: false
    }]

    test('debe de regresar el estado inicial', () => { 
        const newState = todoReducer(initialState, {});
        expect(newState).toBe(initialState);
    })

    test('debe de agregar un todo', () => { 
        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer(initialState, action);
        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)

    })

    test('debe de eliminar un todo', () => { 
        const actionCreate = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }
        const actionDelete = {
            type: '[TODO] Remove Todo',
            payload: 2
        }

        const newStateCreate = todoReducer(initialState, actionCreate);
        expect(newStateCreate.length).toBe(2)

        
        const newState = todoReducer(initialState, actionDelete);
        expect(newState.length).toBe(1)
        expect(newState).not.toContain(actionCreate.payload)

    })

    test('debe de realizar el toggle de un todo', () => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }
        const newState = todoReducer(initialState, action);
        expect(newState[0].done).toBe(true);
    })
})