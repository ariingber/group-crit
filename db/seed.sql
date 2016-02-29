BEGIN;


UPDATE users SET img_url='https://s-media-cache-ak0.pinimg.com/736x/e1/03/f3/e103f385cd8fa91e1e8a4f6d41dea093.jpg' WHERE name='mikey';
UPDATE users SET img_url='https://s-media-cache-ak0.pinimg.com/236x/58/f2/2d/58f22d375cd1ff73b08dfd28c4dbd175.jpg' WHERE name='leo';
UPDATE users SET img_url='https://s-media-cache-ak0.pinimg.com/564x/af/74/98/af74984efa8f65cf91c27e2b62ad85cc.jpg' WHERE name='raph';
UPDATE users SET img_url='https://s-media-cache-ak0.pinimg.com/736x/be/ca/22/beca2251ca5f4d859abb30ff7527d1cb.jpg' WHERE name='don';

insert into works ( userID, imgURL, name ) VALUES ( 1, 'http://www.theartpole.com/wordpress/wp-content/uploads/2015/01/The-Artpole-Johanna-Calle-Perspectivas-720x555.jpg', 'future man');
insert into works ( userID, imgURL, name ) VALUES ( 1, 'https://s-media-cache-ak0.pinimg.com/236x/8c/41/fb/8c41fbea36aa909a7255150ac641779f.jpg', 'pizza two');
insert into works ( userID, imgURL, name ) VALUES ( 2, 'http://www.pizzarules.com/uploads/2010/pizzafacemonsterA.jpg', 'pizza three');
insert into works ( userID, imgURL, name ) VALUES ( 3, 'http://thinng.com/system/images/6148/large/campfire-tales-of-a-pepperoni-pizza-art-print.png?1323155332', 'pizza four');
insert into works ( userID, imgURL, name ) VALUES ( 4, 'http://cdn4.designbyhumans.com/product/design/u867762/pr186028-2-2370568-640x640-b-p-313131.jpg', 'pizza five');





COMMIT;
