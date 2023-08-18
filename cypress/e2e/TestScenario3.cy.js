describe('HSBC Credit Card Flow',()=>{
    beforeEach(()=>{
        cy.visit('https://www.hsbc.co.in/')
    })

    it('navigate to credit cards page', ()=>{
        cy.visit('https://www.hsbc.co.in/') //visit home page
       
        cy.get('.header-main-navigation-title:contains("Banking")').eq(1).trigger('mouseover')//Hover cursor on Banking menu

        cy.get('div.doormat-menu').invoke('attr', 'style', 'display:visible').find('.doormat-heading-link:contains("Credit Cards")').eq(2).click({force:true})//Click on Credit Cards link

        cy.get('.A-TYP38L-RW-ALL.text-container.text').should('be.visible')//Validate Credit Card as a header text

        cy.get('.A-BTNP-RW-ALL').should('exist')//Validate Apply Now button
  
        cy.get('.productModule').should('have.length', 4)// four types of Credit Card options 

        cy.get('#listing_main_image_3').should('have.attr', 'alt', 'HSBC Visa Cashback Credit Card')//Validate first credit Card image attribute is HSBC Visa Cashback Credit Card

        cy.get('.A-LNKND38L-RW-ALL.text-container.text').should('contain', 'HSBC Cashback Credit Card')//Card header text is HSBC Cashback Credit Card

        cy.get('#listing_main_button_1').should('contain', 'Compare cards')//Validate first credit Card has attached Compare cards button

        cy.get('#listing_main_button_2').should('contain', 'Find out more')//validate first credit card has attached find out more button
            
        cy.get('#listing_main_button_3').should('contain', 'Apply now')//Validate first credit card has attached Apply now button

        cy.get('#listing_main_button_1').click()//click on first credit card compare card button

        cy.get('.close-button').should('exist')//Validate the new pop up has a close button

        cy.get('h2#title-pp_tools_productComparator_4').should('contain', 'Select cards to compare')//Validate Select cards to compare is header of the pop up

        cy.get('.tile-selector').should('have.length', 4)//four credit cards options are available in the pop up to compare

        cy.get('.modal-checkbox').eq(0).click() //select the first credit card check box

        cy.get('.modal-checkbox').eq(1).click() //select the second credit card check box

        cy.get("button[class='A-BTNP-RW-ALL']").click()// Click on Compare button

        cy.get('.A-TYPS4L-RW-DEV.title.title-loaded').should('have.length', 2)//two credit cards have been selected

        cy.get('.A-TYPS7R-RW-DEV.link-icon.clear-icon').should('have.length',2 )//two remove links are present for both the credit card

        cy.get('.A-TYPS7R-RW-DEV.link-icon.add-icon').eq(1).click()//clicking on add card button

        cy.get('.modal-checkbox').eq(2).click() //select the third credit card check box

        cy.get("button[class='A-BTNP-RW-ALL']").click()// Click on Compare button

        cy.get('.A-TYPS4L-RW-DEV.title.title-loaded').should('have.length', 3)//three credit cards have been selected

        cy.get('.A-TYPS7R-RW-DEV.link-icon.clear-icon').should('have.length',3 )//three remove links are present for both the credit card

        cy.get('.A-TYPS7R-RW-DEV.link-icon.clear-icon').eq(0).click()//click on any remove link 

        cy.get('.A-TYPS4L-RW-DEV.title.title-loaded').should('have.length', 2)//two credit card options should available
        
        cy.get('.A-TYPS7R-RW-DEV.link-icon.add-icon').eq(1).click()//clicking on add card button

        cy.get('.close-button').click()//click on close button
})

})