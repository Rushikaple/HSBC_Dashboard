describe('HSBC Credit Card section', () => {
  it('should navigate to the Credit Cards page', () => {
    cy.visit('https://www.hsbc.co.in/');
    cy.get('.nav-link:contains("Banking")').trigger('mouseover');
    cy.get('.dropdown-item:contains("Credit Cards")').click();
    cy.contains('Credit Cards').should('exist');
  });

  it('should validate Apply Now button', () => {
    cy.get('.card-apply-now-button').should('exist');
  });

  it('should have four Credit Card options', () => {
    cy.get('.card-details').should('have.length', 4);
  });

  it('should validate the first Credit Card details', () => {
    cy.get('.card-details:first')
      .should('contain', 'HSBC Cashback Credit Card')
      .find('.card-image')
      .should('have.attr', 'alt', 'HSBC Visa Cashback Credit Card')
      .siblings('.card-apply-now-button')
      .should('exist')
      .siblings('.card-details-compare-button')
      .should('exist')
      .siblings('.card-details-find-out-more-button')
      .should('exist');
  });

  it('should open and close the Compare Cards pop-up', () => {
    cy.get('.card-details:first .card-details-compare-button').click();
    cy.get('.compare-card-close-button').should('exist').click();
  });

  it('should have four Credit Card options to compare', () => {
    cy.get('.card-details:first .card-details-compare-button').click();
    cy.get('.compare-card-header').should('contain', 'Select cards to compare');
   
  })
})