import { Component } from '@angular/core';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  loginDescription = "Developed with Python and Flask, this authentication system employs SQLite for efficient data management, ensuring security and user convenience.";
  twDatabaseDescriprion = 
  "Constructed through MySQL and MySQL Workbench, this project mirrors Twitter's database, offering efficient data storage and management for enhanced functionality."
  gifsDescription = "Crafted with Angular, Typescript, and Bootstrap, this project integrates the Giphy API to dynamically showcase GIFs on screen, delivering an engaging user experience.";
  portfolioDescription = "Designed using Angular, Typescript, and Bootstrap, this portfolio serves as a showcase of my skills and expertise, aimed at introducing myself and highlighting my capabilities.";
  countriesDescription = "Web application crafted with Angular, TypeScript, and Bootstrap, offering users real-time insights into diverse countries worldwide. It utilizes an API containing country information.";
  portfolioSvelteDescription = "A sleek portfolio template created using Svelte, Bootstrap, and JavaScript. It elegantly showcases the user's work, providing a dynamic and visually appealing presentation."
}
