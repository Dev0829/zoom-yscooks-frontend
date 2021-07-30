import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

// tslint:disable-next-line: directive-selector
@Directive({ selector: 'img[imgPreview]' })
export class ImagePreviewDirective implements OnChanges {
  @Input() image: any;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // tslint:disable-next-line: typedef
  ngOnChanges(changes: SimpleChanges) {
    const reader = new FileReader();
    const el = this.el;

    // tslint:disable-next-line: only-arrow-functions
    // tslint:disable-next-line: typedef
    // tslint:disable-next-line: only-arrow-functions
    reader.onloadend = function(e) {
      el.nativeElement.src = reader.result;
    };

    if (this.image) {
      return reader.readAsDataURL(this.image);
    }
  }
}
