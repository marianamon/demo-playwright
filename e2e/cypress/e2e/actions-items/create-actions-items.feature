Feature: Actions with Items

    Scenario Outline: Create a new todo item
        Given that the user is in the "Home" page
        And the user clicks on the "New todo" option
        When the user enters the data <new todo item>
        Then the new todo item is created in Active status
        Examples:
          | new todo item | 
          | "Run"    | 
          | "Swin"   | 
          | "sleep"  | 

    Scenario Outline: Duplicate a todo item
       Given that the user is in the "Home" page
        And the user clicks on the "New todo" option
        When the user enters the data <new todo item>
        Then the new todo item is created in Active status
        Examples:
          | new todo item | 
          | "Run"  | 
          | "Run"  | 
          
    Scenario Outline: Validate that Number of items left is the same as count of active todo items in the list with All filter
        Given that the user is in the "Home" page
        And the user clicks on the "New todo" option
        And the user enters the data <new todo item> 
        When the user filters by "All" status
        Then the total number of items is equal to that indicated by the label items left
         Examples:
          | new todo item | 
          | "Car"  | 

    @create_todoItem(1)
    Scenario Outline: Change a todo item from active to completed status
       Given that the user is in the "Home" page
       And the user clicks on the "New todo" option
       And the user enters the data <new todo item> 
       And the user clicks on the "check" option
       When the user filters by "Completed" status
       Then the todo item is successfully "changed status"
        Examples:
          | new todo item | 
          | "Car"  | 

    @create_todoItem(1)
    Scenario Outline: Clear completed todo items
       Given that the user is in the "Home" page
       And the user clicks on the "New todo" option
       And the user enters the data <new todo item> 
       And the user filters by "Active" status
       And the user clicks on the "check" option
       When the user clicks on the "clear completed" option
       Then the todo item is successfully "deleted"
       Examples:
          | new todo item | 
          | "Dance"  | 

    @create_todoItem(1)
    Scenario Outline: Delete a todo item in active status
        Given that the user is in the "Home" page
        And the user clicks on the "New todo" option
        And the user enters the data <new todo item> 
        When the user filters by "Active" status
        And the user clicks on the "delete" option
        Then the todo item is successfully "deleted"
        Examples:
          | new todo item | 
          | "Sleep"  | 

    @create_todoItem(1)
    Scenario Outline: Delete a todo item in Completed status
        Given that the user is in the "Home" page
        And the user clicks on the "New todo" option
        And the user enters the data <new todo item> 
        And the user clicks on the "check" option
        When the user filters by "Completed" status
        And the user clicks on the "delete" option
        Then the todo item is successfully "deleted"
        Examples:
          | new todo item | 
          | "Run"  | 
