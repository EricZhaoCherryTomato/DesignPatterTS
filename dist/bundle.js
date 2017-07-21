(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//TypeScript Quick Start
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName + " " + person.middleInitial;
}
var user = new Student("Jane", "M.", "User");
var BBQPizza = (function () {
    function BBQPizza() {
    }
    BBQPizza.prototype.PrintName = function () {
        return "BBQ Pizza";
    };
    return BBQPizza;
}());
var HawaiiPizza = (function () {
    function HawaiiPizza() {
    }
    HawaiiPizza.prototype.PrintName = function () {
        return "Hawaii Pizza";
    };
    return HawaiiPizza;
}());
var PizzaStack = (function () {
    function PizzaStack() {
        this.pizzas = [];
    }
    PizzaStack.prototype.Add = function (pizza) {
        this.pizzas.push(pizza);
    };
    PizzaStack.prototype.PrintName = function () {
        var name = "Pizza Name(s): ";
        for (var _i = 0, _a = this.pizzas; _i < _a.length; _i++) {
            var pizza = _a[_i];
            name += (pizza.PrintName() + " ");
        }
        return name;
    };
    return PizzaStack;
}());
var pizzaStack = new PizzaStack();
pizzaStack.Add(new BBQPizza());
pizzaStack.Add(new HawaiiPizza());
document.body.innerHTML = pizzaStack.PrintName();
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLHdCQUF3QjtBQUN4QjtJQUVJLGlCQUFtQixTQUFnQixFQUFTLGFBQW9CLEVBQVMsUUFBZTtRQUFyRSxjQUFTLEdBQVQsU0FBUyxDQUFPO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQU87UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFPO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxhQUFhLEdBQUcsR0FBRyxHQUFHLFFBQVEsQ0FBQztJQUNyRSxDQUFDO0lBQ0wsY0FBQztBQUFELENBTEEsQUFLQyxJQUFBO0FBUUQsaUJBQWlCLE1BQWE7SUFDMUIsTUFBTSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsYUFBYSxDQUFDO0FBQzdGLENBQUM7QUFFRCxJQUFJLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBUzdDO0lBQUE7SUFJQSxDQUFDO0lBSEEsNEJBQVMsR0FBVDtRQUNDLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDcEIsQ0FBQztJQUNGLGVBQUM7QUFBRCxDQUpBLEFBSUMsSUFBQTtBQUNEO0lBQUE7SUFJQSxDQUFDO0lBSEEsK0JBQVMsR0FBVDtRQUNDLE1BQU0sQ0FBQyxjQUFjLENBQUM7SUFDdkIsQ0FBQztJQUNGLGtCQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFFRDtJQUVDO1FBQ0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVELHdCQUFHLEdBQUgsVUFBSSxLQUFZO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDhCQUFTLEdBQVQ7UUFDQyxJQUFJLElBQUksR0FBVSxpQkFBaUIsQ0FBQztRQUNwQyxHQUFHLENBQUMsQ0FBYyxVQUFXLEVBQVgsS0FBQSxJQUFJLENBQUMsTUFBTSxFQUFYLGNBQVcsRUFBWCxJQUFXO1lBQXhCLElBQUksS0FBSyxTQUFBO1lBQ2IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNiLENBQUM7SUFDRixpQkFBQztBQUFELENBakJBLEFBaUJDLElBQUE7QUFFRCxJQUFJLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0FBQ2xDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQy9CLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBRWxDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxTQUFTLEVBQUUsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvL1R5cGVTY3JpcHQgUXVpY2sgU3RhcnRcclxuY2xhc3MgU3R1ZGVudCB7XHJcbiAgICBmdWxsTmFtZTogc3RyaW5nO1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGZpcnN0TmFtZTpzdHJpbmcsIHB1YmxpYyBtaWRkbGVJbml0aWFsOnN0cmluZywgcHVibGljIGxhc3ROYW1lOnN0cmluZykge1xyXG4gICAgICAgIHRoaXMuZnVsbE5hbWUgPSBmaXJzdE5hbWUgKyBcIiBcIiArIG1pZGRsZUluaXRpYWwgKyBcIiBcIiArIGxhc3ROYW1lO1xyXG4gICAgfVxyXG59XHJcblxyXG5pbnRlcmZhY2UgUGVyc29uIHtcclxuICAgIGZpcnN0TmFtZTogc3RyaW5nO1xyXG5cdGxhc3ROYW1lOiBzdHJpbmc7XHJcblx0bWlkZGxlSW5pdGlhbDogc3RyaW5nO1xyXG59XHJcbiBcclxuZnVuY3Rpb24gZ3JlZXRlcihwZXJzb246UGVyc29uKSB7XHJcbiAgICByZXR1cm4gXCJIZWxsbywgXCIgKyBwZXJzb24uZmlyc3ROYW1lICsgXCIgXCIgKyBwZXJzb24ubGFzdE5hbWUgKyBcIiBcIiArIHBlcnNvbi5taWRkbGVJbml0aWFsO1xyXG59XHJcblxyXG52YXIgdXNlciA9IG5ldyBTdHVkZW50KFwiSmFuZVwiLCBcIk0uXCIsIFwiVXNlclwiKTtcclxuXHJcbi8vZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgPSBncmVldGVyKHVzZXIpO1xyXG5cclxuXHJcbi8vQ29tcG9zaXQgUGF0dGVyblxyXG5pbnRlcmZhY2UgSVBpenphIHtcclxuXHRQcmludE5hbWUoKSA6c3RyaW5nO1xyXG59XHJcbmNsYXNzIEJCUVBpenphIGltcGxlbWVudHMgSVBpenphe1xyXG5cdFByaW50TmFtZSgpe1xyXG5cdFx0cmV0dXJuIFwiQkJRIFBpenphXCI7XHJcblx0fVxyXG59XHJcbmNsYXNzIEhhd2FpaVBpenphIGltcGxlbWVudHMgSVBpenphe1xyXG5cdFByaW50TmFtZSgpe1xyXG5cdFx0cmV0dXJuIFwiSGF3YWlpIFBpenphXCI7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBQaXp6YVN0YWNrIGltcGxlbWVudHMgSVBpenphe1xyXG5cdHBpenphczogQXJyYXk8SVBpenphPjtcclxuXHRjb25zdHJ1Y3Rvcigpe1xyXG5cdFx0dGhpcy5waXp6YXMgPSBbXTtcclxuXHR9XHJcblxyXG5cdEFkZChwaXp6YTpJUGl6emEpe1xyXG5cdFx0dGhpcy5waXp6YXMucHVzaChwaXp6YSk7XHJcblx0fVxyXG5cclxuXHRQcmludE5hbWUoKXtcclxuXHRcdHZhciBuYW1lOnN0cmluZyA9IFwiUGl6emEgTmFtZShzKTogXCI7XHJcblx0XHRmb3IgKGxldCBwaXp6YSBvZiB0aGlzLnBpenphcykge1xyXG5cdFx0XHRuYW1lICs9IChwaXp6YS5QcmludE5hbWUoKSArIFwiIFwiKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBuYW1lO1xyXG5cdH1cclxufVxyXG5cclxudmFyIHBpenphU3RhY2sgPSBuZXcgUGl6emFTdGFjaygpO1xyXG5waXp6YVN0YWNrLkFkZChuZXcgQkJRUGl6emEoKSk7XHJcbnBpenphU3RhY2suQWRkKG5ldyBIYXdhaWlQaXp6YSgpKTtcclxuXHJcbmRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gcGl6emFTdGFjay5QcmludE5hbWUoKTsiXX0=
