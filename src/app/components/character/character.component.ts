import { Component, OnInit } from '@angular/core';
import { Character, StarWarsService } from '../../starwars.service';
import { R3BoundTarget } from '@angular/compiler';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  
  character: Character;
  

  constructor(private activatedRoute: ActivatedRoute,
    private router:Router, private StarWarsSvc: StarWarsService) { }

  ngOnInit() {

    this.StarWarsSvc.getCharacter(this.activatedRoute.snapshot.params.id)
      .then(result => {
        this.character = result;
        console.info('character: ', result)
      })
  }

  back() {
    this.router.navigate(['/people']);
  }
}
