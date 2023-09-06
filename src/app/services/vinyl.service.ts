import { Injectable, ViewContainerRef } from '@angular/core';
import { Vinyl } from 'src/shared/models/vinyl';
import { sample_vinyls } from 'src/shared/models/data';
import { sample_tags } from 'src/shared/models/data';
import { Tag } from 'src/shared/models/tag';
import { get } from 'lodash';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VINYLS_BY_SEARCH_URL,VINYLS_BY_ID_URL,VINYLS_BY_TAGS_URL, VINYLS_TAGS_URL,VINYLS_URL} from 'src/shared/constants/urls';
@Injectable({
  providedIn: 'root'
})
export class VinylService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Vinyl[]>{
    return this.http.get<Vinyl[]>(VINYLS_URL);
  } 
  getAllFoodsBySearchTerm(search:string){
    return this.http.get<Vinyl[]>(VINYLS_BY_SEARCH_URL + search) 
   }
  getAllTags():Observable<Tag[]> {
    return this.http.get<Tag[]>(VINYLS_TAGS_URL);
  }
  getAllVinylsByTag(tag:string):Observable<Vinyl[]>{
    return tag === 'All'?
       this.getAll() : this.http.get<Vinyl[]>(VINYLS_BY_TAGS_URL + tag);
  }
  
  getVinylById(id: string){
    return this.http.get<Vinyl>(VINYLS_BY_ID_URL + id);
  }
}
