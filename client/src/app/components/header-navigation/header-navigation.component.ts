import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { MuseumsService } from 'src/app/services/museums.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit {


  userID = localStorage.getItem('id');
  allmuseums: any = [];

constructor( private UsersService: UsersService,
            private museumsService : MuseumsService,
            private router : Router ) {
}

  ngOnInit() {
    this.getAllMuseums();
  }
  getAllMuseums(){
    this.museumsService.getAllMuseums().subscribe(
      res => {
        this.allmuseums = res;
      },
      err => console.log(err)

    );
  }
  logOut(){
    this.UsersService.logUserIn('false');
  }
  isLogged(){
    return <any> this.UsersService.isLogged();
  }

   dropDownFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

   filterFunction() {
    // this.allmuseums = [...this.allmuseums.filter(element => element.name.includes(a))]
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    let div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
     let txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }

  }
  showMuseum(nombre:string){

    this.router.navigate(['details/museums/',nombre]);
  }


}
