import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
import { PostService } from '../../services/post.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UserModel } from '../../../shared/models/user.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  public posts = [];
  public user: UserModel;
  public lessonPosts = false;
  public paginator = {
    total: 0,
    itemPerPage: 17,
    page: 1,
  };
  private allPosts = [];

  constructor(
    private spinner: NgxSpinnerService,
    private toastr: ToastrService,
    private cookieService: CookieService,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.cookieService.get('userProfile')) {
      this.user = JSON.parse(this.cookieService.get('userProfile'));
    }

    this.route.url.subscribe((data) => {
      // console.log(data);
      if (data[0].path === 'posts') {
        this.lessonPosts = false;
        this.getAllPosts();
      } else {
        this.getLessonPosts();
        this.lessonPosts = true;
      }
    });
  }

  changed(): void {
    if (!this.lessonPosts) {
      this.getAllPosts();
    } else {
      this.getLessonPosts();
    }
  }

  getAllPosts(): void {
    this.spinner.show();
    this.postService.getPosts().subscribe(
      (data) => {
        this.allPosts = data;
        this.paginator.total = data.length;
        const start = (this.paginator.page - 1) * this.paginator.itemPerPage;
        this.posts = this.allPosts.slice(
          start,
          this.paginator.itemPerPage * this.paginator.page
        );
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error('error');
      }
    );
  }

  getLessonPosts(): void {
    this.spinner.show();
    this.postService.getLessonPosts().subscribe(
      (data) => {
        this.allPosts = data;
        this.paginator.total = data.length;
        const start = (this.paginator.page - 1) * this.paginator.itemPerPage;
        this.posts = this.allPosts.slice(
          start,
          this.paginator.itemPerPage * this.paginator.page
        );
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        this.toastr.error('error');
      }
    );
  }

  pageChanged(event: any): void {
    // console.log(event);
    this.paginator.page = event.page;
    const start = (this.paginator.page - 1) * this.paginator.itemPerPage;
    this.posts = this.allPosts.slice(
      start,
      this.paginator.itemPerPage * this.paginator.page
    );
    window.scrollTo(0, 10);
  }
}
