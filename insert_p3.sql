set schema 'shopify';

begin transaction;

insert into apps (id, url, title, developer, developer_link, icon, reviews_count) 
values ('273d06dx-14c7-4733-9bve-al5b749af096', 'https://apps.shopify.com/watchlist?surface_detail=inventory-management&surface_inter_position=1&surface_intra_position=9&surface_type=category','Back in Stock Product Alerts', 'Swym Corporation', 'https://apps.shopify.com/partners/developer-ca6a967f09890f68',         'https://apps.shopifycdn.com/listing_images/9905a4c8f22cb4a3b0c32af55a58ec21/icon/e6d46a7e5e1df375d542d033aae80459.png?height=72&width=72',
0);

insert into apps_categories (app_id, category_id) values ('273d06dx-14c7-4733-9bve-al5b749af096', '737ad50051083aa051d127a53b3ac0da');

insert into key_benefits (app_id, title, description)
values ('273d06dx-14c7-4733-9bve-al5b749af096', 'Drive Back In Stock Sales', 'Back in stock, out of stock, pre order & restock alerts');

insert into pricing_plans (id, app_id, title, price) 
values ('101a7651-1lsd-0c0f-3548-9fe6f7hfd4ab', '273d06dx-14c7-4733-9bve-al5b749af096', 'Premium', 49.99);

insert into pricing_plan_features (app_id, pricing_plan_id, feature) 
values ('273d06dx-14c7-4733-9bve-al5b749af096', '101a7651-1lsd-0c0f-3548-9fe6f7hfd4ab', 'Unlimited alert requests/mo');

commit;

