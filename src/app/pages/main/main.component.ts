import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, AboutMeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent{
 
}
