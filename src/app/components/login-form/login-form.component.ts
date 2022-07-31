import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AppState } from "src/app/models/app-state";

import { FormService } from "src/app/services/form.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"],
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private formService: FormService) {
    this.loginForm = this.fb.group({
      fullname: ["", [Validators.required, Validators.pattern("[a-zA-Z]+$")]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(4)]],
    });
  }

  ngOnInit(): void {}

  login(form: FormGroup): void {
    console.log(form);
    let state: AppState = {
      login: true,
      loginForm: {
        fullname: form.value.fullname,
        email: form.value.email,
        password: form.value.password,
      },
    };
    this.formService.setAppState(state);
  }
}
