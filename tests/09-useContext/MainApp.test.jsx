import { render, screen } from "@testing-library/react"
import { RouterProvider, createMemoryRouter } from "react-router-dom"
import { routesConfig } from "../../src/09-useContext/routesConfig";

describe('Pruebas en MainApp', () => { 
    test('debe de mostrar el HomePage', () => { 
        const router = createMemoryRouter(routesConfig, {initialEntries: ['/'],});
 
        //renderizando Provider
        render(<RouterProvider router={router} />);
 
        //ubicando elemento h1
        const head = screen.getByRole('heading',{level:1}).innerHTML;
 
        expect(head).toContain('HomePage');
    })

    test("debe mostrar el LoginPage", () => {
        
        //especificando ruta a activar
        const router = createMemoryRouter(routesConfig, {
            initialEntries: ['/login'],
        });
 
         //renderizando Provider
        render(<RouterProvider router={router} />);
 
        //ubicando elemento h1
        const head = screen.getByRole('heading',{level:1}).innerHTML;
 
        //realizando la comparación
        expect(head).toContain('LoginPage');
 
    })
})