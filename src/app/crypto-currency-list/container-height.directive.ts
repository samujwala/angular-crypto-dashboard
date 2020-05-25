import { Directive, ElementRef, Input, NgZone,HostListener,Renderer2} from '@angular/core';

@Directive({
  selector: '[appListHeight]'
})
export class ContainerHeightDirective {
    domElement: any;
    requiredStyles:any = {
              'height': window.innerHeight-170+'px'
            };
  constructor(private ngZone: NgZone,private renderer: Renderer2,
            private elementRef: ElementRef) {
             this.domElement = this.elementRef.nativeElement;
            
            Object.keys(this.requiredStyles).forEach(newStyle => {   
            this.renderer.setStyle(
              this.domElement, `${newStyle}`, this.requiredStyles[newStyle]
            );
           });
        }
        @HostListener('window:resize', ['$event'])
        onResize(event,elementRef,renderer){
                //ngZone.run will help to run change detection
                this.ngZone.run(() => {
                  this.elementRef.nativeElement.height = window.innerHeight-170+'px';
                    
        });
                
        }
}

    

    