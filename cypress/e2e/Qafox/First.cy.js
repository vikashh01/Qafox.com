describe('All for Qafox', () => {
    it('Home Page', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=common/home')
        cy.get('#top-links > ul > li.dropdown > a').click()
        cy.get('#top-links > ul > li.dropdown.open > ul > li:nth-child(1) > a').click()
        
    });
    it('Register', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/register')
        cy.get('#input-firstname').type('vikash')
        cy.get('#input-lastname').type('kumar')
        cy.get('#input-email').type('vikashkumarbharti035@gmail.com')
        cy.get('#input-telephone').type('6201530961')
        cy.get('#input-password').type('vikash8674825048')
        cy.get('#input-confirm').type('vikash8674825048')
        cy.get('#content > form > fieldset:nth-child(3) > div > div > label:nth-child(1) > input[type=radio]').click()
        cy.get('#content > form > div > div > input[type=checkbox]:nth-child(2)').click()
        cy.get('#content > form > div > div > input.btn.btn-primary').click()


    });
    it('Login', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login')
        cy.get('#input-email').type('vikashkumarbharti035@gmail.com')
        cy.get('#input-password').type('vikash8674825048')
        cy.get('#content > div > div:nth-child(2) > div > form > input').click()
    });

    it('Login with Forget forget password', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/login')
        cy.get('#input-email').type('vikashkumarbharti035@gmail.com')
        cy.get('#content > div > div:nth-child(2) > div > form > div:nth-child(2) > a').click()
        cy.get('#input-email').type('vikashkumarbharti035@gmail.com')
        cy.get('#content > form > div > div.pull-right > input').click()
    });
    it('Go to My Account', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/account')
        cy.get('#column-right > div > a:nth-child(1)').click()
        
    });
    it('Contact', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=information/contact')
        cy.get('#top-links > ul > li:nth-child(1) > a > i').click()
        cy.get('#input-name').type('vikash')
        cy.get('#input-email').type('vikashkumarbharti035@gmail.com')
        cy.get('#input-enquiry').type('enquiry')
        cy.get('#content > form > div > div > input').click()
    });
    it('Shopping', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=checkout/cart')
        cy.get('#content > div > div > a').click()
        
    });
    it('checkout', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=checkout/cart')
        cy.get('#content > div > div > a').click()
        
    });
    it('Search', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('#search > input').type('Mobile')
        cy.get('#search > span > button > i').click()
        
    });
    it('item', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('#cart > button').click()

    });
    it('desktops', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(1) > a').click()
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li.dropdown.open > div > div > ul > li:nth-child(1) > a').click()
        cy.get('#column-left > div.list-group > a:nth-child(4)').click()
        
        
    });
    it('Laptos & notebooks', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(2) > a').click()
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li.dropdown.open > div > a').click()
        
    });
    it('Components', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(3) > a').click()
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li.dropdown.open > div > div > ul > li:nth-child(3) > a').click()
        
    });
    it('Tablets', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(4) > a').click()
        cy.get('#content > div:nth-child(3) > div > div > div.image > a > img').click()
        cy.get('#input-quantity').type('2')
        cy.get('#button-cart').click()
        
    });
    it('Software', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(5) > a').click()
        cy.get('#content > div > div > a').click()
       
        
    });
    it('Phones & PDAs', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(6) > a').click()
        cy.get('#content > div:nth-child(3) > div:nth-child(1) > div > div.image > a > img').click()
        cy.get('#input-quantity').type('2')
        cy.get('#button-cart').click()
    });
    it('Cameras', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(7) > a').click()
        cy.get('#content > div:nth-child(3) > div:nth-child(1) > div > div.image > a > img').click()
        cy.get('#input-quantity').type('2')
        cy.get('#button-cart').click()
        
    });
    it('Mp3 Players', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li:nth-child(8) > a').click()
        cy.get('#menu > div.collapse.navbar-collapse.navbar-ex1-collapse > ul > li.dropdown.open > div > div > ul:nth-child(1) > li:nth-child(2) > a').click()
        cy.get('#content > div > div > a').click()
    });
    it('Dropdown', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('#form-currency > div > button').click()
        cy.get('#form-currency > div > ul > li:nth-child(2) > button').click()
        
    });
    it('About Us', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('body > footer > div > div > div:nth-child(1) > ul > li:nth-child(1) > a').click()
        
    });
    it('Delivery Information', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('body > footer > div > div > div:nth-child(1) > ul > li:nth-child(2) > a').click()
        
    });
    it('Privacy policy', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('body > footer > div > div > div:nth-child(1) > ul > li:nth-child(3) > a').click()
        
    });
    it('Terms & Conditions', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('body > footer > div > div > div:nth-child(1) > ul > li:nth-child(4) > a').click()
        
    });
    it('Contact Us', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('body > footer > div > div > div:nth-child(2) > ul > li:nth-child(1) > a').click()
        
    });
    it('Contact Us', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=information/contact')
        cy.get('#top-links > ul > li:nth-child(1) > a > i').click()
        cy.get('#input-name').type('vikash')
        cy.get('#input-email').type('vikashkumarbharti035@gmail.com')
        cy.get('#input-enquiry').type('enquiry')
        cy.get('#content > form > div > div > input').click()
    });
    it('Returns', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=account/return/add')
        cy.get('#input-firstname').type('vikash')
        cy.get('#input-lastname').type('kumar')
        cy.get('#input-email').type('vikashkumarbharti035@gamail.com')
        cy.get('#input-telephone').type('6201530961')
        cy.get('#input-order-id').type('1232456754')
        cy.get('#input-date-ordered').type('2024-11-15')
        cy.get('#input-product').type('Phone')
        cy.get('#input-model').type('23453')
        cy.get('#input-quantity').type('1')
        cy.get('#content > form > fieldset:nth-child(2) > div:nth-child(5) > div > div:nth-child(1) > label > input[type=radio]').click()
        cy.get('#content > form > fieldset:nth-child(2) > div:nth-child(6) > div > label:nth-child(1) > input[type=radio]').click()
        cy.get('#input-comment').type("It product is not working that's why i want to return it.")
        cy.get('#content > form > div > div.pull-right > input').click()
   
        
    });
    it('Site Map', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=information/sitemap')
        cy.get('#content > div > div:nth-child(1) > ul > li:nth-child(1) > ul > li:nth-child(1) > a').click()
        cy.get('#content > div > div > a').click()
        
    });
    it('Brands', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('body > footer > div > div > div:nth-child(3) > ul > li:nth-child(1) > a').click()
        cy.get('#content > div:nth-child(4) > div > a').click()

        
    });
    it('Gift certificates', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('body > footer > div > div > div:nth-child(3) > ul > li:nth-child(2) > a').click()
        cy.get('body > footer > div > div > div:nth-child(3) > ul > li:nth-child(2) > a').type('phone')
        cy.get('#input-to-email').type('vikashkumarbharti035@gmail.com')
        cy.get('#input-from-name').type('vikash kumar')
        cy.get('#input-from-email').type('vikashkumarbharti035@gmail.com')
        cy.get('#content > form > div:nth-child(5) > div > div:nth-child(3) > label > input[type=radio]').click()
        cy.get('#input-message').type('I want to get me a gift')
        cy.get('#input-amount').type('233678')
        cy.get('#content > form > div.buttons.clearfix > div > input[type=checkbox]:nth-child(1)').click()
        cy.get('#content > form > div.buttons.clearfix > div > input.btn.btn-primary').click()
    });
    it('Affiliate', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('body > footer > div > div > div:nth-child(3) > ul > li:nth-child(3) > a').click()
        cy.get('#input-email').type('vikashkumarbharti035@gmail.com')
        cy.get('#input-password').type('vikash8674825048')
        cy.get('#content > div > div:nth-child(2) > div > form > input').click()

        
    });
    it('Specials', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('body > footer > div > div > div:nth-child(3) > ul > li:nth-child(4) > a').click()
        cy.get('#content > div:nth-child(3) > div:nth-child(1) > div > div.image > a > img').click()
        cy.get('#input-option218 > div > label > input[type=radio]').click()
        cy.get('#input-option223 > div:nth-child(1) > label > input[type=checkbox]').click()
        cy.get('#input-option208').type('turn on')
        cy.get('#input-option209').type('it is not open')
        cy.get('#input-option219').type('2024-15-11')
        cy.get('#input-option221').type('5:00')
        cy.get('#input-option220').type('2024-15-11 5:00')
        cy.get('#input-quantity').type('2')
        cy.get('#button-cart').click()
        cy.get('#content > div:nth-child(1) > div.col-sm-4 > div.rating > p > span:nth-child(2) > i').click()


        
    });
    it('compair', () => {
        cy.visit('https://tutorialsninja.com/demo/')
        cy.get('#content > div.row > div:nth-child(2) > div > div.button-group > button:nth-child(3) > i').click()
        
    });
    it('product', () => {
        cy.visit('https://tutorialsninja.com/demo/index.php?route=product/product&product_id=43')
        cy.get('#content > div > div.col-sm-8 > ul.thumbnails > li:nth-child(1) > a > img').click()
        cy.get('body > div.mfp-wrap.mfp-gallery.mfp-close-btn-in.mfp-auto-cursor.mfp-ready > div > button.mfp-arrow.mfp-arrow-right.mfp-prevent-close').click()

        cy.get('body > div.mfp-wrap.mfp-gallery.mfp-close-btn-in.mfp-auto-cursor.mfp-ready > div > div.mfp-content > div > figure > img').click()
        cy.get('body > div.mfp-wrap.mfp-gallery.mfp-close-btn-in.mfp-auto-cursor.mfp-ready > div > div.mfp-content > div > button').click()
              
    });
   
});