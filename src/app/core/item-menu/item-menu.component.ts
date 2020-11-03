import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent implements OnInit {

  @Input() public icon: string;
  @Input() public title: string;
  @Input() public isActive: boolean = false;
  @Input() public link: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
