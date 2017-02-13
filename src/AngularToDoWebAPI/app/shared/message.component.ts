import { Component, Input, OnChanges } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'msgbox',
    templateUrl: "message.component.html"
})
export class MessageComponent implements OnChanges {
    @Input() MessageModel;

    ngOnChanges(): void {
    
    }
}

export class MessageModel {
    Message: string;
    MessageType: number;

    constructor(Message: string = '', MessageType: number = 1) {
        this.Message = Message;
        this.MessageType = MessageType;
    }
}