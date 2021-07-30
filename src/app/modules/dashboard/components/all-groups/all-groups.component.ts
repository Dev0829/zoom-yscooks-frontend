import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { GroupsService } from "../../../shared/services/groups.service";
import { NgxSpinnerService } from "ngx-spinner";
import { UserModel } from "../../../shared/models/user.model";
import { CookieService } from "ngx-cookie-service";
import { CommunicationService } from "../../../shared/services/communication.service";

@Component({
  selector: "app-find-groups",
  templateUrl: "./all-groups.component.html",
  styleUrls: ["./all-groups.component.scss"],
})
export class AllGroupsComponent implements OnInit {
  public allGroups = [];
  public user: UserModel;

  constructor(
    private cookieService: CookieService,
    private spinner: NgxSpinnerService,
    private groupsService: GroupsService,
    private com: CommunicationService
  ) {}

  ngOnInit() {
    if (this.cookieService.get("userProfile")) {
      this.user = JSON.parse(this.cookieService.get("userProfile"));
    }
    this.getAllGroups();
  }

  getAllGroups() {
    this.spinner.show();
    this.groupsService.getAllGroups().subscribe(
      (data: any) => {
        // console.log(data);
        this.allGroups = data;
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }

  openSignUp(e: Event) {
    e.preventDefault();
    this.com.calSignUp();
  }

  openLogin(e: Event) {
    e.preventDefault();
    this.com.callLoginForm();
  }
}
