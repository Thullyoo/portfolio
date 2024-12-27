import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { MyProjectsComponent } from '../../components/my-projects/my-projects.component';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent, MyProjectsComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent{
 
}
