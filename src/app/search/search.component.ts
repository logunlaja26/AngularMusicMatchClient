import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'Favorite Lyrics App';
  artist = ''
  song = ''
  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoSongs(){
    this.router.navigate(['/songs']);
  }

}
