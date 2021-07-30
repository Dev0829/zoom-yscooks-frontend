import { LOCAL_STORAGE } from '@ng-toolkit/universal';
import { Component, OnInit, ViewChild, Output, EventEmitter, Inject } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { environment } from '../../../../../environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-modal-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;
  @Output() uploaded = new EventEmitter();

  public imageSelected = false;
  public videoSelected = false;
  public uploaderImage?: FileUploader;
  public uploaderVideo?: FileUploader;
  public preloader = false;
  public token: string;

  constructor(@Inject(LOCAL_STORAGE) private localStorage: any, private spinner: NgxSpinnerService) {}

  ngOnInit() {
    this.token = this.localStorage.getItem('token');
  }

  openUploadModal() {
    this.uploaderImage = null;
    this.uploaderVideo = null;
    this.imageSelected = false;
    this.videoSelected = false;
    this.modal.show();
  }

  startUpload() {
    this.spinner.show();
    // if images
    if (this.uploaderImage && this.uploaderImage.queue.length) {
      const lenImg = this.uploaderImage.queue.length - 1;
      this.uploaderImage.uploadAll();
      this.uploaderImage.onSuccessItem = (fileItem, response) => {
        const res = JSON.parse(response);
        console.log(res);
        this.uploaded.emit(res);
      };
      this.uploaderImage.queue[lenImg].onComplete = (
        responseImgUlouder: string,
        statusImgUlouder: number,
        headersImgUlouder: any
      ) => {
        // if video
        if (this.uploaderVideo && this.uploaderVideo.queue.length) {
          const lenVideo = this.uploaderVideo.queue.length - 1;
          this.uploaderVideo.uploadAll();
          this.uploaderVideo.onSuccessItem = (fileItem, response) => {
            const res = JSON.parse(response);
            console.log(res);
            this.uploaded.emit(res);
          };
          this.uploaderVideo.queue[lenVideo].onComplete = (response: string, status: number, headers: any) => {
            this.spinner.hide();
            this.modal.hide();
          };
        } else {
          this.spinner.hide();
          this.modal.hide();
        }
      };
    } else if (this.uploaderVideo && this.uploaderVideo.queue.length) {
      const lenVideo = this.uploaderVideo.queue.length - 1;
      this.uploaderVideo.uploadAll();
      this.uploaderVideo.onSuccessItem = (fileItem, response) => {
        const res = JSON.parse(response);
        console.log(res);
        this.uploaded.emit(res);
      };
      this.uploaderVideo.queue[lenVideo].onComplete = (response: string, status: number, headers: any) => {
        this.spinner.hide();
        this.modal.hide();
      };
    } else {
      this.spinner.hide();
      this.modal.hide();
    }
  }

  addImageUploader(): void {
    if (!this.imageSelected) {
      this.uploaderImage = new FileUploader({
        url: `${environment.API_URL}/api/files/image`,
        authToken: 'Bearer ' + this.token,
        authTokenHeader: 'Authorization'
      });
      this.imageSelected = true;
      this.uploaderImage.onAfterAddingFile = item => {
        item.withCredentials = false;
      };
    }
  }

  addVideoUploader(): void {
    if (!this.videoSelected) {
      this.uploaderVideo = new FileUploader({
        url: `${environment.API_URL}/api/files/video`,
        authToken: 'Bearer ' + this.token,
        authTokenHeader: 'Authorization'
      });
      this.videoSelected = true;
      this.uploaderVideo.onAfterAddingFile = item => {
        item.withCredentials = false;
      };
    }
  }
}
