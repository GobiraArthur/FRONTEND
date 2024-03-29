import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemSuinosComponent } from './listagem-suinos.component';

describe('ListagemSuinosComponent', () => {
  let component: ListagemSuinosComponent;
  let fixture: ComponentFixture<ListagemSuinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemSuinosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListagemSuinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
