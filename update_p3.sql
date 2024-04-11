set schema 'shopify';

begin transaction;

update pricing_plans set price = price - (price*.25)  where price > 0;
update pricing_plans set title = concat(title, ' 25% off Price') where price > 0;

commit;