import { url,endpoints } from "@date/endpoints.json";
import { buzzPostSection } from '@pages/Buzz.page'

describe('US02 | OrangeHRM | Buzz | eliminar post',()=>{
    beforeEach('',()=>{
        cy.visit(url)
        cy.login()
        cy.wait(3000)
    })
    it('TC1|admin intenta eliminar una publicación', () => {
        cy.visit(url+endpoints.buzz)
        cy.wait(3000)
        //cy.get('[data-v-d7b71de4]').eq(1).find('[data-v-8a31f039]').eq(0).find('[class="oxd-icon-button"]').eq(0)
        buzzPostSection.deletePost(0,0)
        cy.get('[class="orangehrm-modal-header"]').find('[data-v-8f9701a2]').should('contain.text','Are you Sure?')
        cy.get('[role="document"]').find('[type="button"]').eq(0)
        cy.get('[role="document"]').find('[type="button"]').eq(1)
    });
    it('TC2|admin elimina un post', () => {
        cy.visit(url+endpoints.buzz)
        cy.wait(3000)
        cy.get('[class="oxd-text oxd-text--p orangehrm-buzz-post-time"]').eq(0).then((date)=>{
            let dateString:string=date.text()
            console.log(dateString)
            buzzPostSection.deletePost(1,1)
            cy.get('[aria-live="assertive"]') 
            cy.get('[class="oxd-text oxd-text--p orangehrm-buzz-post-time"]').eq(0).should('not.contain.text',`${dateString}`)
        })
        
    });

    it('TC3|admin cancela la eliminación del post', () => {
        cy.visit(url+endpoints.buzz)
        cy.wait(3000)
        cy.get('[class="oxd-text oxd-text--p orangehrm-buzz-post-time"]').eq(0).then((date)=>{
            let dateString:string=date.text()
            console.log(dateString)
            buzzPostSection.deletePost(1,0) 
            cy.get('[class="oxd-text oxd-text--p orangehrm-buzz-post-time"]').eq(0).should('contain.text',`${dateString}`)
        })
        
    });
})