import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { FileUploader } from "ng2-file-upload";
import { ModalDirective } from "ngx-bootstrap/modal";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../../../../environments/environment";
import { CookieService } from "ngx-cookie-service";
import { PostService } from "../../services/post.service";

@Component({
  selector: "app-create-post",
  templateUrl: "./create-post.component.html",
  styleUrls: ["./create-post.component.scss"],
})
export class CreatePostComponent implements OnInit {
  @ViewChild("modal") modal: ModalDirective;
  @Output() postCreated = new EventEmitter();

  public imageSelected = false;
  public uploaderImage?: FileUploader;
  public preloader = false;
  public token: string;
  public edit = false;
  public post: any = {
    text: "",
    mediaUrls: [],
  };

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private cookieService: CookieService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.token = this.cookieService.get("token");
  }

  openCreatePostModal() {
    this.post = {
      text: "",
      mediaUrls: [],
    };
    this.uploaderImage = null;
    this.imageSelected = false;
    this.modal.show();
  }

  openEditPostModal(post) {
    this.post = post;
    this.uploaderImage = null;
    this.imageSelected = false;
    this.edit = true;
    this.modal.show();
  }

  addImageUploader(): void {
    this.uploaderImage = null;
    this.imageSelected = false;
    if (!this.imageSelected) {
      this.uploaderImage = new FileUploader({
        url: `${environment.API_URL}/media/upload-s3`,
        authToken: 'Bearer ' + this.token,
        authTokenHeader: "Authorization",
        itemAlias: "media",
      });
      this.imageSelected = true;
      this.uploaderImage.onAfterAddingFile = (item) => {
        item.withCredentials = false;
      };
    }
  }

  startUpload() {
    // if images
    if (this.uploaderImage && this.uploaderImage.queue.length) {
      this.spinner.show();
      this.uploaderImage.uploadAll();
      this.uploaderImage.onSuccessItem = (fileItem, response) => {
        const img = JSON.parse(response);
        this.post.media.push({ url: img.url, type: "image" });
        if (!this.edit) {
          this.createPost();
        } else {
          const data = {
            postid: this.post.postid,
            mediaUrl: { url: img.url, type: "image", postid: this.post.postid },
          };

          this.editPost(data);
        }
      };
    }
  }

  createPost() {
    this.postService.createPost(this.post).subscribe(
      (data) => {
        // console.log(data);
        this.spinner.hide();
        this.postCreated.emit();
        this.modal.hide();
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error("error");
      }
    );
  }

  async editPost(mediaData): Promise<void> {
    try {
      await this.postService.addMediaToPost(mediaData).toPromise();
      await this.postService.editPost(this.post).toPromise();
      this.spinner.hide();
      this.postCreated.emit();
      this.modal.hide();
    } catch {
      this.spinner.hide();
      this.toastr.error("error");
    }
  }
}
