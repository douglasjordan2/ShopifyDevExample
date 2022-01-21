# ShopifyDevExample
Custom made basic Shopify theme to showcase development abilities

https://douglas-space-race.myshopify.com/<br>
password: spacerace

- Open the menu and click one of the 3 big product links to add a product to cart (other links are for show, but they don't lead anywhere)
- Click the button in the hero element to add the bundle to cart

-- SCSS and Javascript packed with webpack.

--- SCSS<br>
    - I created a fake framework to match similar patterns I've seen across Shopify stores<br>
    - files are imported only where they're needed and compiled CSS stylesheets are included only where they're needed, at the template and section level

--- Javascript<br>
    - compiled JS files are also included only where needed at the template level, and I created a ComponentConstructor component to compile only the components needed for each template<br>
    - this project uses class components for reusability <br>
        - each template in js/bundles/templates should import the ComponentConstructor component and any components needed for that page (this project only uses the index template)<br>
        - any element that requires Javascript should include a 'data-' attribute that connects it to its component. ComponentConstructor looks for these data- attributes and creates a new connected component for every one it finds<br>
    - side cart component builds with custom-made AJAX so there's no reload necessary to view items added to cart. quantity selectors/remove buttons are operational without reload.<br>

--- Liquid<br>
    - all sections are made using good schema values to allow for customization through the Shopify admin