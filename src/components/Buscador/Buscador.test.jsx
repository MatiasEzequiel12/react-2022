import { fireEvent, render, waitFor } from '@testing-library/react'
import Buscador from './Buscador';

const onBuscar = jest.fn();
const renderBuscador = () => {
    const component = render(<Buscador onBuscar={onBuscar} />);
    return component;
};

describe('<Buscador />', () => {
    test('Renderizar el componente.', async () => {
        const component = renderBuscador();
        expect(component.container).toBeInTheDocument();
    });
    
    test('No retorna onBuscar cuando no cumple ingreso de 3 caracteres y el usuario hace clic', async () => {
        const component = renderBuscador();
        const button = component.getByRole('button');
        // Debug
        fireEvent.click(button);
        expect(onBuscar).not.toBeCalled();
    });

    test('Retorna onBuscar cuando el usuario hace clic y cumple con mas de 3 caracteres ingresados', async () => {
        const component = renderBuscador();
        const button = component.getByRole('button');
        const input = component.getByRole('searchbox').querySelector('input');
        // Debug
        fireEvent.change(input, {target: {value: 'test'}});
        fireEvent.click(button);

        waitFor(() =>{
            expect(onBuscar).toBeCalledWith('test');
        });
    });

});