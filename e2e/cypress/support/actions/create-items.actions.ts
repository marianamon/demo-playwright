import cypress from "cypress";
import { CreateActionsItemsPage } from "../../pages/create-actions-items.page";
import { OptionTextEnum } from "../../src/shared/option-text.enum";
import { Status } from "../../src/shared/status.enum";


export class CreateItemsActions extends CreateActionsItemsPage {
    createNewTodoItem(newTodoItem: string){
        cy.wait(1000);
        cy.get(this.itemNameInput).type(newTodoItem).type('{enter}');
    }

    selectStatus(status: string){
        cy.wait(1000)
        switch(status){
          case Status.ALL:
              cy.get(this.allStatusFilter).should('be.visible').contains('All').click({force:true});
              break;
          case Status.ACTIVE:
            cy.get('a').contains('Active').click();
              break;
          case Status.COMPLETED:
            cy.get('a').contains('Completed').click();
              break;
          default:
              throw Error(`Wrong botton option: ${status}`);
        }
    }
  
    clickOnOption(option: string){
        cy.wait(1000)
        switch(option){
          case OptionTextEnum.NEW:
              cy.get(this.itemNameInput).should('be.visible').click({force:true});
              break;
          case OptionTextEnum.CHECK:
              cy.get(this.checkOption).click({force:true});
              break;
          case OptionTextEnum.CLEAR:
              cy.get(this.clearOption).should('be.visible').contains('Clear completed').click({force:true});
              break;
          case OptionTextEnum.DELETED:
              cy.get(this.itemTitle).first().click();
              cy.get(this.deletedOption).click({force:true});
              break; 
          default:
              throw Error(`Wrong botton option: ${option}`);
        }
    }

    verifyNewItem(newTodoItem: string){
        cy.get(this.itemTitle).should('be.visible');
    }

    verifyItemsTotal(){
        let resultCount = 0;
        let expectedCount = 0;
        cy.get(this.itemCount).should('be.visible');
        cy.get(this.todoList).then($elements => {
            resultCount = $elements.length;
            cy.log(`Total items: ${resultCount}`);
            cy.get(this.itemCount).then($countElement => {
            expectedCount = parseInt($countElement.text().trim(), 10);
            cy.log(`Expected count: ${expectedCount}`);

            expect(resultCount).to.equal(expectedCount);
            });
        });
    }

    verifyItemStatus(option: string){
        if (option === 'deleted') {
            cy.get(this.itemTitle).should('not.exist');
        } else {
            cy.get(this.itemTitle).should('be.visible');
           
        }
    }

}