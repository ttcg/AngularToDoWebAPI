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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var platform_browser_1 = require('@angular/platform-browser');
var todo_service_1 = require('./todo.service');
var message_component_1 = require('../shared/message.component');
var TodoAddComponent = (function () {
    function TodoAddComponent(_todoService, titleService, _router) {
        this._todoService = _todoService;
        this.titleService = titleService;
        this._router = _router;
        // initialize as the blank object
        // if you use Class instead of Iterface, no need to do this
        this.todoModel = { todoId: null, description: '' };
        this.titleService.setTitle("Add Todo Item");
    }
    TodoAddComponent.prototype.AddItem = function () {
        //this.messageModel = new MessageModel();        
        //this.messageModel.Message = "by using Blank Constructor";
        //this.messageModel.MessageType = 2;
        this.messageModel = new message_component_1.MessageModel("Success message by Constructor Passing Parameters", 1);
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
    };
    TodoAddComponent.prototype.onBack = function () {
        this._router.navigate(['/todo']);
    };
    TodoAddComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: "todo-add.component.html"
        }), 
        __metadata('design:paramtypes', [todo_service_1.TodoService, platform_browser_1.Title, router_1.Router])
    ], TodoAddComponent);
    return TodoAddComponent;
}());
exports.TodoAddComponent = TodoAddComponent;
//# sourceMappingURL=todo-add.component.js.map