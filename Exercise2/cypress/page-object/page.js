const {
    get,
    visit
} = cy;

class HomePage {
    
    bannerCloseButton() {
        const closeButton = get('#pnl-SubScription-Popup > div:nth-child(2) > span')
        return closeButton;
    }

    open() {
        visit("https://www.officemate.co.th/en/")
    }

    searchForCalculator() {
        get('#app > div > div.Header__Wrapper-f43oip-0.ewIlaO > div.Header__HeaderFixed-f43oip-1.folenF > div.Margin-sc-11lglan-0.kKsGIZ > div > div.jV2Jt.MainHeader__EnhanceSearchBar-t21bq7-6.isfYKa.ecw7j._32CNv._3P2nV > div._3vuaX._1fVgu > input').type('calculator');
        get('[id^=btn-searchResultPage]').click();
    }

    //wait for content to load, scroll down to the needed brand
    scrollToCanon() {
        get('#btn-showOption-CON8003366', { timeout: 20000 })
            .should('be.visible');
        get('[id^=btn-collapseClose-Brand]').scrollIntoView()
            .should('be.visible');
    }

    //click canon checkbox
    selectCanon() {
        get('#app > div > div.MrQ4g.xmfb0 > div > div._3pSVv._19-Sz.F0sHG._1eAL0 > div > div > div.UejMT > div > div:nth-child(2) > div > div.gRVZf > div > div:nth-child(4) > div > div._37hmz._1W4v4 > div > div:nth-child(1)').click();
    }

    //sort by ascending price
    sortByPrice() {
        get('#app > div > div.MrQ4g > div > div._3pSVv._19-Sz.F0sHG._1eAL0 > div > div > div._1V_Pj > div.izVGc').contains('Sort by').click();
        get('[id^=price_asc]').click({ multiple: true, force: true });
    }

    //add calculators to cart
    addCalculators() {
        get('[id^=btn-addCart-OFM8015945]').click({ force: true });
        get('#btn-addCart-OFM8015945 > span', { timeout: 20000 }).should('contain', 'Add to cart');
        get('[id^=btn-addCart-OFM8015949]').click({ force: true });
        get('#btn-addCart-OFM8015945 > span', { timeout: 20000 }).should('contain', 'Add to cart');
    }

    //view cart
    viewCart() {
        get('#lbl-minicartQty').click();
        get('#lnk-minicartToCartPage', { timeout: 5000 }).should('contain', 'View Cart');
        get('#lnk-minicartToCartPage').click({ force: true });
    }

    //assert calculator detail: product name, product number, quantity, price
    assertDetails() {
        get('#cart-items > div > div > div._3YFXD._1pBtV > div._269qX.tsLLl._22yST._3bq8v > div:nth-child(2) > div > div > div > div:nth-child(2) > div:nth-child(1) > div > div._3YFXD._2Ib50 > div._269qX._1TSBW.I2ppM > div:nth-child(1) > a').should('contain', 'Canon LS-88Hi III Calculator Pink');
        get('#cart-items > div > div > div._3YFXD._1pBtV > div._269qX.tsLLl._22yST._3bq8v > div:nth-child(2) > div > div > div > div:nth-child(2) > div:nth-child(1) > div > div._3YFXD._2Ib50 > div._269qX._1TSBW.I2ppM > div._10UXS > div > span > span').should('contain', 'Product Code: OFM8015945');
        get('#txt-AddToCartQty-OFM8015945').should('have.value', '1');
        get('#cart-items > div > div > div._3YFXD._1pBtV > div._269qX.tsLLl._22yST._3bq8v > div:nth-child(2) > div > div > div > div:nth-child(2) > div:nth-child(1) > div > div._3YFXD._2Ib50 > div._269qX._3LJO1._1Axt_ > div').should('contain', '198.00');

        get('#cart-items > div > div > div._3YFXD._1pBtV > div._269qX.tsLLl._22yST._3bq8v > div:nth-child(2) > div > div > div > div:nth-child(3) > div:nth-child(1) > div > div._3YFXD._2Ib50 > div._269qX._1TSBW.I2ppM > div:nth-child(1) > a').should('contain', 'Canon LS-88Hi III Calculator. Purple.');
        get('#cart-items > div > div > div._3YFXD._1pBtV > div._269qX.tsLLl._22yST._3bq8v > div:nth-child(2) > div > div > div > div:nth-child(3) > div:nth-child(1) > div > div._3YFXD._2Ib50 > div._269qX._1TSBW.I2ppM > div._10UXS > div > span > span').should('contain', 'Product Code: OFM8015949');
        get('#txt-AddToCartQty-OFM8015949').should('have.value', '1');
        get('#cart-items > div > div > div._3YFXD._1pBtV > div._269qX.tsLLl._22yST._3bq8v > div:nth-child(2) > div > div > div > div:nth-child(3) > div:nth-child(1) > div > div._3YFXD._2Ib50 > div._269qX._3LJO1._1Axt_ > div').should('contain', '198.00');
    }

    //assert cart has 2 items
    twoItems() {
        get('#lbl-minicartQty').should('contain', '2');
    }
}
export default new HomePage();


