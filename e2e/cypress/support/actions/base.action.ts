import { BasePage } from "../../pages/base.page"
import { AppPagesEnum } from "../../src/shared/app-pages.enum";
import { LoginApi } from "../../services/api-login";

const loginApi = new LoginApi();

export class BaseActions extends BasePage{
   generateTokenAndAuthentication(){
    loginApi.visitAuthenticated(Cypress.env('AUTH_BASE_URL'))  
    }
    
    goToThePage(option: string){
        cy.wait(1000);
        switch (option){
            case AppPagesEnum.HOME:
                cy.visit(this.itemsCreationPageUrl);
                break;
            case AppPagesEnum.ACTIVE:
                cy.visit(this.itemsActivePageUrl);
                break;
            case AppPagesEnum.COMPLETED:
                cy.visit(this.itemsCompletedPageUrl);
                break;
            default:
                throw Error(`Wrong page option: ${option}`);

        }
    }
    
}