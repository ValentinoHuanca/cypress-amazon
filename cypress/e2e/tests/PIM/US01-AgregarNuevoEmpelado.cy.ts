import { endpoints,url } from "@date/endpoints.json";
import { pimAddEmployee,pimEmployeeList } from "@pages/PIM.page";
import { adUserMana } from "@pages/admin.page";
import { faker } from "@faker-js/faker";

describe('OrangeHRM | PIM | Agregar un nuevo empleado con usuario',()=>{
    var uniUser:string
    var uniId:string
    beforeEach('Preconditions',()=>{
        cy.visit(url)
        cy.login()
        cy.wait(3000)
    })
    it('TC1|incorporar un nuevo empleado con usuario al sistema de gestión', () => {
        cy.visit(url+endpoints.PIM.AddEmployee)
        pimAddEmployee.addEmployeeRandom()
        cy.get('[aria-live="assertive"]')//.should('include','Succesfully Saved')
        cy.get('@nameComAndId').then((arrayData:any)=>{
            let firstName:string=arrayData[0]
            let lastName:string=arrayData[1]
            let nameComplete:string=arrayData[2]
            let iD:string=arrayData[3]
            uniId=iD
            let username:string=arrayData[4]
            uniUser=username
            cy.url().should('include','empNumber')
            cy.get('[class="oxd-text oxd-text--h6 --strong"]').should('contain.text',`${firstName} ${lastName}`)
            cy.wait(3000);
            cy.visit(url+endpoints.PIM.EmployeeList)
            pimEmployeeList.searchEmployee(nameComplete,iD)
            cy.get('[data-v-6c07a142]').eq(0).should('contain.text',`${iD}`)
            cy.get('[data-v-6c07a142]').eq(1).should('contain.text',`${nameComplete}`)
            cy.wait(3000);
            cy.visit(url+endpoints.admin.UserManagement.user)
            adUserMana.searchEmployee(username,`${firstName} ${lastName}`)
            cy.get('[data-v-0d5ef602]').eq(1).find('[data-v-6c07a142]').eq(0).should('contain.text',`${username}`)
            cy.get('[data-v-0d5ef602]').eq(1).find('[data-v-6c07a142]').eq(2).should('contain.text',`${firstName} ${lastName}`)
        })
    });
    it('TC2|NO incorpora un nuevo empleado con usuario al sistema de gestión y que se disparen las business rules', () => {
        cy.visit(url+endpoints.PIM.AddEmployee)
        const name:string=faker.string.alpha(31)
        const middleN:string=faker.string.alpha(31)
        const lastN:string=faker.string.alpha(31)
        const id:string=`${uniId}`
        const userN:string=`${uniUser}`
        const passW:string=faker.internet.password({length:65})
        const passWF:string=faker.internet.password({length:65})
        pimAddEmployee.addEmployeeDate(name,middleN,lastN,id,userN,passW,passWF)
        const atr:string='[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]'
        cy.get(atr).eq(0).should('contain.text',"Should not exceed 30 characters")
        cy.get(atr).eq(1).should('contain.text',"Should not exceed 30 characters")
        cy.get(atr).eq(2).should('contain.text',"Should not exceed 30 characters")
        cy.get(atr).eq(3).should('contain.text',"Employee Id already exists")
        cy.get(atr).eq(4).should('contain.text',"Username already exists")
        cy.get(atr).eq(5).should('contain.text',"Should not exceed 64 characters")
        cy.get(atr).eq(6).should('contain.text',"Passwords do not match")
        cy.section('cambio en el username y el password')
        cy.get('[class="oxd-input oxd-input--active oxd-input--error"]').eq(1).type('{selectAll}{del}')
        cy.wait(2000)
        cy.get('[class="oxd-input oxd-input--active oxd-input--error"]').eq(1).type('{selectAll}{del}')
        cy.wait(2000)
        cy.get('[type="submit"]').click({force:true})
        cy.get(atr).eq(4).should('contain.text',"Required")
        cy.get(atr).eq(5).should('contain.text',"Required")
        
    });
    it('TC3|NO incorpora un nuevo empleado con usuario al sistema de gestión y que se disparen las business rules', () => {
        cy.visit(url+endpoints.PIM.AddEmployee)
        const name:string=" "
        const middleN:string=faker.string.alpha(31)
        const lastN:string=" "
        const id:string=`${faker.number.int({min: 10000000000, max: 10000000001})}`
        const userN:string=faker.string.alpha(41)
        const passW:string=faker.internet.password({length:6})
        const passWF:string=faker.internet.password({length:65})
        pimAddEmployee.addEmployeeDate(name,middleN,lastN,id,userN,passW,passWF)
        const atr:string='[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]'
        cy.get(atr).eq(0).should('contain.text',"Required")
        cy.get(atr).eq(1).should('contain.text',"Should not exceed 30 characters")
        cy.get(atr).eq(2).should('contain.text',"Required")
        cy.get(atr).eq(3).should('contain.text',"Should not exceed 10 characters")
        cy.get(atr).eq(4).should('contain.text',"Should not exceed 40 characters")
        cy.get(atr).eq(5).should('contain.text',"Should have at least 7 characters")
        cy.get(atr).eq(6).should('contain.text',"Passwords do not match")
        cy.section('cambio en el username y el password')
        cy.get('[class="oxd-input oxd-input--active oxd-input--error"]').eq(1).type(`{selectAll}{del}${faker.string.alpha(4)}`)
        cy.wait(2000)
        cy.get('[class="oxd-input oxd-input--active oxd-input--error"]').eq(1).type('{selectAll}{del}kkkkkkkkkkkkkkkkkk')
        cy.wait(2000)
        cy.get('[type="submit"]').click({force:true})
        cy.get(atr).should('contain.text',"Should be at least 5 characters")
        cy.get('[class="oxd-input-group oxd-input-field-bottom-space"]').eq(8).find(atr).should('contain.text',"Your password must contain minimum 1 number")        
    });
    it('TC4|NO incorpora un nuevo empleado con usuario al sistema de gestión y que se disparen las business rules', () => {
        cy.visit(url+endpoints.PIM.AddEmployee)
        const name:string=faker.string.alpha(31)
        const middleN:string=faker.string.alpha(31)
        const lastN:string=faker.string.alpha(31)
        const id:string=`${uniId}`
        const userN:string=`${uniUser}`
        const passW:string='TTTTTTTTTTTTTTTTTTT'
        const passWF:string=faker.internet.password({length:65})
        pimAddEmployee.addEmployeeDate(name,middleN,lastN,id,userN,passW,passWF)
        const atr:string='[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]'
        cy.get(atr).eq(0).should('contain.text',"Should not exceed 30 characters")
        cy.get(atr).eq(1).should('contain.text',"Should not exceed 30 characters")
        cy.get(atr).eq(2).should('contain.text',"Should not exceed 30 characters")
        cy.get(atr).eq(3).should('contain.text',"Employee Id already exists")
        cy.get(atr).eq(4).should('contain.text',"Username already exists")
        cy.get(atr).eq(5).should('contain.text',"Your password must contain minimum 1 lower-case letter")
        cy.get(atr).eq(6).should('contain.text',"Passwords do not match")
        
    });
})