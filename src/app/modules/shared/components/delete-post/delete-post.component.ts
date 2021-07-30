import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
} from "@angular/core";
import { ModalDirective } from "ngx-bootstrap/modal";
import { SharedService } from "../../services/shared.service";
import { Router, ActivatedRoute } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-delete-post",
  templateUrl: "./delete-post.component.html",
  styleUrls: ["./delete-post.component.scss"],
})
export class DeletePostComponent implements OnInit {
  @ViewChild("modal") modal: ModalDirective;
  @Output() deleted = new EventEmitter();

  public feed: any;
  constructor(
    private sharedService: SharedService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}

  openDeleteModal(feed) {
    this.feed = feed;
    this.modal.show();
  }

  deleteFeed() {
    this.spinner.show();
    this.sharedService.deletePost(this.feed.postid).subscribe(
      (data) => {
        this.spinner.hide();
        this.modal.hide();
        this.toastr.success("Post deleted");
        this.deleted.emit();
      },
      (error) => {
        this.spinner.hide();
        this.modal.hide();
        this.toastr.error(error.message, "Error");
      }
    );
    this.modal.hide();
  }
}
