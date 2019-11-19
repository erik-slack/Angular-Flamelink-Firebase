import { getGreeting } from '../support/app.po';

describe('angular-flamelink', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to angular-flamelink!');
  });
});
