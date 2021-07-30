import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { PostService } from '../../services/post.service';
import { UserModel } from '../../../shared/models/user.model';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {
  @ViewChild('modal') modal: ModalDirective;
  @Output() profileEdited = new EventEmitter();

  public imageSelected = false;
  public uploaderImage?: FileUploader;
  public preloader = false;
  public token: string;
  public profile: UserModel = {
    name: '',
    title: '',
    linkedin: ''
  };

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private cookieService: CookieService,
    private postService: PostService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.token = this.cookieService.get('token');
  }

  openModal(profile: UserModel): void {
    this.profile = JSON.parse(JSON.stringify(profile));
    this.modal.show();
  }

  addImageUploader(): void {
    this.uploaderImage = null;
    this.imageSelected = false;
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

  startUpload(): void {
    // if images
    if (this.uploaderImage && this.uploaderImage.queue.length) {
      this.spinner.show();
      this.uploaderImage.uploadAll();
      this.uploaderImage.onSuccessItem = (fileItem, response) => {
        const img = JSON.parse(response);
        this.profile.profileImage = img.url;
        this.editProfile();
      };
    } else {
      this.editProfile();
    }
  }

  editProfile(): void {
    console.log(this.profile);
    this.spinner.show();
    this.userService.editCurrentUser(this.profile).subscribe(
      (data) => {
        this.spinner.hide();
        this.profileEdited.emit();
        this.modal.hide();
      },
      (error) => {
        this.toastr.error('error');
        this.spinner.hide();
      }
    );
  }
}
