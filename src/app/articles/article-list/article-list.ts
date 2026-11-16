import { Component, signal } from '@angular/core';

import { ArticleCard } from '../article-card/article-card';
import { Article } from '../article.model';

@Component({
  imports: [ArticleCard],
  selector: 'app-article-list',
  styleUrl: './article-list.scss',
  templateUrl: './article-list.html',
})
export class ArticleList {
  articles = signal<Article[]>([
    {
      id: 1,
      title: 'Introduction à Angular',
      author: 'Marie Dubois',
      date: '2025-10-01',
      content:
        "Angular est un framework JavaScript puissant pour créer des applications web modernes. Il offre une structure robuste et des outils intégrés pour développer des applications évolutives. Dans cet article, nous explorons les bases d'Angular et comment démarrer votre premier projet.",
      excerpt: "Découvrez les fondamentaux d'Angular et comment créer votre première application.",
      imageUrl: 'articles/angular.jpg',
    },
    {
      id: 2,
      title: 'Les meilleures pratiques en développement web',
      author: 'Pierre Martin',
      date: '2025-10-05',
      content:
        "Le développement web moderne nécessite de suivre des pratiques éprouvées pour créer des applications performantes et maintenables. Cet article couvre les aspects essentiels : l'architecture propre, les tests, l'optimisation des performances, et la sécurité. Nous verrons également comment organiser son code de manière efficace.",
      excerpt: 'Un guide complet sur les pratiques essentielles du développement web moderne.',
      imageUrl: 'articles/bonnes-pratiques.jpg',
    },
    {
      id: 3,
      title: 'PrimeNG : Une bibliothèque de composants complète',
      author: 'Sophie Laurent',
      date: '2025-10-08',
      content:
        "PrimeNG est une collection riche de composants UI pour Angular. Avec plus de 80 composants, elle offre tout ce dont vous avez besoin pour créer des interfaces utilisateur professionnelles. De la navigation aux formulaires en passant par les graphiques, PrimeNG simplifie le développement d'applications Angular.",
      excerpt: 'Explorez la puissance de PrimeNG pour vos applications Angular.',
      imageUrl: 'articles/primeng.jpg',
    },
    {
      id: 4,
      title: 'TypeScript : Le superset de JavaScript',
      author: 'Luc Bernard',
      date: '2025-10-10',
      content:
        'TypeScript apporte le typage statique à JavaScript, permettant de détecter les erreurs plus tôt dans le processus de développement. Ce langage améliore la maintenabilité du code et facilite le refactoring. Découvrez comment TypeScript transforme votre expérience de développement JavaScript.',
      excerpt: 'Pourquoi TypeScript est devenu incontournable dans le développement moderne.',
      imageUrl: 'articles/typescript.jpg',
    },
    {
      id: 5,
      title: 'RxJS et la programmation réactive',
      author: 'Claire Petit',
      date: '2025-10-12',
      content:
        'RxJS est une bibliothèque pour la programmation réactive utilisant des Observables. Elle permet de gérer facilement les flux de données asynchrones dans vos applications Angular. Dans cet article, nous explorons les opérateurs essentiels et les patterns courants de RxJS.',
      excerpt: 'Maîtrisez la programmation réactive avec RxJS dans vos applications Angular.',
      imageUrl: 'articles/rxjs.jpg',
    },
  ]);
}
