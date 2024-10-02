import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { BaseActions } from '../actions/base.action';
import { CreateItemsActions } from '../actions/create-items.actions';

const createItemActions = new CreateItemsActions();
const baseActions = new BaseActions();

Given(/^that the user is in the "(Home|Active|Completed)" page$/, (option: string)=> {
    baseActions.goToThePage(option);
});
When(/^the user enters the data "(.*?)"$/, (newTodoItem: string)=> {
    createItemActions.createNewTodoItem(newTodoItem);
});
When(/^the user filters by "(All|Active|Completed)" status$/, (status: string)=> {
    createItemActions.selectStatus(status);
});
When(/^the user clicks on the "(New todo|check|clear completed|delete)" option$/, (option: string)=> {
    createItemActions.clickOnOption(option);
});
Then(/^the new todo item is created in Active status$/, (newTodoItem: string)=> {
    createItemActions.verifyNewItem(newTodoItem);
});
Then(/^the total number of items is equal to that indicated by the label items left$/, ()=> {
    createItemActions.verifyItemsTotal();
});
Then(/^the todo item is successfully "(changed status|deleted)"$/, (option: string)=> {
    createItemActions.verifyItemStatus(option);
});
