import { Component } from "@angular/core";
import { Observable } from "rxjs";
import { AppState } from "./models/app-state";

import { FormService } from "./services/form.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  state$: Observable<AppState>;
  constructor(private formService: FormService) {
    this.state$ = formService.getAppState();
  }

  logOut(): void {
    let state: AppState = {
      login: false,
      loginForm: { fullname: "", email: "", password: "" },
    };
    this.formService.setAppState(state);
  }
}
