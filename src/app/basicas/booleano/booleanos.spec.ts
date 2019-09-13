import { usuarioLogueado } from './booleanos';


describe('Pruebas de booleanos', () => {

  it('debe de retornar true', () => {

    const resp = usuarioLogueado();

    expect(resp).toBeTruthy();
  });

});
