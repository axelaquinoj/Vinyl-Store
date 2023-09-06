import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { VinylService } from 'src/app/services/vinyl.service';
import { Vinyl } from 'src/shared/models/vinyl';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  vinyls:Vinyl[] = [];

  constructor(private vinylService:VinylService,activatedRoute:ActivatedRoute){
    let vinylsObservable: Observable<Vinyl[]>;
    activatedRoute.params.subscribe((params)=>{
      if (params['search']){
        vinylsObservable = this.vinylService.getAllFoodsBySearchTerm(params['search']);
      } 
      else if (params['tag']){
        vinylsObservable = vinylService.getAllVinylsByTag(params['tag']);
      }
      else{
        vinylsObservable = vinylService.getAll();
      }
      vinylsObservable.subscribe((serverVinyls) =>{
        this.vinyls = serverVinyls;
      })
    });
   // this.vinyls = vinylService.getAll();
  }

  ngOnInit(): void {
    
  }
}