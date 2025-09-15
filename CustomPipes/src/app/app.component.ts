import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrencyConverterPipe } from './pipe/currency-converter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CurrencyConverterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  amount = 100;
}
