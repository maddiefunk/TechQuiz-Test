import Quiz from '../../client/src/components/Quiz'

describe('Quiz', () => {
   beforeEach(() => {
    cy.intercept({
        method: 'GET',
        url: '/api/questions/random'
      },
      {
        fixture: 'questions.json',
        statusCode: 200
      }
      ).as('getRandomQuestion')
   })
    it('should render the quiz React ', () => {
        cy.mount(<Quiz/>)
    })
    it('should render the quiz React ', () => {
        cy.mount(<Quiz/>)
        cy.get("button").contains("Start Quiz").click()
    })
    it('should render the quiz React ', () => {
        cy.mount(<Quiz/>)
        cy.get("button").contains("Start Quiz").click()
        cy.get(':nth-child(2) > .btn').contains("2").click()
    })
})