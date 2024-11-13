import { endpoints,url } from "@date/endpoints.json";
import { pimAddEmployee,pimEmployeeList } from "@pages/PIM.page";
import { adUserMana } from "@pages/admin.page";

describe('',()=>{
    beforeEach('P',()=>{
        cy.visit(url)
        cy.login()
        cy.visit(url+endpoints.PIM.AddEmployee)
    })
    it('TC1', () => {
        pimAddEmployee.addEmployeeRandom()
        cy.get('[aria-live="assertive"]')//.should('include','Succesfully Saved')
        cy.get('@nameComAndId').then((arrayData:any)=>{
            let firstName:string=arrayData[0]
            let lastName:string=arrayData[1]
            let nameComplete:string=arrayData[2]
            let iD:string=arrayData[3]
            let username:string=arrayData[4]
            cy.url().should('include','empNumber')
            cy.get('[class="oxd-text oxd-text--h6 --strong"]').should('contain.text',`${firstName} ${lastName}`)
            cy.visit(url+endpoints.PIM.EmployeeList)
            pimEmployeeList.searchEmployee(nameComplete,iD)
            cy.get('[data-v-6c07a142]').eq(0).should('contain.text',`${iD}`)
            cy.get('[data-v-6c07a142]').eq(1).should('contain.text',`${nameComplete}`)
            cy.visit(url+endpoints.admin.UserManagement.user)
            adUserMana.searchEmployee(username,`${firstName} ${lastName}`)
            cy.get('[data-v-0d5ef602]').eq(1).find('[data-v-6c07a142]').eq(0).should('contain.text',`${username}`)
            cy.get('[data-v-0d5ef602]').eq(1).find('[data-v-6c07a142]').eq(2).should('contain.text',`${firstName} ${lastName}`)
        })
    });
})