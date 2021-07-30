import { Component, OnInit, Inject, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

import { ZoomMtg } from '@zoomus/websdk';

import { UserModel } from '../../../shared/models/user.model';
import { CookieService } from 'ngx-cookie-service';
import { environment } from '../../../../../environments/environment';
import { ZoomService } from '../../services/zoom.service';
import { DateTime } from 'luxon';

ZoomMtg.preLoadWasm();
ZoomMtg.prepareJssdk();

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ZoomComponent implements OnInit, OnDestroy, AfterContentInit {
  @ViewChild('video1') video1: ElementRef;

  public user: UserModel = {};
  public meetingName = '';
  private zoomId;
  comments = [];
  newComment = '';
  showPreview = false;
  interval;
  constructor(
    private ref: ChangeDetectorRef,
    private cookieService: CookieService,
    private zoomService: ZoomService,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(DOCUMENT) document
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('userProfile') || '{}');
    // tslint:disable-next-line: deprecation
    this.interval = setInterval(() => {
      this.getComments();
    }, 10000);

    this.route.params.subscribe((data) => {
      this.zoomId = data.id;
      if (this.zoomId === '97551507231' || this.zoomId === '93257914403') {
        this.showPreview = true;
      } else {
        this.getSignature();
      }

      this.getComments();

    });
    ZoomMtg.showCalloutFunction({
      show: false
     });

  }

  ngAfterContentInit(): void {
    setTimeout(() => {
      const elem1 = this.video1.nativeElement as HTMLVideoElement;
      elem1.play();
    }, 500);
  }


  getComments(): void {
    this.zoomService.getCommentsByZoomId(this.zoomId).subscribe(
      // tslint:disable-next-line: no-shadowed-variable
      data => {
        this.comments = data;
        this.ref.detectChanges();
      }
    );

  }

  getSignature(): void {
    this.zoomService
      .getSignature({ meetingNumber: this.zoomId, role: 0 })
      // tslint:disable-next-line: deprecation
      .subscribe(
        (data) => {
          if (data.success && data.signature) {
            this.startMeeting(data.signature);
          }
        },
        (error) => {
          console.warn(error);
        }
      );
  }

  startMeeting(signature: string): void {
    const zoomMeetingDiv = document.getElementById('zmmtg-root');
    const zoomContent = document.getElementById('zoom-content');
    zoomContent.appendChild(zoomMeetingDiv);

    ZoomMtg.init({
      leaveUrl: `${environment.FE_URL}/zoom/${this.zoomId}`,
      isSupportChat: true,
      isSupportAV: true,
      disableCallOut: true,
      audioPanelAlwaysOpen: false,
      success: (success) => {
        document.getElementById('zmmtg-root').style.display = 'block';

        ZoomMtg.join({
          signature: signature as string,
          meetingNumber: this.zoomId,
          userName: this.user.name ? this.user.name : 'test',
          userEmail: this.user.email,
          apiKey: environment.ZOOM_SDK,
          passWord: '123456',
          success: (s) => {
            console.log(s);
            ZoomMtg.showCalloutFunction({
              show: false
             });
            setTimeout(() => {
              const test1 = document.getElementsByClassName('join-audio-by-voip__join-btn')[0] as any;
              test1.click();
              // const test2 = document.getElementsByClassName('footer-button__button ax-outline')[2] as any;
              // test2.click();
             }, 2000);

            ZoomMtg.getCurrentMeetingInfo({
              success: (ss) => {
                this.meetingName = ss.result.meetingTopic;
                this.ref.detectChanges();
              }
            });
          },
          error: (error) => {
            console.log(error);
            document.getElementById('zmmtg-root').style.display = 'none';
            // this.router.navigate([`/`]);
          },
        });
      },
      error: (error) => {
        console.log(error);
        document.getElementById('zmmtg-root').style.display = 'none';
        // this.router.navigate([`/`]);
      },
    });
  }

  // tslint:disable-next-line: typedef
  ngOnDestroy() {
    document.getElementById('zmmtg-root').style.display = 'none';
    clearInterval(this.interval);
  }

  addComment(): void {
    this.zoomService.addCommentToZoom(this.zoomId, {text: this.newComment}).subscribe(
      data => {
        console.log(data);
        this.newComment = '';
        this.getComments();
      }
    );
  }

  deleteComment(comment): void {
    this.zoomService.deleteCommentFromZoom(comment.commentid).subscribe(
      () => {
        this.getComments();
      }
    );
  }

}
