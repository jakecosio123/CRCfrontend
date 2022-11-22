// describe('Resume Challenge E2E Test', () => {
//   it('Increments the Visitor Count', () => {
//     cy.visit('https://jcosioresume.com')
//     cy.wait(2000)
//     cy.get('#VisitorCount').then(($VisitorCount) => {
//       const count1 = parseFloat($VisitorCount.text())
//       cy.reload()
//       cy.wait(2000)
//       cy.get('#VisitorCount').then(($VisitorCount) => {
//         const count2 = parseFloat($VisitorCount.text())
//         expect(count2).to.be.greaterThan(count1)
//       })
//     })
//   })
// })

describe('API Test', () => {
    it('Tests the API Response', () => {
        cy.request('POST', 'https://crcapi.jcosioresume.com/CRCResource', {})
       .should((response1) => {
            cy.log(JSON.stringify(response1.body)).then(response1.body) => {
                const count1 = parseFloat(response1.body.ddbResponse.Attributes.VisitorCount)
            }})
            cy.wait(2000)
            cy.request('POST', 'https://crcapi.jcosioresume.com/CRCResource', {})
            .should((response2) => {
                 cy.log(JSON.stringify(response2.body)).then(response2.body) => {
                     const count2 = parseFloat(response2.body.ddbResponse.Attributes.VisitorCount)
                 }})
            expect(count2).to.be.greaterThan(count1)
        })
    })    