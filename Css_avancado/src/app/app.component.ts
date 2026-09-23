import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  valorPago = 0;
  precoProduto = 0;
  resultadoTroco: number | null = null;

  calcularTroco(): number {
    const n1 = Number(this.valorPago) ?? 0;
    const n2 = Number(this.precoProduto) ?? 0;

    return this.resultadoTroco = n1 - n2;

  };

  precoQuilo = 0;
  quantidadeQuilo = 0;
  resultadoQuilo: number | null = null;

  valorPorPeso(): number {
    const n1 = Number(this.precoQuilo) ?? 0;
    const n2 = Number(this.quantidadeQuilo) ?? 0;
    return this.resultadoQuilo = n1 * n2;
  }
}