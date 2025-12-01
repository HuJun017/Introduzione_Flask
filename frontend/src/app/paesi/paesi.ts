import { Component, signal, OnInit } from '@angular/core';
import { PaesiService } from '../services/paesi-service';
import { CommonModule } from '@angular/common';

interface Paese {
  Paese: string;
  Capitale: string;
  Estensione_km2: number;
}

@Component({
  selector: 'app-paesi',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './paesi.html',
  styleUrls: ['./paesi.css']
})
export class Paesi implements OnInit {
  paesi = signal<Paese[]>([]);

  constructor(private paesiService: PaesiService) {}

  ngOnInit(): void {
    this.paesiService.getPaesi().subscribe((dati: Paese[]) => {
      this.paesi.set(dati);
    });
  }
}