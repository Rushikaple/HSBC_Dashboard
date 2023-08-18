describe('HSBC ATM Search Test', ()=>{
    beforeEach(()=>{
        cy.visit('https://www.hsbc.co.in/')
    })

it('validate the branch and ATM locator', ()=>{
    cy.visit('https://www.hsbc.co.in/') //open home page

    cy.wait(2000)

    cy.get('footer a[href="/ways-to-bank/branches/"]').click()//Click on Find your nearest branch or ATM link 

    cy.url().should('contain', '/ways-to-bank/branches/')//Validate in new page the URL has String = ‘/ways-to-bank/branches/’

    cy.get('.A-TYP38L-RW-ALL.text-container.text').should('be.visible')//. Validate Header as Branches & ATM
   
    cy.get('a[href="/branch-finder/"]').click()//click on Branch and ATM btn locator

    cy.wait(20000)//wait for load the page

    cy.get('#searchInput').type('India')//type text
   
    cy.get('#PlacesAutocomplete__suggestion-ChIJkbeSa_BfYzARphNChaFPjNc').should('be.visible').click({force:true});//clicking on dropdown value

    cy.get('._1521gYSzrNIMk9R-rS4Hur').should('be.visible')//validate the header

    cy.contains('Show more results').click()//click on show more result

    cy.get('._1rnTbe1pVGllbaWf81Yn0q').should('contain', '2')//Check second ATM branch name tooltip as 2 in red color is getting displayed
})

    it('social media option in footer section',()=>{

        cy.visit('https://www.hsbc.co.in/') //visit home page

        cy.wait(4000)
        
        cy.scrollTo('bottom') //scroll to bottom

        cy.get('.social-image.social-icon-instagram').should('exist')//checking Instagram 
        
        cy.get('.social-image.social-icon-facebook').should('exist')//checking Facebook 

        cy.get('.social-image.social-icon-twitter').should('exist')// checking Twitter

        cy.get('.social-image.social-icon-youtube').should('exist')//checking Youtube   

    })

    it('Navigate to home page and validate privacy statement ', ()=>{
        cy.visit('https://www.hsbc.co.in/') //visit home page

        cy.get('.header-logo.lg-2').click() // click on HBSC logo

        cy.title().should('contain', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit') // Validate Home Page Title

        cy.scrollTo('bottom') //scroll to bottom

        cy.contains('Privacy Statement').click({force:true}) //click on privacy-statement

        cy.get('.A-TYP48T-RW-ALL.text-container.text ').should('be.visible') //validate the Privacy statement as header

    })

})
