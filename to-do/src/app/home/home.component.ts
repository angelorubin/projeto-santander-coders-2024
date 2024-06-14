import { Component } from '@angular/core';
import { BannerComponent } from './banner/banner.component';
import { ListService } from './list.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [ListService]
})

export class HomeComponent {
  image: string = '/assets/images/example.jpg';
  result!: string;
  users!: any

  constructor(private listService: ListService) { }

  ngOnInit() {
    this.listService.getUsers().subscribe(data => {
      this.users = data
    })
  }

  getResult(value: string) {
    this.result = value;
  }
}
