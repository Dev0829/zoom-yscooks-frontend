import { Component, OnInit, ViewChild } from "@angular/core";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";
import { environment } from "../../../../../environments/environment";
import { CookieService } from "ngx-cookie-service";
import { PostService } from "../../services/post.service";
import { Router, ActivatedRoute } from "@angular/router";
import { UserModel } from "../../../shared/models/user.model";
import { DeletePostComponent } from "../../../shared/components/delete-post/delete-post.component";
// import { CreatePostComponent } from "../../components/create-post/create-post.component";

@Component({
  selector: "app-post-view",
  templateUrl: "./post-view.component.html",
  styleUrls: ["./post-view.component.scss"],
})
export class PostViewComponent implements OnInit {
  @ViewChild(DeletePostComponent) deletePostComponent: DeletePostComponent;
  // @ViewChild(CreatePostComponent) createPostComponent: CreatePostComponent;

  public user: UserModel;
  public post: any = {};
  public newComent: any = {};

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private cookieService: CookieService,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.cookieService.get("userProfile")) {
      this.user = JSON.parse(this.cookieService.get("userProfile"));
    }

    this.route.params.subscribe((data) => {
      // console.log(data);
      this.getPostById(data.id);
    });
  }

  getPostById(id) {
    this.spinner.show();
    this.postService.getPostById(id).subscribe(
      (data) => {
        // console.log(data);
        this.post = data;
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error("error");
      }
    );
  }

  addComent(feedId) {
    this.spinner.show();
    this.postService
      .addCommentToPost(feedId, { text: this.newComent[feedId] })
      .subscribe(
        (data) => {
          this.newComent[feedId] = "";
          this.getPostById(this.post.postid);
          this.spinner.hide();
        },
        (error) => {
          this.spinner.hide();
          this.toastr.error("Error!");
        }
      );
  }

  deleteComent(coment) {
    this.spinner.show();
    const coments = this.post.Comments.filter(
      (c: any) => coment.commentid !== c.commentid
    );
    this.postService.deleteCommentFromFeed(coment.commentid).subscribe(
      data => {
        this.toastr.success("Comment deleted");
        this.post.Comments = coments;
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
      }
    );
  }

  edit() {
    alert('todo');
    // this.createPostComponent.openEditPostModal(this.post);
  }

  delete() {
    this.deletePostComponent.openDeleteModal(this.post);
  }

  postDeleted() {
    this.router.navigate(["/dashboard"]);
  }

  postEdited() {
    this.toastr.success("Post was edited");
    this.getPostById(this.post.postid);
  }
}
