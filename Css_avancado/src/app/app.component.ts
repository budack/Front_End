import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  valorpago: number | null = null;
  valorprod: number | null = null;
  total: number | null = null;
  troco() {
    const n1 = Number(this.valorpago) ?? 0;
    const n2 = Number(this.valorprod) ?? 0;
    if (n1 < n2) {
      this.total = null;
    }
    else {
      this.total = n1 - n2;
    }

  }
  valorkg: number | null = null;
  kgcomprado: number | null = null;
  totalkg: number | null = null;
  kilo() {
    const n1 = Number(this.valorkg) ?? 0;
    const n2 = Number(this.kgcomprado) ?? 0;

    this.totalkg = n1 * n2;
  }

  valorparareajuste: number | null = null;
  totalreajuste: number | null = null;
  reajuste() {
    const n1 = Number(this.valorparareajuste) ?? 0;
    const novoValor = n1 * 0.01;

    this.totalreajuste = n1 + novoValor;
  }
}
