import { Component, input } from '@angular/core';
import type { Project } from '../../../interfaces/Project';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss'
})
export class ProjectCardComponent {
  project = input.required<Project>();
}
