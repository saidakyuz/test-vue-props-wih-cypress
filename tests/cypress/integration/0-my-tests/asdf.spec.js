describe('testing props', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/')
    cy.viewport(2000, 1280)
  })

  context('testing props are used directly', () => {
    //not necessary
  })

  context('testing props are created via DATA method', () => {
    //not necessary
  })


  context('testing props are created via COMPUTED method', () => {
    it('change textboxes which contains computed variables', () => {
      let i = 69;
      let j = 60
      while (i <= 75) {
        cy.get('#__BVID__' + i).clear().type('SUBCOMP_3_1').invoke('val').then(textOfSub => {
          cy.get('#__BVID__' + j).should('not.have.value', textOfSub)
        })
        i = i + 2;
        j = j + 2;
      }
      let i2 = 78;
      let j2 = 60;
      while (i2 <= 84) {
        cy.get('#__BVID__' + i2).clear().type('SUBCOMP_3_2').invoke('val').then(textOfSub2 => {
          cy.get('#__BVID__' + i2).should('not.have.value', textOfSub2)
        })
        i2 = i2 + 2;
        j2 = j2 + 2;
      }
      let i3 = 96;
      let j3 = 87
      while (i3 <= 102) {
        cy.get('#__BVID__' + i3).clear().type('SUBCOMP_4_1').invoke('val').then(textOfSub3 => {
          cy.get('#__BVID__' + j3).should('not.have.value', textOfSub3)
        })
        i3 = i3 + 2;
        j3 = j3 + 2;
      }
      let i4 = 105;
      let j4 = 87;
      while (i4 <= 111) {
        cy.get('#__BVID__' + i4).clear().type('SUBCOMP_4_2').invoke('val').then(textOfSub4 => {
          cy.get('#__BVID__' + j4).should('not.have.value', textOfSub4)
        })
        i4 = i4 + 2;
        j4 = j4 + 2;
      }
    })
  })
  

})