import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

        const nuevaLeyenda = 'Progreso de carga';
        component.leyenda = nuevaLeyenda;
        fixture.detectChanges();

        const debug = fixture.debugElement;
        const query = debug.query(By.css('h3'));
        const element = query.nativeElement;

        // const elem: HTMLElement = fixture.debugElement.query( By.css('h3')).nativeElement;

        expect(element.innerHTML).toContain(nuevaLeyenda);
    });

    it('Debe de mostrar en el input el valor de progreso', () => {
        component.cambiarValor(5);
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            const input = fixture.debugElement.query( By.css('input')).nativeElement;
            expect( input.value).toBe('55');
        });

    });

    it('debe incrementar/decremetnar con un click en el boton' , () => {
        const botones = fixture.debugElement.queryAll( By.css('button') );

        botones[0].triggerEventHandler('click', null);
        expect(component.progreso).toBe(45);

        botones[1].triggerEventHandler('click', null);
        expect(component.progreso).toBe(50);
    });

    it('debe de mostar el progreso con un click en el boton' , () => {
        const botones = fixture.debugElement.queryAll( By.css('button') );

        botones[0].triggerEventHandler('click', null);

        fixture.detectChanges();
        const element = fixture.debugElement.query( By.css('h3')).nativeElement;
        expect(element.innerHTML).toContain('45');

    });
});
