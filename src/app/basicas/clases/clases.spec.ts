import { Jugador } from './clases';

describe('Pruebas de clases', () => {

  let jugador = new Jugador();

  beforeAll( () => {
    console.log('beforeAll');
  });
  beforeEach( () => {
    console.log('beforeEach');
    jugador = new Jugador();
  });
  afterEach( () => {
    console.log('afterEach');
  });
  afterAll( () => {
    console.log('afterAll');
  });

  it('Debe de retornar 80 de hp si recibe 20 de danio', () => {
    // const jugador = new Jugador();
    const resp = jugador.recibeDanio(20);
    expect(resp).toBe(80);
  });

  it('Debe de retornar 50 de hp si recibe 50 de danio', () => {
    const resp = jugador.recibeDanio(50);
    expect(resp).toBe(50);
  });

  it('Debe de retornar 0 de hp si recibe 100 de danio', () => {
    const resp = jugador.recibeDanio(100);
    expect(resp).toBe(0);
  });
});
