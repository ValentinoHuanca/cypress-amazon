class BuzzPostSection{
    postSection:()=>Cypress.Chainable<JQuery<HTMLElement>>
    postSingle:()=>Cypress.Chainable<JQuery<HTMLElement>>
    btnMenuThreePoints:()=>Cypress.Chainable<JQuery<HTMLElement>>
    btnDelete:()=>Cypress.Chainable<JQuery<HTMLElement>>
    popUpDelete:()=>Cypress.Chainable<JQuery<HTMLElement>>
    btnDelPostYesOrNo:(num1:number)=>Cypress.Chainable<JQuery<HTMLElement>>

    constructor(){
        this.postSection=()=>cy.get('[data-v-d7b71de4]').eq(1)
        this.postSingle=()=>this.postSection().find('[data-v-8a31f039]').eq(0)
        this.btnMenuThreePoints=()=>this.postSingle().find('[class="oxd-icon-button"]').eq(0)
        this.btnDelete=()=>cy.get('[role="menu"]').find('[data-v-28463d71]').eq(0)

        this.popUpDelete=()=>cy.get('[role="document"]')
        this.btnDelPostYesOrNo=(num1:number)=>this.popUpDelete().find('[type="button"]').eq(num1)
        
    }

    deletePost(ver:number,num:number){
        this.btnMenuThreePoints().click()
        this.btnDelete().click()
        if(ver==1){
            this.btnDelPostYesOrNo(num).click()
        }
        else{}
        
    }
}

export const buzzPostSection = new BuzzPostSection