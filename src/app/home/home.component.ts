import { Component, OnInit } from '@angular/core';
import { HomeServiceService } from './home-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movieData: any;
  constructor(private homeService: HomeServiceService) { }

  ngOnInit(): void {
    this.fetchData()
  }

  fetchData() {
    this.homeService.getData().subscribe((res) => {
      console.log(res) // whole response we get 36273 data
      this.movieData = res.filter((word: any) => {
        return word.title[0] === "A"
      })
      console.log(this.movieData) //After filter movie names starts from A we have 2180
    })
  }
}
