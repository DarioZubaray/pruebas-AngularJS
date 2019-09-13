import { mensaje } from './string';


describe('Puebas de string', () => {

  it('Debe de regresar un string', () => {
    const respuesta = mensaje('Dario');
    expect(typeof respuesta).toBe('string');
  });
  it('Debe de retornar un saludo con el nombre enviado', () => {
    const nombre = 'Dario';
    const respuesta = mensaje(nombre);
    expect(respuesta).toContain(nombre);
  });

});
