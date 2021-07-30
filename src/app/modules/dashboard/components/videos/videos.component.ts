import {
  Component,
  ViewChild,
  ElementRef,
  AfterContentInit,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss'],
})
export class VideosComponent implements AfterContentInit, OnInit {
  @ViewChild('video') video: ElementRef;
  id = 1;

  videos = {
    1: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/My+Promo+video+18.mp4',
    2: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/How+To+Innovate+The+Future+Of+Food+Intelligently.mp4',
    3: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Global+Trend+In+Food+Innovation.mp4',
    4: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Artificial+Intelligence.mp4',
    5: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Learning+technology.mp4',
    6: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Liping+Zhao.mp4',
    7: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Panel+on+Microbiome%2C+Nutrition+and+Personalized+Nutrition.mp4',
    8: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Food+As+Medicine.mp4',
    9: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Innovation+and+meeting.mp4',
    10: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/The+future+of+snaking.mp4',
    11: 'https://zoom-yscooks.s3.amazonaws.com/assets/video/webinar/Innovating+alternative+protein.mp4'
  };

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.id = params.id;
      }
    });
  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      const elem = this.video.nativeElement as HTMLVideoElement;
      elem.play();
    }, 1000);
  }

}
