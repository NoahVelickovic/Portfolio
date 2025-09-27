import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ProjectOne } from '../projects/project-one/project-one';
import { ProjectTwo } from '../projects/project-two/project-two';
import { ProjectThree } from '../projects/project-three/project-three';

@Component({
  selector: 'app-my-projects',
  imports: [TranslatePipe],
  templateUrl: './my-projects.html',
  styleUrl: './my-projects.scss'
})
export class MyProjects {

}
