
export class CreateActionsItemsPage{

    protected itemNameInput = '[placeholder="What needs to be done?"]';
    protected itemTitle = '[data-testid="todo-title"]';
    protected itemCount = '[data-testid="todo-count"]';
    protected allStatusFilter = '.selected';
    protected activeStatusFilter = 'a[href="#/active"]';
    protected completedStatusFilter = 'a[href="#/completed"]';
    protected checkOption = '[data-testid="todo-item"] .view .toggle';
    protected clearOption = '.clear-completed';
    protected deletedOption = '.destroy';
    protected todoList = '.todo-list';
}