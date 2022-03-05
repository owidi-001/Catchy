import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  title="Catchy News";
  news_list:any; // Change to News
  top_list:any; // Change to News
  bbc:any;
  cnn:any;
  
  constructor(private newsService:NewsService) { }

  ngOnInit(): void {
    this.news_list=this.newsService.getNews();
    this.top_list=this.newsService.getTop().slice(0,1);
    this.bbc=this.newsService.getBBC();
    this.cnn=this.newsService.getCNN();
  }

}
