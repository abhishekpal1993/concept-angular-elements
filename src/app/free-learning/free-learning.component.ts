import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  // selector: 'app-free-learning',
  templateUrl: './free-learning.component.html',
  styleUrls: ['./free-learning.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FreeLearningComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('it works! after bundler changes!!!');
  }

}
