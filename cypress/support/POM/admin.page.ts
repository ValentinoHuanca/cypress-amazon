class AdUserMana{
    systemUser:()=>Cypress.Chainable<JQuery<HTMLElement>>
    username:()=>Cypress.Chainable<JQuery<HTMLElement>>
    userRole:()=>Cypress.Chainable<JQuery<HTMLElement>>
    userRlOption:()=>Cypress.Chainable<JQuery<HTMLElement>>
    employeeName:()=>Cypress.Chainable<JQuery<HTMLElement>>
    //status:()=>Cypress.Chainable<JQuery<HTMLElement>>
    searchBtn:()=>Cypress.Chainable<JQuery<HTMLElement>>

    constructor(){
        this.systemUser=()=>cy.get('[class="oxd-table-filter-area"]')
        this.username=()=>this.systemUser().find('[data-v-1f99f73c]')
        this.userRole=()=>this.systemUser().find('[tabindex="0"]').eq(0)
        this.userRlOption=()=>this.systemUser().find('[role="option"]').eq(2)
        this.employeeName=()=>this.systemUser().find('[data-v-75e744cd]').eq(2)
        this.searchBtn=()=>this.systemUser().find('[type="submit"]')
    }

    searchEmployee(username:string,employeeNameT:string){
        this.username().type(username)
        this.userRole().click()
        this.userRlOption().click()
        //this.employeeName().type(employeeNameT)
        this.searchBtn().click()
    }

}

export const adUserMana = new AdUserMana