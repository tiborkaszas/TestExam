import homePage from "../page-object/page";

describe('TestExam2', () => {
  it('Search for cheapest canon calculator', () => {

    homePage.open();
    homePage.bannerCloseButton().click();
    homePage.searchForCalculator();

    //Filter for Canon brand
    homePage.scrollToCanon();
    homePage.selectCanon();

    //sort items by preice - ascending
    homePage.sortByPrice();

    //add calculators to cart
    homePage.addCalculators();

    // view items in cart
    homePage.viewCart();

    // view details of the items: name, product number, price, quantity
    homePage.assertDetails();

    // check if cart has two items
    homePage.twoItems();
    
  })
})