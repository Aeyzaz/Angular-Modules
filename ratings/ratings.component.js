"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
let RatingsComponent = class RatingsComponent {
    constructor(el) {
        this.el = el;
        this.isFavorite = false;
        this.change = new core_1.EventEmitter();
    }
    OnClick() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
};
__decorate([
    core_1.Input('is-favorite'),
    __metadata("design:type", Object)
], RatingsComponent.prototype, "isFavorite", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RatingsComponent.prototype, "change", void 0);
RatingsComponent = __decorate([
    core_1.Component({
        selector: 'ratings',
        template: `<i 
        class="glyphicon button-hover" 
        [class.glyphicon-star]="isFavorite"
        [class.glyphicon-star-empty]="!isFavorite"
        (click)="OnClick()" aria-hidden="true"></i>
        `
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], RatingsComponent);
exports.RatingsComponent = RatingsComponent;
//# sourceMappingURL=ratings.component.js.map