import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerodetailComponent } from './herodetail.component';

describe('HerodetailComponent', () => {
  let component: HerodetailComponent;
  let fixture: ComponentFixture<HerodetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerodetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HerodetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
