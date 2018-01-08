export const KJONN_MANN = 'M';
export const KJONN_KVINNE = 'K';
export const BRUKERKODE_PASSASJER = 'P';
export const BRUKERKODE_FORER = 'F';

export const bevisliste = [
  {
    navn: 'Ola Nordmann',
    kommunenummer: '1111',
    bevisnummer: '123',
    fodselsaar: '65',
    kjonn: KJONN_MANN,
    brukerkode: BRUKERKODE_FORER,
    gyldigFra: '10.10.17',
    gyldigTil: '10.10.21',
  },
  {
    navn: 'Kari Nordmann',
    kommunenummer: '1111',
    bevisnummer: '123',
    fodselsaar: '65',
    kjonn: KJONN_KVINNE,
    brukerkode: BRUKERKODE_PASSASJER,
    gyldigFra: '09.08.15',
    gyldigTil: '01.01.18',
  }
];
