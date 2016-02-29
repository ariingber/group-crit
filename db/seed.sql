BEGIN;

insert into works ( userID, imgURL, name ) VALUES ( 1, 'http://www.theartpole.com/wordpress/wp-content/uploads/2015/01/The-Artpole-Johanna-Calle-Perspectivas-720x555.jpg', 'future man');
insert into works ( userID, imgURL, name ) VALUES ( 1, 'http://thumb7.shutterstock.com/display_pic_with_logo/663421/663421,1316016870,1/stock-photo-side-view-of-sitting-human-charcoal-drawing-84643642.jpg', 'human charcoal');

insert into works ( userID, imgURL, name ) VALUES ( 2, 'http://rlv.zcache.com/black_and_white_marble_acrylic_painting_canvas_print-r33584a72d63e448d854e74392c754621_wta_8byvr_630.jpg?view_padding=%5B285%2C0%2C285%2C0%5D', 'accrylic');
insert into works ( userID, imgURL, name ) VALUES ( 2, 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Fleur_de_muscade.jpg', 'sculpture test');

insert into works ( userID, imgURL, name ) VALUES ( 3, 'https://wegway.files.wordpress.com/2013/04/screw.jpg', 'screw drawing');
insert into works ( userID, imgURL, name ) VALUES ( 3, 'http://s3images.coroflot.com/user_files/individual_files/original_255014_dt5Oj1kUOTGT1Cew8bRhb07_1.jpg', 'tape drawing');
insert into works ( userID, imgURL, name ) VALUES ( 3, 'http://www.mollynix.com/images_content/04tradmedia/bell01.jpg', 'tape drawing');

insert into works ( userID, imgURL, name ) VALUES ( 4, 'http://i.dailymail.co.uk/i/pix/2014/06/22/article-2665197-1F0402AB00000578-314_964x613.jpg', 'animals');
insert into works ( userID, imgURL, name ) VALUES ( 4, 'https://c2.staticflickr.com/8/7040/7068402247_6869ee0680_b.jpg', 'more animals');


COMMIT;
