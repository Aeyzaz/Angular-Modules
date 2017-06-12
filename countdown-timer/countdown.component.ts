import {Component,Input,Output,EventEmitter} from '@angular/core'
import {Observable} from 'rxjs/Rx'

@Component({
    selector:'countdown-timer',
    template:`
        {{countDown}}
    `
})
export class CountDownComponent{
    @Input() count = 60;
    @Output() onComplete = new EventEmitter();

    countDown;
    constructor(){
        Observable.timer(0,1000)
        .take(this.count)
        .filter(()=>this.count>0)
        .map(()=>--this.count)
        .subscribe(()=>{
            this.countDown = this.count;
            if(this.count==0){
                this.onComplete.emit();
            }
        })
    }
    
}