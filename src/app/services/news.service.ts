import { Injectable } from '@angular/core';
import { News } from '../models/news';
import {articles} from './dummy'

// get news lists
const news_list: News[] = articles;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news_list: News[] = news_list;
  top_list: News[] = news_list;
  bbc: News[] = news_list;
  cnn: News[] = news_list;

  constructor() { }


  getNews():News[] {
    return this.news_list;
  }

  getTop():News[] {
    return this.top_list.slice(0,4);
  }

  getBBC():News[] {
    return this.bbc.slice(0,2);
  }

  getCNN():News[] {
    return this.cnn.slice(0,2);
  }
  
}
