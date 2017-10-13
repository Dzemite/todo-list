import {Component, OnInit} from "@angular/core";

@Component({
  moduleId: module.id,
  selector: "todo-list",
  templateUrl: "todo-list.component.html"
})
export class TodoComponent implements OnInit {

  ngOnInit() {
    console.log("to-dos initialized");
  }

}
