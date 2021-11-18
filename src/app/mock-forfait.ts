export interface IForfaits {
  destination: string;
  villeDepart: string;
  hotel: {
    nom: string;
    coordonnees: string;
    nombreEtoiles: number;
    nombreChambres: number;
    caracteristiques: string[];
  };
  dateDepart: Date;
  dateRetour: Date;
  duree: number;
  prix: number;
  rabais: number;
  vedette: boolean;
}

let dureeVoyage = function (dateDepart: string, dateRetour: string): number {
  let date1 = new Date(dateDepart);
  let date2 = new Date(dateRetour);
  let timeInMilisec: number = date2.getTime() - date1.getTime();
  let daysBetweenDates: number = Math.ceil(
    timeInMilisec / (1000 * 60 * 60 * 24)
  );
  return daysBetweenDates;
};

export const FORFAITS: IForfaits[] = [
  {
    destination: 'Mexique',
    villeDepart: 'Québec',
    hotel: {
      nom: 'Camino Real Aeropuerto',
      coordonnees: '999-000-2222',
      nombreEtoiles: 5,
      nombreChambres: 100,
      caracteristiques: ['Face à la plage', 'Ascenseur', 'Miniclub'],
    },
    dateDepart: new Date('2021-01-01'),
    dateRetour: new Date('2021-02-15'),
    duree: dureeVoyage('2021-01-01', '2021-01-15'),
    prix: 500,
    rabais: 100,
    vedette: true,
  },
  {
    destination: 'Guantanamo',
    villeDepart: 'Québec',
    hotel: {
      nom: 'Camp de Guantanamo',
      coordonnees: 'TOP SECRET',
      nombreEtoiles: 0,
      nombreChambres: 100,
      caracteristiques: [
        'Pour les amateurs de Paddle Board, le Waterboarding',
        'Ne manquer aucune minute de votre voyage avec notre programme de privation de sommeil forcée',
        'Relaxation total, grâce à la Privation sensorielle permanente',
      ],
    },
    dateDepart: new Date('2021-01-01'),
    dateRetour: new Date('2021-02-15'),
    duree: dureeVoyage('2021-01-01', '2021-01-15'),
    prix: 500,
    rabais: 100,
    vedette: true,
  },
  {
    destination: 'Sinaloa',
    villeDepart: 'Québec',
    hotel: {
      nom: 'Sinaloa Cartel Casa',
      coordonnees: '666-666-6666',
      nombreEtoiles: 5,
      nombreChambres: 100,
      caracteristiques: [
        'Ski dans la poudreuse',
        'Chasse de gibiers aux M16',
        'Maison Luxueuse',
      ],
    },
    dateDepart: new Date('2021-01-01'),
    dateRetour: new Date('2021-02-08'),
    duree: dureeVoyage('2021-01-01', '2021-01-08'),
    prix: 500,
    rabais: 100,
    vedette: true,
  },
  {
    destination: 'Bogota',
    villeDepart: 'Toronto',
    hotel: {
      nom: 'La Modelo',
      coordonnees: '000-456-7890',
      nombreEtoiles: 1,
      nombreChambres: 100,
      caracteristiques: [
        'Dégustation alcool artisanaux',
        'Combats extrêmes',
        'Voisins de chambre particulièrement affectueux',
      ],
    },
    dateDepart: new Date('2021-01-01'),
    dateRetour: new Date('2021-02-15'),
    duree: dureeVoyage('2021-01-01', '2021-01-15'),
    prix: 500,
    rabais: 100,
    vedette: true,
  },
  {
    destination: 'Bolivie',
    villeDepart: 'Dorval',
    hotel: {
      nom: 'San Pedro',
      coordonnees: '289-999-7890',
      nombreEtoiles: 2,
      nombreChambres: 100,
      caracteristiques: [
        'Immersion culturel',
        'Chambre partagé style auberge de jeunesse',
        'Cours de création de couteaux artisanaux',
      ],
    },
    dateDepart: new Date('2021-01-01'),
    dateRetour: new Date('2021-02-15'),
    duree: dureeVoyage('2021-01-01', '2021-01-15'),
    prix: 500,
    rabais: 100,
    vedette: true,
  },
  {
    destination: 'Mexique',
    villeDepart: 'Mirabel',
    hotel: {
      nom: 'Tijuana Cartel',
      coordonnees: '566-999-7890',
      nombreEtoiles: 5,
      nombreChambres: 100,
      caracteristiques: [
        'Voyage orientation',
        'Salaires compétitifs',
        'Environnement stimulant',
        'Possibilités emplois et séjours permanents',
      ],
    },
    dateDepart: new Date('2021-01-01'),
    dateRetour: new Date('2021-02-15'),
    duree: dureeVoyage('2021-01-01', '2021-01-15'),
    prix: 500,
    rabais: 100,
    vedette: true,
  },
];
