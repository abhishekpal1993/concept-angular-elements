import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FetchProductDetailService } from '../core/services/fetch-product-details';

@Component({
  // selector: 'app-free-learning',
  templateUrl: './free-learning.component.html',
  styleUrls: ['./free-learning.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FreeLearningComponent implements OnInit {

  productId: string;
  tocUrl: string;
  summaryUrl: string;

  toc: any;
  summary: any;

  constructor( private fetchProductDetailService: FetchProductDetailService ) { }

  ngOnInit() {
    this.productId = '9781788627962';
    this.tocUrl = `https://static.packt-cdn.com/products/${this.productId}/toc`;
    this.summaryUrl = `https://static.packt-cdn.com/products/${this.productId}/summary`;

    this.fetchProductDetailService.getCdnContent(this.tocUrl).subscribe((item) => this.toc = JSON.stringify(item));
    this.fetchProductDetailService.getCdnContent(this.summaryUrl).subscribe((item) => this.summary = JSON.stringify(item));
  }
}
