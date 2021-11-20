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
    rabais: 0,
    vedette: false,
  },
  {
    destination: 'Mexique',
    villeDepart: 'Québec',
    hotel: {
      nom: 'Turkoise',
      coordonnees: '456-392-2020',
      nombreEtoiles: 2,
      nombreChambres: 100,
      caracteristiques: ['Mini-Golf', 'Buffet', 'Miniclub'],
    },
    dateDepart: new Date('2021-01-01'),
    dateRetour: new Date('2021-02-15'),
    duree: dureeVoyage('2021-01-01', '2021-01-15'),
    prix: 500,
    rabais: 100,
    vedette: true,
  },
  {
    destination: 'République Dominicaine',
    villeDepart: 'Québec',
    hotel: {
      nom: 'Hotel Punta Cana',
      coordonnees: '405-663-6234',
      nombreEtoiles: 5,
      nombreChambres: 100,
      caracteristiques: [
        'Dégustation de rhum',
        'Snorkeling',
        'Promenade en bateau',
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
    destination: 'Cuba',
    villeDepart: 'Toronto',
    hotel: {
      nom: 'La Siguaraya',
      coordonnees: '000-456-7890',
      nombreEtoiles: 3,
      nombreChambres: 50,
      caracteristiques: [
        'Activités pour les enfants',
        'Danse en ligne',
        'Paysage pittoresque',
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
    destination: 'Cuba',
    villeDepart: 'Edmonton',
    hotel: {
      nom: 'Casa Las Espanolas',
      coordonnees: '289-999-7890',
      nombreEtoiles: 4,
      nombreChambres: 100,
      caracteristiques: [
        'Immersion culturel',
        'Cuisine local',
        'Pêche sportive et en haute mer',
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
    destination: 'Fidji',
    villeDepart: 'Mirabel',
    hotel: {
      nom: 'Fidji Marriott Resort Momi Bay',
      coordonnees: '566-999-7890',
      nombreEtoiles: 5,
      nombreChambres: 100,
      caracteristiques: [
        "Concerts",
        'Haute gastronomie',
        'Plongée sous-marine',

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
