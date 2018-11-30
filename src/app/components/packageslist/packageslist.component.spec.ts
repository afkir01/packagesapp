import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageslistComponent } from './packageslist.component';

describe('PackageslistComponent', () => {
  let component: PackageslistComponent;
  let fixture: ComponentFixture<PackageslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PackageslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
