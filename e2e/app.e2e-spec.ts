import { OutfrontChallengePage } from './app.po';

describe('outfront-challenge App', () => {
  let page: OutfrontChallengePage;

  beforeEach(() => {
    page = new OutfrontChallengePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
