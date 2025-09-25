import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTwo } from './project-two';

describe('ProjectTwo', () => {
  let component: ProjectTwo;
  let fixture: ComponentFixture<ProjectTwo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTwo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectTwo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
