describe('Registration Functionality',()=>{
    it('Registration new user',()=>{
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        cy.get("input[name='username']").type("USER")
        cy.get("input[name='password']").type("1234")
        cy.get("input[class='button']").click()

    })
})