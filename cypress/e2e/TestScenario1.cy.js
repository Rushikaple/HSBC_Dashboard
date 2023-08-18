
describe('HBSC Login Test',()=>{
    beforeEach(()=>{
                
        cy.visit('https://www.hsbc.co.in/')
    })
    it('validate login functionallity',()=>{

             cy.get('.header-logo.lg-2').should('be.visible') // Validate HSBC Bank logo

            cy.title().should('include', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit') // Validate Home Page Title
    
            cy.get('div.header-mobile-top.hide-on-desktop').invoke('attr', 'style', 'display: block') // modify the CSS property of the parent element
             .find('a.selected-item.login-button.only-one-link').click();

            cy.get('.pull-left.heading.t28l').should('be.visible') // Validate Log On header in Login page

            cy.get('#username_submit_btn').should('be.visible').should('be.disabled') // initially submit_btn is disabled

            cy.get('#username').type('admin123@example.com')//type any random email in username field

            cy.get('#username_submit_btn').should('be.visible')//submit_btn is enabled after entering email

            cy.get('#rememberMe').should('not.be.checked') // "Remember me" checkbox is not checked by default

            cy.get('.icon.icon-circle-help-solid.help-icon').should('be.visible') //Validate the presence of a question mark tooltip on the page.

            cy.get('.icon.icon-circle-help-solid.help-icon').click() // click on tooltip on the page

            cy.get('.t25l').should('be.visible')//validate the Hearder on pop-up as Username

            cy.viewport(970, 705)//change viewport to get close btn

            cy.get('#Close_dob_exception').should('be.visible')// Validate the presence of a "Close" button in the new pop-up screen

            cy.get('#Close_dob_exception').click()// Click on the "Close" button present in the new pop-up screen
        

    })
})
 