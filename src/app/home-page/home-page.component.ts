import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "home-page",
  templateUrl: "home-page.component.html",
  styleUrls: ["home-page.component.css"]
})
export class HomePageComponent {

  constructor(private router: Router){}

  goToTodos() {
    this.router.navigate(["todo"]);
  }
}
