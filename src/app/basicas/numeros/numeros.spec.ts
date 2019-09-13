import { incrementar } from './numeros';

describe('Puebas de numeros', () => {

  it('Debe de retornar 100 si el numero ingresado es mayor a 100', () => {
    const resp = incrementar(300);

    expect(resp).toBe(100);
  });
  it('Debe de retornar el numero mas 1 si el numero ingresado no es mayor a 100', () => {
    const resp = incrementar(50);

    expect(resp).toBe(51);
  });
});
