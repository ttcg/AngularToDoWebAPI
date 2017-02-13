﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { Itodo } from './todo'
import { TodoService } from './todo.service';
import { MessageModel } from '../shared/message.component';

@Component({
    moduleId: module.id,
    templateUrl: "todo-add.component.html"
})
export class TodoAddComponent {
    // initialize as the blank object
    // if you use Class instead of Iterface, no need to do this
    todoModel: Itodo = { todoId: null, description: '' };
    //Message: string;
    //MessageType: number;
    messageModel: MessageModel;

    constructor(private _todoService: TodoService,
        private titleService: Title,
        private _router: Router) {
        this.titleService.setTitle("Add Todo Item")
    }
    
    AddItem(): void {
        //this.messageModel = new MessageModel();        
        //this.messageModel.Message = "by using Blank Constructor";
        //this.messageModel.MessageType = 2;

        this.messageModel = new MessageModel("Success message by Constructor Passing Parameters", 1);

        //this.messageModel = new messageModel();

        //this.todoModel.description = this.todoModel.description.trim();
        //if (!this.todoModel.description) {
        //    this.Message = "Description must not be blank.";
        //    this.MessageType = 2;
        //    return;
        //}
        //this.todoModel.todoId = Math.floor(Math.random() * 100); // generate randomID

        //let result = this._todoService.addNewTodo(this.todoModel);

        //if (result > 0) {
        //    this.Message = "New Item has been added";
        //    this.MessageType = 1;
        //}
        //else {
        //    this.Message = "Error occured!  Try again.";
        //    this.MessageType = 2;
        //}
    }

    onBack(): void {
        this._router.navigate(['/todo']);
    }
}