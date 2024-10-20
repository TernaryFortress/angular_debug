import { Component } from '@angular/core';
import { CryptographyService } from 'services/cryptography.service'

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})

export class HomePageComponent {
  constructor(private cryptography: CryptographyService) {}
}
