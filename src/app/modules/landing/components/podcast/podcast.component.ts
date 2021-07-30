import { Component, OnInit } from '@angular/core';
import { LandingService } from '../../landing.service';
import { NewsRss, IRssChannel } from './rss';
@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss']
})
export class PodcastComponent implements OnInit {
  data: IRssChannel;
  constructor(private landingService: LandingService) { }

  ngOnInit(): void {
    this.landingService.getRssFeedData().subscribe((data: NewsRss) => {
      console.log(data);
      this.data = data.rss.channel[0];
    });
  }

}
