import { Component, OnInit } from '@angular/core';
import { VinylService } from 'src/app/services/vinyl.service';
import { Tag } from 'src/shared/models/tag';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
tags?:Tag[];
  constructor(vinylService:VinylService) { 
  vinylService.getAllTags().subscribe(serverTags =>{
    this.tags = serverTags;
  }); 
  }

  ngOnInit(): void {
  }

}
