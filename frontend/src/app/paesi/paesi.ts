import { Component, signal } from '@angular/core';
import { PaesiService } from '../services/paesi-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paesi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paesi.html',
  styleUrls: ['./paesi.css']
})
export class Paesi {
  paesi = signal<any>([]);

  constructor(private paesiService: PaesiService) {}

  ngOnInit(): void {
    this.paesiService.getPaesi().subscribe((dati) => {
      this.paesi.set(dati);
    });
  }
}