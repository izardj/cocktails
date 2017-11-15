import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective implements OnChanges {
  @HostBinding('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;
  @Input('appActive') appActive: boolean;

  ngOnChanges() {
    if (this.appActive) {
      this.backgroundColor = '#3498db';
      this.color = 'white';
    }else {
      this.backgroundColor = 'transparent';
      this.color = 'black';
    }
  }

  constructor() {

  }

}
