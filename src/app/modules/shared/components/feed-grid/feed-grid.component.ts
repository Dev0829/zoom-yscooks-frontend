import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Inject,
  EventEmitter,
  Output,
  TemplateRef,
  OnDestroy,
  AfterViewInit,
} from '@angular/core';
import { SharedService } from '../../services/shared.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router, ActivatedRoute } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { environment } from '../../../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { UserModel } from '../../models/user.model';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FeedModel } from '../../models/feed.model';
import { WarningModel } from '../../models/warning.model';
import { CookieService } from 'ngx-cookie-service';
import { DeletePostComponent } from '../../components/delete-post/delete-post.component';
import { GroupsService } from '../../services/groups.service';
import { DomSanitizer } from '@angular/platform-browser';

import 'quill-emoji/dist/quill-emoji.js';

@Component({
  selector: 'app-feed-grid',
  templateUrl: './feed-grid.component.html',
  styleUrls: ['./feed-grid.component.scss'],
})
export class FeedGridComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('emptYmodal') emptYmodal: ModalDirective;
  @ViewChild('templateGroupsModal') templateGroupsModal: ModalDirective;
  @ViewChild('PDFmodal') pdfModal: ModalDirective;
  @ViewChild(DeletePostComponent) deletePostComponent: DeletePostComponent;

  @Input() data: Array<FeedModel>;
  @Input() lessonPosts: boolean;
  @Input() groupId: number;
  @Output() changed = new EventEmitter();

  public newComent: any = {};
  public user: UserModel;
  public token: string;
  public imageSelected = false;
  public videoSelected = false;
  public pdfSelected = false;
  public uploaderImage?: FileUploader;
  public uploaderVideo?: FileUploader;
  public uploaderPdf?: FileUploader;
  public feedToEdit = {
    text: '',
    mediaUrls: [],
    postid: null,
    groupids: [],
  };
  public feed: any = {
    text: '',
    mediaUrls: [],
    postid: null,
    groupids: [],
  };
  public modalRef: BsModalRef;
  public warning: WarningModel = {
    text: '',
  };

  public popovers = {
    post: false,
    invite: false,
  };

  public allGroups = [];
  public pdfUrl = '';

  constructor(
    private cookieService: CookieService,
    private sharedService: SharedService,
    private router: Router,
    private route: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private modalService: BsModalService,
    private groupsService: GroupsService,
    private sanitizer: DomSanitizer
  ) {
    if (this.cookieService.get('userProfile')) {
      this.user = JSON.parse(this.cookieService.get('userProfile'));
    }
    this.token = this.cookieService.get('token');
    this.getAllGroups();
  }

  ngOnInit(): void {
    if (this.cookieService.get('showFeedPopovers')) {
      this.popovers = { invite: true, post: true };
    }
  }

  ngOnDestroy(): void {
    if (this.cookieService.get('showFeedPopovers')) {
      this.cookieService.delete('showFeedPopovers');
    }
  }

  ngAfterViewInit(): void {
    if (this.cookieService.get('showFeedPopovers')) {
      this.popovers = { invite: true, post: true };
      this.emptYmodal.show();
      this.emptYmodal.onHide.subscribe(() => {
        this.popovers = { invite: false, post: false };
        this.cookieService.delete('showFeedPopovers');
      });
    }
  }

  addComent(feedId): void {
    this.spinner.show();
    this.sharedService
      .addCommentToFeed(feedId, { text: this.newComent[feedId] })
      .subscribe(
        (data) => {
          this.newComent[feedId] = '';
          this.changed.emit();
          this.spinner.hide();
        },
        (error) => {
          this.spinner.hide();
          this.toastr.error('Error!');
        }
      );
  }

  showAddFeed(): boolean {
    let show = false;
    if (this.user && this.user.isAdmin) {
      show = true;
    } else if (this.user &&
      !this.user.isAdmin && this.user.type === 'business') {
      show = true;
    }
    return show;
  }

  addFeed(): void {
    this.spinner.show();
    this.sharedService.createPost(this.feed).subscribe(
      (data) => {
        this.feed = {
          text: '',
          mediaUrls: [],
          postid: null,
        };
        this.changed.emit();
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error('error');
      }
    );

    this.imageSelected = false;
    this.videoSelected = false;
    this.pdfSelected = false;
    this.uploaderImage = null;
    this.uploaderVideo = null;
    this.uploaderPdf = null;
  }

  addImageUploader(): void {
    if (!this.imageSelected) {
      this.uploaderImage = new FileUploader({
        url: `${environment.API_URL}/media/upload-s3`,
        authToken: 'Bearer ' + this.token,
        authTokenHeader: 'Authorization',
        itemAlias: 'media',
      });
      this.imageSelected = true;
      this.uploaderImage.onAfterAddingFile = (item) => {
        item.withCredentials = false;
      };
    }
  }

  addVideoUploader(): void {
    if (!this.videoSelected) {
      this.uploaderVideo = new FileUploader({
        url: `${environment.API_URL}/media/upload-s3`,
        authToken: 'Bearer ' + this.token,
        authTokenHeader: 'Authorization',
        itemAlias: 'media',
      });
      this.videoSelected = true;
      this.uploaderVideo.onAfterAddingFile = (item) => {
        item.withCredentials = false;
      };
    }
  }

  addPdfUploader(): void {
    if (!this.pdfSelected) {
      this.uploaderPdf = new FileUploader({
        url: `${environment.API_URL}/media/upload-s3`,
        authToken: 'Bearer ' + this.token,
        authTokenHeader: 'Authorization',
        itemAlias: 'media',
      });
      this.pdfSelected = true;
      this.uploaderPdf.onAfterAddingFile = (item) => {
        item.withCredentials = false;
      };
    }
  }

  checkGroupsModal(): void {
    this.templateGroupsModal.show();

    // if (this.feedToEdit?.postid && this.feedToEdit.text) {
    //   this.saveEditedFeed();
    // } else {
    //   this.startUpload();
    // }
  }

  addGroups(): void {
    const gids = [];
    this.allGroups
      .filter((g) => g.needToAdd)
      .forEach((g) => {
        gids.push(g.groupid);
      });
    if (this.feedToEdit?.postid && this.feedToEdit.text) {
      this.feedToEdit.groupids = gids;
      this.saveEditedFeed();
    } else {
      this.feed.groupids = gids;
      this.startUpload();
    }
    this.templateGroupsModal.hide();
  }

  startUpload(): void {
    // if images
    if (this.uploaderImage && this.uploaderImage.queue.length) {
      this.spinner.show();
      const lenImg = this.uploaderImage.queue.length - 1;
      this.uploaderImage.uploadAll();
      this.uploaderImage.onSuccessItem = (fileItem, response) => {
        const res = JSON.parse(response);
        this.feed.mediaUrls.push({ url: res.url, type: 'image' });
        this.spinner.hide();
        this.addFeed();
      };
    } else if (this.uploaderVideo && this.uploaderVideo.queue.length) {
      this.spinner.show();
      const lenVideo = this.uploaderVideo.queue.length - 1;
      this.uploaderVideo.uploadAll();
      this.uploaderVideo.onSuccessItem = (fileItem, response) => {
        const res = JSON.parse(response);
        this.feed.mediaUrls.push({ url: res.url, type: 'video' });
        this.spinner.hide();
        this.addFeed();
      };
    } else if (this.uploaderPdf && this.uploaderPdf.queue.length) {
      this.spinner.show();
      const lenVideo = this.uploaderPdf.queue.length - 1;
      this.uploaderPdf.uploadAll();
      this.uploaderPdf.onSuccessItem = (fileItem, response) => {
        const res = JSON.parse(response);
        this.feed.mediaUrls.push({ url: res.url, type: 'pdf' });
        this.spinner.hide();
        this.addFeed();
      };
    } else {
      this.addFeed();
    }
  }

  edit(item): void {
    this.feedToEdit = item;
  }

  deleteFeed(item): void {
    this.deletePostComponent.openDeleteModal(item);
  }

  feedDeleted(): void {
    this.changed.emit();
  }

  deleteComent(feedIndex, coment): void {
    this.spinner.show();
    const coments = this.data[feedIndex].comment.filter(
      (c: any) => coment.commentid !== c.commentid
    );
    this.sharedService.deleteCommentFromFeed(coment.commentid).subscribe(
      data => {
        this.toastr.success('Comment deleted');
        this.data[feedIndex].comment = coments;
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
      }
    );
  }

  cancelEditFeed(): void {
    this.feedToEdit = {
      text: '',
      mediaUrls: [],
      postid: null,
      groupids: [],
    };
  }

  saveEditedFeed(): void {
    this.spinner.show();
    this.sharedService.editPost(this.feedToEdit).subscribe(
      (res) => {
        this.cancelEditFeed();
        this.spinner.hide();
        this.toastr.success('Post edited');
        this.changed.emit();
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error('Error');
      }
    );
  }

  postReport(): void {
    this.spinner.show();
    this.sharedService.createWarning(this.warning).subscribe(
      (res) => {
        this.spinner.hide();
        this.toastr.success('Warning was sent');
        this.modalRef.hide();
        this.changed.emit();
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error('Error');
      }
    );
  }

  openReportModal(template: TemplateRef<any>, item): void {
    this.modalRef = this.modalService.show(template);
    this.warning.text = '';
    this.warning.postid = item.postid;
    this.warning.uid = this.user.uid;
  }

  getAllGroups(): void {
    this.spinner.show();
    this.groupsService.getAllGroups().subscribe(
      (data: any) => {
        this.allGroups = data;
        this.allGroups.forEach((d) => {
          d.needToAdd = false;
        });
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }

  readPDF(media): void {
    // console.log(media);
    this.pdfUrl = media.url;
    this.pdfModal.show();
  }

  checkGroupCheckbox(group): void {
    const checkedGroups = this.allGroups.filter((g) => g.needToAdd).length;
    if (checkedGroups > 1 && !this.user?.isAdmin) {
      this.toastr.error('You can select maximum 1 groups');
      setTimeout(() => {
        group.needToAdd = false;
      }, 300);
    }
  }
}
