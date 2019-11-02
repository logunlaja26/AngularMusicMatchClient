import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  title = 'Favorite Lyrics App';
  artist = ''
  song = ''
  constructor() { }

  ngOnInit() {
  }

  handleLogin(){
    console.log(this.artist);
    console.log(this.song);
  }

}
