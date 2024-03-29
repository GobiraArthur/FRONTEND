import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicaoPesoComponent } from './edicao-peso.component';

describe('EdicaoPesoComponent', () => {
  let component: EdicaoPesoComponent;
  let fixture: ComponentFixture<EdicaoPesoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdicaoPesoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdicaoPesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
