import { Component } from '@angular/core';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  loginDescription = "Developed with Python and Flask, this authentication system employs SQLite for efficient data management. Additionally, it utilizes Jinja templating for dynamic user interfaces.";
  twDatabaseDescriprion = 
  "Constructed through MySQL and MySQL Workbench, this project mirrors Twitter's database, offering efficient data storage and management for enhanced functionality."
  gifsDescription = "Crafted with Angular, Typescript, and Bootstrap, this project integrates the Giphy API to dynamically showcase GIFs on screen, delivering an engaging user experience.";
  portfolioDescription = "Designed using Angular, Typescript, and Bootstrap, this portfolio serves as a showcase of my skills and expertise, aimed at introducing myself and highlighting my capabilities.";
  countriesDescription = "Web application crafted with Angular, TypeScript, and Bootstrap, offering users real-time insights into diverse countries worldwide. It utilizes an API containing country information.";
  mergerDescription = "Developed in Python, this project utilizes a PDF manipulation library to seamlessly merge multiple PDF files. Users can combine files into a single document, streamlining PDF management."
}
