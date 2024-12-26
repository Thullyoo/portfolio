import { Project } from './../../interfaces/Project';
import { Component, NgModule } from '@angular/core';
import { ProjectCardComponent } from './project-card/project-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-projects',
  standalone: true,
  imports: [ProjectCardComponent, CommonModule],
  templateUrl: './my-projects.component.html',
  styleUrl: './my-projects.component.scss'
})
export class MyProjectsComponent {
  projects: Project[] = [
    {
      url_image: "https://img.freepik.com/vetores-gratis/envelope-de-correio-com-1-alerta_78370-3334.jpg",
      tittle: "Email Microservice",
      description: "Microservice para envio de email identificando sucesso na criação de usuário, fazendo conexão com a outra API via RabbitMQ",
      link_code: "https://github.com/Thullyoo/email-microservice"
    },
    {
      url_image: "https://miro.medium.com/v2/resize:fit:1000/0*LZoxeJWSPL4ft-vt.png",
      tittle: "User Microservice",
      description: "Microservice para registro de usuário, fazendo conexão com a outra API via RabbitMQ",
      link_code: "https://github.com/Thullyoo/user-microservice"
    },
    {
      url_image: "https://github.com/Thullyoo/catalog-api-java-spring-aws/raw/master/dg.drawio.png",
      tittle: "Catalog AWS",
      description: "API de cadastro e de gerenciamento de catalogo de fast-food utilizando ferramentas Spring e da aws. Inspirado no desafio Anota Ai",
      link_code: "https://github.com/Thullyoo/catalog-api-java-spring-aws"
    },
    {
      url_image: "https://img.odcdn.com.br/cdn-cgi/image/width=1200,height=1200,fit=cover/wp-content/uploads/2024/05/twitter-x.jpg",
      tittle: "Twitter Back Clone",
      description: "Este é um projeto de API REST para um sistema de criação de Tweets e gerenciamento de usuários, inspirado no Twitter.",
      link_code: "https://github.com/Thullyoo/twitter-clone-backend-java-spring-boot.git"
    },
    {
      url_image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/PicPay_Logogrande.png",
      tittle: "Payment simplified",
      description: "Este é um projeto Java Spring boot, que consiste em uma API para autorização de transações, peguei do desafio do PicPay.",
      link_code: "https://github.com/Thullyoo/sistema-de-pagamento-simplificado"
    },
    {
      url_image: "https://cdn-icons-png.flaticon.com/512/8297/8297354.png",
      tittle: "Notification service",
      description: "Microservice para gerenciar e enviar notificações por e-mail.",
      link_code: "https://github.com/Thullyoo/notification-email-service"
    }
  ]

  selectedProject = this.projects.length / 2;

  next() {
    if (this.selectedProject == 0 || this.selectedProject == (this.projects.length - 1)) {
      return
    }
    this.selectedProject += 1;
  }

  back() {
    if (this.selectedProject == 0 || this.selectedProject == (this.projects.length - 1)) {
      return
    }
    this.selectedProject -= 1;
  }


}
