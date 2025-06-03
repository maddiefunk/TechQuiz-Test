import { mount } from 'cypress/react'
import Quiz from '../client/src/components/Quiz'
import { vi } from 'vitest'

// Mock questions
const mockQuestions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '3', isCorrect: false },
      { text: '4', isCorrect: true },
      { text: '5', isCorrect: false },
    ],
  },
  {
    question: 'What is the capital of France?',
    answers: [
      { text: 'Berlin', isCorrect: false },
      { text: 'Madrid', isCorrect: false },
      { text: 'Paris', isCorrect: true },
    ],
  },
]

// Mock the API module
vi.mock('../../client/src/services/questionApi', () => ({
  getQuestions: () => Promise.resolve(mockQuestions),
}))

describe('Quiz component', () => {
  it('renders and completes the quiz correctly', () => {
    mount(<Quiz />)

    // Click start button
    cy.contains('Start Quiz').click()

    // First question should appear
    cy.contains('What is 2 + 2?').should('exist')

    // Click the correct answer (index 2 is "4")
    cy.contains('4').prev('button').click()

    // Second question
    cy.contains('What is the capital of France?').should('exist')
    cy.contains('Paris').prev('button').click()

    // Completed quiz message
    cy.contains('Quiz Completed').should('exist')
    cy.contains('Your score: 2/2').should('exist')
  })
})
