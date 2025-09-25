import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contact } from '../../sections/contact/contact';
import { Hero } from '../../sections/hero/hero';
import { MyProjects } from '../../sections/my-projects/my-projects';
import { MySkills } from '../../sections/my-skills/my-skills';
import { Recommendations } from '../../sections/recommendations/recommendations';
import { WhyMe } from '../../sections/why-me/why-me';

@Component({
  selector: 'app-home',
  imports: [ RouterOutlet, Contact, Hero, MyProjects, MySkills, Recommendations, WhyMe ],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
