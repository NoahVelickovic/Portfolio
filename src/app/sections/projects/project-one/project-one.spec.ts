import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOne } from './project-one';

describe('ProjectOne', () => {
  let component: ProjectOne;
  let fixture: ComponentFixture<ProjectOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectOne);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
