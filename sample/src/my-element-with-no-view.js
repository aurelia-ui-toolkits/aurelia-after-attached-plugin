import {noView, inject} from 'aurelia-framework';

@noView
@inject(Element)
export class MyElementWithNoView {
    constructor(element) {
        this.element = element;
    }

    attached() {
        this.element.innerHTML = 'attached, ';
    }

    afterAttached() {
        this.element.innerHTML += 'afterattached';
    }
}