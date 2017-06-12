import {Component,ElementRef,Renderer,Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector:'ratings',
    template: `<i 
        class="glyphicon button-hover" 
        [class.glyphicon-star]="isFavorite"
        [class.glyphicon-star-empty]="!isFavorite"
        (click)="OnClick()" aria-hidden="true"></i>
        `
})

export class RatingsComponent{

    @Input('is-favorite') isFavorite = false;
    @Output() change = new EventEmitter();

    constructor(private el:ElementRef){}

    OnClick(){
        this.isFavorite = !this.isFavorite;
        this.change.emit({newValue:this.isFavorite});
    }
}