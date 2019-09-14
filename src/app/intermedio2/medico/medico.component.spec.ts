import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';


describe('Medico component', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [MedicoComponent],
            providers: [MedicoService],
            imports: [HttpClientModule]
        });

        fixture = TestBed.createComponent(MedicoComponent);
        component = fixture.componentInstance;
    });

    it('Debe de crearse el componente', () => {

        expect(component).toBeTruthy();
    });

    it('Debe de retornar el nombrel medico', () => {

        const nombre = 'dario';

        const respuesta = component.saludarMedico(nombre);

        expect(respuesta).toContain(nombre);
    });
});
