import { Component, OnInit } from '@angular/core';
import { CharacterItem, StarWarsService } from "../../starwars.service";
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})

export class CharacterListComponent implements OnInit {

  characters: CharacterItem[] = []

  constructor(private router:Router,
    private StarWarsSvc: StarWarsService) { }

  ngOnInit() {
    this.StarWarsSvc.getCharacterList()
      .subscribe(result => {
        console.log('result:', result);
        this.characters = result}
      )
      // .catch(error => {
      //   console.error('error: ', error);
      // });
    }

    back() {
      this.router.navigate(['/']);
    }
}
