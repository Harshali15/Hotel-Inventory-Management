import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective implements OnInit{

  // @Input() color: string = "purple";

  //using smae input property as selector name
  @Input() appHover: string = "purple";


  //elementref will give access to the login element here, we have added the directive to the login username , password field
  constructor(private element: ElementRef, private renderer:Renderer2) { 
    console.log(element.nativeElement)
  }

  ngOnInit(): void {
    //this.element.nativeElement.style.backgroundColor = this.color;
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.appHover);
  }

  //listen to the mouseenter and mouseleave events
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'beige');
  }
}
