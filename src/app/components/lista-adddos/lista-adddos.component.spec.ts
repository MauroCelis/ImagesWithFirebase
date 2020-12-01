import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAdddosComponent } from './lista-adddos.component';

describe('ListaAdddosComponent', () => {
  let component: ListaAdddosComponent;
  let fixture: ComponentFixture<ListaAdddosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAdddosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAdddosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
