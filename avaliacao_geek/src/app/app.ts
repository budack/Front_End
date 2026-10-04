import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  busca = '';

  filmes = [
    {
      id: 1,
      titulo: 'Interestelar',
      capa: 'assets/interestelar.png',
      genero: 'Ficção científica',
      nota: 9.0,
      assistido: true,
      destaque: true
    },
    {
      id: 2,
      titulo: 'Batman',
      capa: 'assets/batman.png',
      genero: 'Ação',
      nota: 8.5,
      assistido: false,
      destaque: true
    },
    {
      id: 3,
      titulo: 'Homem-Aranha',
      capa: 'assets/miranha.png',
      genero: 'Ação',
      nota: 8.2,
      assistido: true,
      destaque: true
    },
    {
      id: 4,
      titulo: 'Homem-Aranha longe de casa',
      capa: 'assets/miranha_longe_casa.png',
      genero: 'Ação',
      nota: 8.2,
      assistido: true,
      destaque: true
    },
    {
      id: 5,
      titulo: 'Homem-Aranha sem volta pra casa',
      capa: 'assets/miranha_sem_volta.png',
      genero: 'Ação',
      nota: 8.2,
      assistido: true,
      destaque: true
    },
    {
      id: 6,
      titulo: 'Star Wars Episodio IV',
      capa: 'assets/Star_wars_IV.png',
      genero: 'Ação',
      nota: 8.2,
      assistido: true,
      destaque: true
    },
    {
      id: 7,
      titulo: 'Star Wars Episodio IV',
      capa: 'assets/Star_wars_IV.png',
      genero: 'Ação',
      nota: 8.2,
      assistido: true,
      destaque: false
    }
  ];

  get filmesExibidos() {
    const termoBusca = (this.busca ?? '').trim().toLowerCase();

    // Se não estiver pesquisando,
    // mostra somente os filmes principais
    if (!termoBusca) {
      return this.filmes.filter(filme => filme.destaque);
    }

    // Se estiver pesquisando,
    // procura pelo título
    return this.filmes.filter(filme =>
      filme.titulo.toLowerCase().includes(termoBusca)
    );
  }

  alternarAssistido(filme: any) {
    filme.assistido = !filme.assistido;
  }
}
