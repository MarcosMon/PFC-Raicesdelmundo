import { Component, OnInit } from "@angular/core";
import { Museum } from "../../models/museums";
import { Route, Router, ActivatedRoute } from "@angular/router";
import { MuseumsService } from "../../services/museums.service";

@Component({
  selector: "app-museum-form",
  templateUrl: "./museum-form.component.html",
  styleUrls: ["./museum-form.component.css"],
})
export class MuseumFormComponent implements OnInit {
  userID = localStorage.getItem('id');
  museum: Museum = {
    id: 0,
    name: "",
    user_id: this.userID,
    price: 0,
    description: "",
    phone: "",
    email: "",
    website: "",
    openinghours: "",
    city: "",
    ticket_purchase_page: "",
    country: "",
    direction: "",
    postalcode: "",
    colection_period: "",
    image: "",
    ubication: "",
    created_at: new Date(),
  };

  edit: boolean = false;

  constructor(
    private MuseumsService: MuseumsService,
    private router: Router,
    private activateddRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activateddRoute.snapshot.params;
    if (params.id) {
      this.MuseumsService.getOneMuseum(params.id).subscribe(
        (res) => {
          this.museum = res;
          this.edit = true;
        },
        (err) => console.log(err)
      );
    }
  }

  saveNewMuseum() {
    delete this.museum.created_at;
    delete this.museum.id;
    this.MuseumsService.saveMuseum(this.museum).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(["/museums"]);
      },
      (err) => console.log(err)
    );
  }
  updateMuseum() {
    delete this.museum.created_at;
    this.MuseumsService.updateMuseum(this.museum.id, this.museum)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/museums']);
        },
        err => console.log(err)
      )
  }
}
