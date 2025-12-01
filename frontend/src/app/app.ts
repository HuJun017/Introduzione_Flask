import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlaskService } from './services/flask-service';
import { Paesi } from './paesi/paesi';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Paesi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  profilo = signal<any>({});

  constructor(private flaskService: FlaskService) {}

  ngOnInit(): void {
    this.flaskService.getProfilo().subscribe((dati) => {
      this.profilo.set(dati);
    });
  }
}
