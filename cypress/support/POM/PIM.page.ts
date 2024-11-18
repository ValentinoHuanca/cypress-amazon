import { faker } from "@faker-js/faker";
import { randomNumInt } from "@helper/functions";

class PimAddEmployee {
    formAddEmployeeNotImage:()=>Cypress.Chainable<JQuery<HTMLElement>>
    firstName:()=>Cypress.Chainable<JQuery<HTMLElement>>
    middleName:()=>Cypress.Chainable<JQuery<HTMLElement>>
    lastName:()=>Cypress.Chainable<JQuery<HTMLElement>>
    employeeId:()=>Cypress.Chainable<JQuery<HTMLElement>>
    createLoginDetailsBtn:()=>Cypress.Chainable<JQuery<HTMLElement>>
    username:()=>Cypress.Chainable<JQuery<HTMLElement>>
    statusEmployeeEnaDis:(status:number)=>Cypress.Chainable<JQuery<HTMLElement>>
    //statusEmployeeDis:()=>Cypress.Chainable<JQuery<HTMLElement>>
    password:()=>Cypress.Chainable<JQuery<HTMLElement>>
    conPassword:()=>Cypress.Chainable<JQuery<HTMLElement>>
    saveBtn:()=>Cypress.Chainable<JQuery<HTMLElement>>

    constructor(){
        this.formAddEmployeeNotImage=()=>cy.get('[class="orangehrm-employee-form"]')
        this.firstName=()=>this.formAddEmployeeNotImage().find('[name="firstName"]')
        this.middleName=()=>this.formAddEmployeeNotImage().find('[name="middleName"]')
        this.lastName=()=>this.formAddEmployeeNotImage().find('[name="lastName"]')
        this.employeeId=()=>this.formAddEmployeeNotImage().find('[class="oxd-input oxd-input--active"]')
        this.createLoginDetailsBtn=()=>this.formAddEmployeeNotImage().find('[data-v-8e4757dc').eq(3)
        this.username=()=>this.formAddEmployeeNotImage().find('[autocomplete="off"]').eq(0)
        this.statusEmployeeEnaDis=(status:number)=>this.formAddEmployeeNotImage().find('[class="oxd-radio-wrapper"]').eq(status)
        this.password=()=>this.formAddEmployeeNotImage().find('[autocomplete="off"]').eq(1)
        this.conPassword=()=>this.formAddEmployeeNotImage().find('[autocomplete="off"]').eq(2)
        this.saveBtn=()=>cy.get('[data-v-10d463b7]').eq(1)


    }

    addEmployeeRandom(){
        const nameType:string=faker.person.firstName()
        const middleNameT:string=faker.person.middleName()
        const nameComplete:string=`${nameType} ${middleNameT}`
        const lastNameT:string=faker.person.lastName()
        const iDT:number=faker.number.int({min: 1000, max: 9999})
        const statusForNum:number=randomNumInt(0,1)
        const passwordType:string="3"+faker.internet.password({length:15})
        const usernameT:string=faker.internet.username({firstName:nameType})
        cy.wrap([nameType,lastNameT,nameComplete,iDT,usernameT]).as('nameComAndId')
        this.firstName().type(nameType)
        this.middleName().type(middleNameT)
        this.lastName().type(lastNameT)
        //this.employeeId().type('')
        this.employeeId().type(`{selectAll}{del}${iDT}`)
        this.createLoginDetailsBtn().click()
        this.username().type(usernameT)
        this.statusEmployeeEnaDis(statusForNum).click()
        this.password().type(passwordType)
        this.conPassword().type(passwordType)
        this.saveBtn().click({force:true})

    }

    addEmployeeDate(nameD:string,middleNameD:string,lastNameD:string,idD:string,usernameD:string,passwordD:string,passwordFalse:string){
        this.firstName().type(nameD)
        this.middleName().type(middleNameD)
        this.lastName().type(lastNameD)
        //this.employeeId().type('')
        this.employeeId().type(`{selectAll}{del}${idD}`)
        this.createLoginDetailsBtn().click()
        this.username().type(usernameD)
        this.statusEmployeeEnaDis(0).click()
        this.password().type(passwordD)
        this.conPassword().type(passwordFalse)
        this.saveBtn().click({force:true})
    }
}

class PimEmployeeList {
    formEmployeeInformation:()=>Cypress.Chainable<JQuery<HTMLElement>>
    employeeName:()=>Cypress.Chainable<JQuery<HTMLElement>>
    employeeId:()=>Cypress.Chainable<JQuery<HTMLElement>>
    searchBtn:()=>Cypress.Chainable<JQuery<HTMLElement>>

    constructor(){
        this.formEmployeeInformation=()=>cy.get('[class="oxd-form"]')
        this.employeeName=()=>this.formEmployeeInformation().find('[placeholder="Type for hints..."]').eq(0)
        this.employeeId=()=>this.formEmployeeInformation().find('[data-v-1f99f73c]')
        this.searchBtn=()=>this.formEmployeeInformation().find('[type="submit"]')
    }

    searchEmployee(name:string,id:string){
        this.employeeName().type(name)
        this.employeeId().type(id)
        this.searchBtn().click()

    }

}

export const pimAddEmployee = new PimAddEmployee

export const pimEmployeeList = new PimEmployeeList

