import { Component, OnInit } from '@angular/core';
import { Biography } from '../../models/biography.model';
import { CommonModule } from '@angular/common';
import { BiographyService } from '../../services/biography.service';

@Component({
  selector: 'app-biography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.css'
})
export class BiographyComponent implements OnInit {
  biographys: Biography[] = []

  constructor(private biographyService: BiographyService) { }

  ngOnInit(): void {
    this.biographyService.getBiographys().subscribe((data) => {
      this.biographys = data;
    })
  }
}
