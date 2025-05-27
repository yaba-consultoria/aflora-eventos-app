import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuseusComponent } from './museus.component';

describe('MuseusComponent', () => {
  let component: MuseusComponent;
  let fixture: ComponentFixture<MuseusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuseusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuseusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
