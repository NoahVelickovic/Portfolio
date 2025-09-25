import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectThree } from './project-three';

describe('ProjectThree', () => {
  let component: ProjectThree;
  let fixture: ComponentFixture<ProjectThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectThree]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectThree);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
