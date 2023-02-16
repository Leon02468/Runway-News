import { Component, OnInit } from '@angular/core';
import { RunwayService } from 'src/app/services/runway.service';
import { news } from 'src/models/news.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  news$ : news[] = [];

  constructor(private runwayService : RunwayService){};

  ngOnInit(): void {
    this.getAll();
  };

  getAll(){
    this.runwayService.get().subscribe((res : any) => {
      this.news$ = res;
    })
  }
}
