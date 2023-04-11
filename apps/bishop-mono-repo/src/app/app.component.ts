import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as AppActions from "../store/actions/app/app-actions";
import { AppStore } from '../store/interfaces/AppStore';
import { isLoadingSelector } from '../store/selectors/app/app-selectors';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bishop-mono-repo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {


  isLoading$: Observable<{ loading: boolean; activeHttpRequests: number; }> | undefined;


  title = 'bishop-mono-repo';

  constructor(private store: Store<AppStore>, private http: HttpClient) {

  }
  ngOnInit(): void {
    console.log('STarting');

    this.isLoading$ = this.store.select('App');

  }

  getData() {
    this.http.get('https://cat-fact.herokuapp.com/facts').subscribe((x) => {
      console.log(x);
    });
  }


}
