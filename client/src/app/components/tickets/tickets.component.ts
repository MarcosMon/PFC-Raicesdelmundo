import { Component, OnInit } from "@angular/core";
import { TicketService } from "../../services/ticket.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-tickets",
  templateUrl: "./tickets.component.html",
  styleUrls: ["./tickets.component.css"],
})
export class TicketsComponent implements OnInit {
  comment;
  type;
  subject;
  tickets:any = {};

  selectedRow;
  countStatus;
  countType;
  ticketCount;
  status = 'Open';
  userID = localStorage.getItem("id");
  commentList;
  allTicketList;
  count: number = 0;
  params = this.activatedRoute.snapshot.params;
  constructor(
    private activatedRoute: ActivatedRoute,
    private ticketService: TicketService
  ) {}

  ngOnInit() {
    this.ticketsList();
    this.allTicketsList();
  }

  countTicketStatus(commentList: any) {
    this.countStatus = [...commentList].reduce((a, { status }) => {
      a[status] = (a[status] || 0) + 1;
      return a;
    }, {});
  }

  countTicketType(commentList: any) {
    this.countType = [...commentList].reduce((a, { type }) => {

      a[type] = (a[type] || 0) + 1;
      return a;
    }, {});
  }

  setSelectedRow(row: any, ticketCount: number) {
    this.selectedRow = row;
    this.ticketCount = ticketCount;
  }

  ticketsList() {
    this.ticketService.getListTicketsByUser(this.userID).subscribe(
      (res) => {
        console.log(res);
        this.commentList = res;
        if(this.userID != '2'){
        this.countTicketStatus(this.commentList);
        this.countTicketType(this.commentList);
        }
      },
      (err) => console.log(err)
    );
  }
  allTicketsList() {
    this.ticketService.getListTickets().subscribe(
      (res) => {
        console.log(res);
        this.allTicketList = res;
        this.tickets = res;
        if(this.userID == '2'){
        this.countTicketStatus(this.allTicketList);
        this.countTicketType(this.allTicketList);
        }
      },
      (err) => console.log(err)
    );
  }

  createTicket() {

    let commentData: any = {
      id_user: this.userID,
      subject: this.subject,
      status: this.status,
      type: this.type,
      comment: this.comment,
    };
    this.ticketService.createTicket(commentData).subscribe(
      (res) => {
        console.log(res);
        this.ticketsList();
        this.allTicketsList()
      },
      (err) => console.log(err)
    );
    this.comment = null;

  }

  updateTicketStatus(id:any, status : any, id_user : any){
    let commentData: any = {
      id_user: id_user,
      subject: this.subject,
      status: status,
      type: this.type,
      comment: this.comment,
    };
    this.ticketService.updateTicketStatus(id, commentData)
    .subscribe(
      res =>{
        console.log(res);
        this.allTicketsList();
      },
      err => console.log(err)
    )

  }

}
