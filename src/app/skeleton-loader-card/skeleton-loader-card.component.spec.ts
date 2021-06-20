import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonLoaderCardComponent } from './skeleton-loader-card.component';

describe('SkeletonLoaderCardComponent', () => {
  let component: SkeletonLoaderCardComponent;
  let fixture: ComponentFixture<SkeletonLoaderCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonLoaderCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonLoaderCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
