import { Component, inject, Renderer2, type AfterViewInit, type OnInit } from '@angular/core';
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
export class MainComponent implements OnInit, AfterViewInit{
    renderer = inject(Renderer2);

    ngOnInit(): void {
      this.createRain();
    }

    ngAfterViewInit(): void {
      this.observeScroll();
      this.adjustRainHeight();
      window.addEventListener('resize', () => this.adjustRainHeight());
    }

    createRain(): void {
      const rainContainer = document.querySelector('.rain') as HTMLElement;

      for (let i = 0; i < 100; i++) {
        const drop = this.renderer.createElement('div');
        this.renderer.addClass(drop, 'rain-drop');
        this.renderer.setStyle(drop, 'left', `${Math.random() * 100}vw`);
        this.renderer.setStyle(drop, 'animationDelay', `${Math.random() * 2}s`);
        this.renderer.setStyle(drop, 'animationDuration', `${1 + Math.random()}s`);
        this.renderer.appendChild(rainContainer, drop);
      }
    }

    adjustRainHeight(): void {
      const rainContainer = document.querySelector('.rain') as HTMLElement;
      rainContainer.style.height = `${document.body.scrollHeight}px`;
    }

    observeScroll(): void {
      const components = document.querySelectorAll('.animated-component');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            } else {
              entry.target.classList.remove('visible');
            }
          });
        },
        {
          threshold: [0.2, 0.5, 0.8],
        }
      );

      components.forEach((component) => {
        observer.observe(component);
      });
    }
}
