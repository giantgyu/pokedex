import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PokemonComponent } from './pokemon/pokemon.component';
import { Pokemon } from '../../models/pokemon.model';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';

@Component({
  selector: 'app-team-info',
  imports: [PokemonComponent, AddPokemonComponent],
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.css',
})
export class TeamInfoComponent {
  @Input({ required: true }) name!: string;
  @Input({ required: true }) trainerId!: string;
  isAddPokemonVisible = false;

  pokemons: Pokemon[] = [
    // --- Brock (Rock-type) ---
    {
      id: 'p1',
      trainer: 'u1',
      name: 'Geodude',
      types: ['Rock', 'Ground'],
      pokedexEntry:
        'Commonly found near mountain trails and fields, it hardens its body by living among rocks.',
    },
    {
      id: 'p2',
      trainer: 'u1',
      name: 'Onix',
      types: ['Rock', 'Ground'],
      pokedexEntry:
        'As it grows, the stone portions of its body harden to become similar to black-colored diamonds.',
    },

    // --- Misty (Water-type) ---
    {
      id: 'p3',
      trainer: 'u2',
      name: 'Staryu',
      types: ['Water'],
      pokedexEntry:
        'If its body is torn, it can grow back if the red core remains.',
    },
    {
      id: 'p4',
      trainer: 'u2',
      name: 'Starmie',
      types: ['Water', 'Psychic'],
      pokedexEntry:
        'Its central core glows with the seven colors of the rainbow.',
    },
    {
      id: 'p5',
      trainer: 'u2',
      name: 'Goldeen',
      types: ['Water'],
      pokedexEntry:
        'Its tail fin billows like an elegant ballroom dress, giving it the nickname “Water Queen.”',
    },

    // --- Lt. Surge (Electric-type) ---
    {
      id: 'p6',
      trainer: 'u3',
      name: 'Voltorb',
      types: ['Electric'],
      pokedexEntry:
        'It is often mistaken for a Poké Ball, and it has zapped many people.',
    },
    {
      id: 'p7',
      trainer: 'u3',
      name: 'Pikachu',
      types: ['Electric'],
      pokedexEntry:
        'When several of these Pokémon gather, their electricity could build and cause lightning storms.',
    },
    {
      id: 'p8',
      trainer: 'u3',
      name: 'Raichu',
      types: ['Electric'],
      pokedexEntry:
        'Its long tail serves as a ground to protect itself from its own high-voltage power.',
    },

    // --- Erika (Grass-type) ---
    {
      id: 'p9',
      trainer: 'u4',
      name: 'Tangela',
      types: ['Grass'],
      pokedexEntry:
        'Its vines grow so long they obscure its face. It tangles prey in them to immobilize.',
    },
    {
      id: 'p10',
      trainer: 'u4',
      name: 'Weepinbell',
      types: ['Grass', 'Poison'],
      pokedexEntry:
        'It spits out poison powder to immobilize prey, then swallows it whole.',
    },
    {
      id: 'p11',
      trainer: 'u4',
      name: 'Victreebel',
      types: ['Grass', 'Poison'],
      pokedexEntry:
        'It lures prey close with its sweet aroma, then swallows them whole.',
    },
    {
      id: 'p12',
      trainer: 'u4',
      name: 'Vileplume',
      types: ['Grass', 'Poison'],
      pokedexEntry: 'The larger its petals, the more toxic pollen it contains.',
    },

    // --- Koga (Poison-type) ---
    {
      id: 'p13',
      trainer: 'u5',
      name: 'Koffing',
      types: ['Poison'],
      pokedexEntry:
        'Its body is full of toxic gases. It floats in the air and causes headaches with its fumes.',
    },
    {
      id: 'p14',
      trainer: 'u5',
      name: 'Muk',
      types: ['Poison'],
      pokedexEntry:
        'Thickly covered with a filthy, vile sludge. It is so toxic, even its footprints contain poison.',
    },
    {
      id: 'p15',
      trainer: 'u5',
      name: 'Weezing',
      types: ['Poison'],
      pokedexEntry:
        'When two Koffing fuse together, they become Weezing, a Pokémon that emits toxic gases from its multiple heads.',
    },

    // --- Sabrina (Psychic-type) ---
    {
      id: 'p16',
      trainer: 'u6',
      name: 'Kadabra',
      types: ['Psychic'],
      pokedexEntry:
        'Its brain emits strong alpha waves that can cause headaches.',
    },
    {
      id: 'p17',
      trainer: 'u6',
      name: 'Mr. Mime',
      types: ['Psychic', 'Fairy'],
      pokedexEntry:
        'If interrupted while it is miming, it will slap the offender with its broad hands.',
    },
    {
      id: 'p18',
      trainer: 'u6',
      name: 'Alakazam',
      types: ['Psychic'],
      pokedexEntry:
        'It has an IQ of over 5000 and can remember everything it experiences.',
    },
    {
      id: 'p19',
      trainer: 'u6',
      name: 'Venomoth',
      types: ['Bug', 'Poison'],
      pokedexEntry:
        'It scatters its powdery scales to immobilize prey and enemies alike.',
    },

    // --- Blaine (Fire-type) ---
    {
      id: 'p20',
      trainer: 'u7',
      name: 'Growlithe',
      types: ['Fire'],
      pokedexEntry:
        'Very protective of its territory, it will bark and bite to repel intruders.',
    },
    {
      id: 'p21',
      trainer: 'u7',
      name: 'Ponyta',
      types: ['Fire'],
      pokedexEntry:
        'Its hooves are 10 times harder than diamonds. It can trample anything completely flat in little time.',
    },
    {
      id: 'p22',
      trainer: 'u7',
      name: 'Rapidash',
      types: ['Fire'],
      pokedexEntry:
        'Very competitive, this Pokémon will chase anything that moves fast in hopes of racing it.',
    },
    {
      id: 'p23',
      trainer: 'u7',
      name: 'Arcanine',
      types: ['Fire'],
      pokedexEntry:
        'A legendary Pokémon in China. It is said to run 6,200 miles in a single day.',
    },
    {
      id: 'p24',
      trainer: 'u7',
      name: 'Magmar',
      types: ['Fire'],
      pokedexEntry:
        'Born in the spout of a volcano, its body is cloaked in flames.',
    },

    // --- Giovanni (Ground-type / Team Rocket boss) ---
    {
      id: 'p25',
      trainer: 'u8',
      name: 'Rhyhorn',
      types: ['Ground', 'Rock'],
      pokedexEntry:
        'It can run in a straight line through anything, but it has trouble turning due to its short legs.',
    },
    {
      id: 'p26',
      trainer: 'u8',
      name: 'Dugtrio',
      types: ['Ground'],
      pokedexEntry:
        'A team of Diglett triplets. It triggers huge earthquakes by burrowing 60 miles underground.',
    },
    {
      id: 'p27',
      trainer: 'u8',
      name: 'Nidoqueen',
      types: ['Poison', 'Ground'],
      pokedexEntry:
        'Its body is covered with hard scales. It uses its hefty bulk to execute powerful moves.',
    },
    {
      id: 'p28',
      trainer: 'u8',
      name: 'Nidoking',
      types: ['Poison', 'Ground'],
      pokedexEntry:
        'It uses its thick tail and super-strong muscles to slam foes and destroy obstacles.',
    },
    {
      id: 'p29',
      trainer: 'u8',
      name: 'Rhydon',
      types: ['Ground', 'Rock'],
      pokedexEntry:
        'Protected by an armor-like hide, it is capable of living in molten lava of 3,600°F.',
    },
  ];
  get challengedTrainerPokemons() {
    return this.pokemons.filter(
      (pokemon) => pokemon.trainer === this.trainerId
    );
  }

  onDeletePokemon(idToDelete: string) {
    alert('bro whyyy');
    this.pokemons = this.pokemons.filter(
      (pokemon) => pokemon.id !== idToDelete
    );
  }

  onStartAddPokemon() {
    this.isAddPokemonVisible = true;
  }
}
