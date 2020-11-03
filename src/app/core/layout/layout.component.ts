import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public settings = '../../assets/settings-outline.svg';
  public statistics = '../../assets/activity-outline.svg';
  public home = '../../assets/home-outline.svg';
  public graphCall = '../../assets/shuffle-2-outline.svg';
  public graphDependency = '../../assets/swap-outline.svg';

  constructor() {
  }

  ngOnInit(): void {
  }

}
