import { LabAssignment3APage } from './app.po';

describe('lab-assignment3-a App', () => {
  let page: LabAssignment3APage;

  beforeEach(() => {
    page = new LabAssignment3APage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
