import {Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private snack: MatSnackBar) {
  }

  public show(message, action?) {
    this.snack.open(message, action, {
      duration: 4000,
    });
  }
}


