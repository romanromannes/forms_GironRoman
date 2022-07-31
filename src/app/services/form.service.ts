import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { AppState } from "../models/app-state";


@Injectable({
  providedIn: "root",
})
export class FormService {
  appState: BehaviorSubject<AppState> = new BehaviorSubject<AppState>({
    login: false,
    loginForm: { fullname: "", email: "", password: "" },
  });

  constructor() {}

  getAppState(): Observable<AppState> {
    return this.appState.asObservable();
  }

  setAppState(state: AppState): void {
    this.appState.next(state);
  }
}
