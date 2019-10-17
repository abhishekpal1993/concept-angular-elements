import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { FreeLearningComponent } from './free-learning/free-learning.component';

@NgModule({
  declarations: [
    FreeLearningComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
  ],
  providers: [],
  entryComponents: [
    FreeLearningComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) { }
  ngDoBootstrap() {
    const freeLearningComponent = createCustomElement(FreeLearningComponent,
      { injector: this.injector });
    customElements.define('packt-magento-dropin-free-learning', freeLearningComponent);
  }
}
