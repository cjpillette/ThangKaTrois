import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { TrainingService } from './trainings/training.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TrainingService]
})
export class AppComponent {
  constructor(meta: Meta, title: Title) {

    title.setTitle('Parapente Thank=g-Ka, baptême, vol biplace, stage en Cantal.');

    meta.addTags([
      { name: 'author',   content: 'Thang-ka'},
      { name: 'keywords', content: 'Ecole, bon cadeau, parapente, stage, Cantal, Auvergne, Puy Mary, Plomb du Cantal, Lioran, Aurillac, vol biplace, bapteme de l\'air, paragliging'},
      { name: 'description', content: 'Ecole de parapente dans le Cantal Auvergne France. Parapente et vol libre. Baptême de l\'air en parapente et Ulm pendulaire. Vols biplaces. Stage initiation, formation, progression au parapente, paramoteur, et cage de pilotage, Ulm pendulaire. Boutique parapente. Matériel neuf ou occasion. Ecole de parapente Thang-Ka en Auvergne-Puy Mary-Plomb du Cantal-Puy de Dôm. Cantal et Massif Central. Bon cadeau. Voyages. Paragliding school. Parapente school in de Cantal Auvergne Frankrijk.' }
    ]);

  }
}
