import { BookClubBooksPage } from './app.po';

describe('book-club-books App', function() {
  let page: BookClubBooksPage;

  beforeEach(() => {
    page = new BookClubBooksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
