// Send an image to the website and verify that the upload was successful.

describe('Upload a file', () => {
    it('Uplaod a file in imgur', () => {
      // Access to website
      cy.visit('https://imgur.com')
      // Access to the download page
      cy.get('.newPostLabel').click()
      // Drag-and-drop the image contain in fixtures folder
      cy.get('.PopUpDrop-DropArea').attachFile('uploadThisFile.png', {
        subjectType: 'drag-n-drop',
      });
      // Verify that the message upload complete is display
      cy.get('.Toast-message').should('contain', 'Upload Complete!');
      cy.get('.PostContent-imageWrapper-rounded > img').should('be.visible');
    })
})