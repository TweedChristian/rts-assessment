import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'rts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _title: Title) {
    this._title.setTitle("RTS Labs Assessment");
  }
}
