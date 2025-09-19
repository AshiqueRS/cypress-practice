describe('Registration Functionality',()=>{
    it('Registration new user',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type("USER")
        cy.get("input[name='password']").type("1234")
        cy.get("input[class='button']").click()
        cy.get("#accountTable > tbody > tr:nth-child(1) > td:nth-child(1) > a").click()
        cy.get("#month").select(1)
        cy.get("#transactionType").select(1)
        cy.get("input[value='Go']").click()

    })
})