PRAGMA foreign_keys=OFF;
BEGIN TRANSACTION;
CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`email` text NOT NULL,
	`reset_password_token` text,
	`reset_password_expiration` text,
	`salt` text,
	`hash` text,
	`login_attempts` numeric DEFAULT 0,
	`lock_until` text
);
INSERT INTO users VALUES(1,'2025-05-21T09:01:50.030Z','2025-05-21T09:01:50.044Z','rolies.donald@gmail.com',NULL,NULL,'5257e051692260ad23b40b51f6f3a62e49e910d402ebf8ed94d965bd3c88bc64','509d3a2c58fd81b2a453395548e5b792f784ed5b763c9218e06319916327b8b285d99e78f4b274bbadb39d4b949f0103ec2f2904ba7c7ff079c7f5f32336cd8a4ce2001be06c397fb67e119cf46b6d8897b5da43da55c2a9e2179e9ad71312ea876c59575a9fee8c24b4df4517e9bc9cfea7e38d22c6961af587502938686d44ae4a0f0ffa530fd42063d1556a8f67055a79e39f37c3ab9aa2a71c134801778e1098874d6fab680c6d533c2d614940d32344770cd9566e8547bbda76e3284589d225ed9588e362f1ed56b2eee09bbb28c55535ad48140945e87c2573b0e9da55af48f6d99cbcd0b302460cde764ed8675a880402af723c657e8fcabc86ce1b04fc7f58cb05d630cad8406a95c1c6b610ed739b7cf338b282615b1b7ed73f542ede5e745065293b9c8fc79146d2a07c65d53f5102ba63fe9c69027f20fc43208d9d2ce846308d63a89ecfe1ddb4af781dde814fe630263265ebb18970b796d26ece72aa9a80916bc55dad985d1f7d49ba7a746cf694612cfca4917ae030c01cb2b27873d5ccf0f137376137cd32a4b73ac2d2202a952e753d03d0b10b5aecf8b5b458e7f8e2a9ee6e607d7621575adb56daf4279b0da9c9616422c0983904f8f3335eb5029b338dff00a788d690960b2452afac8cbcfd44925444edb07f7f94226db529f0f98f690a51261aec9c89050d09ab137d474e9c0f69d1b250a7d4b765',0,NULL);
CREATE TABLE `media` (
	`id` integer PRIMARY KEY NOT NULL,
	`alt` text NOT NULL,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`url` text,
	`thumbnail_u_r_l` text,
	`filename` text,
	`mime_type` text,
	`filesize` numeric,
	`width` numeric,
	`height` numeric,
	`focal_x` numeric,
	`focal_y` numeric
);
INSERT INTO media VALUES(1,'hero satu','2025-05-21T11:40:47.819Z','2025-05-21T11:40:47.821Z',NULL,NULL,'Screenshot 2025-01-30 023745.png','image/png',603694,619,610,50,50);
INSERT INTO media VALUES(2,'coba','2025-05-23T11:22:35.842Z','2025-05-23T11:22:35.843Z',NULL,NULL,'Screenshot 2025-01-30 023745-1.png','image/png',603694,619,610,50,50);
INSERT INTO media VALUES(3,'gambar 1','2025-05-23T14:12:54.436Z','2025-05-23T14:12:54.438Z',NULL,NULL,'Screenshot 2025-01-30 023745-2.png','image/png',603694,619,610,50,50);
INSERT INTO media VALUES(4,'img1','2025-05-23T14:14:39.300Z','2025-05-23T14:14:39.301Z',NULL,NULL,'bg.png','image/png',84996,552,330,50,50);
INSERT INTO media VALUES(5,'img2','2025-05-23T14:15:49.390Z','2025-05-23T14:15:49.392Z',NULL,NULL,'mol_logo.png','image/png',961785,1024,1024,50,50);
INSERT INTO media VALUES(6,'mol','2025-05-23T14:16:04.700Z','2025-05-23T14:16:04.702Z',NULL,NULL,'Screenshot 2025-01-30 023745-3.png','image/png',603694,619,610,50,50);
INSERT INTO media VALUES(7,'img1','2025-05-23T14:25:36.878Z','2025-05-23T14:25:36.880Z',NULL,NULL,'mol_logo-1.png','image/png',961785,1024,1024,50,50);
INSERT INTO media VALUES(8,'jsm','2025-05-23T14:26:18.446Z','2025-05-23T14:26:18.450Z',NULL,NULL,'jsm-logo.png','image/png',65839,576,576,50,50);
INSERT INTO media VALUES(9,'img2','2025-05-23T14:44:24.949Z','2025-05-23T14:44:24.946Z',NULL,NULL,'foton_EC_truck.jpg','image/jpeg',126404,1100,619,50,50);
INSERT INTO media VALUES(10,'img 3','2025-05-23T14:45:48.533Z','2025-05-23T14:45:48.534Z',NULL,NULL,'Screenshot 2025-01-30 023745-4.png','image/png',603694,619,610,50,50);
INSERT INTO media VALUES(11,'project1','2025-05-24T00:19:16.102Z','2025-05-24T00:19:16.104Z',NULL,NULL,'Screenshot 2025-01-23 174606.png','image/png',26711,747,711,50,50);
INSERT INTO media VALUES(12,'project 1','2025-05-24T01:14:01.717Z','2025-05-24T01:14:01.718Z',NULL,NULL,'Screenshot 2025-01-23 174606-1.png','image/png',26711,747,711,50,50);
INSERT INTO media VALUES(13,'project 2','2025-05-24T01:15:50.100Z','2025-05-24T01:15:50.102Z',NULL,NULL,'foton_EC_truck-1.jpg','image/jpeg',126404,1100,619,50,50);
INSERT INTO media VALUES(14,'icon','2025-05-24T07:38:49.767Z','2025-05-24T07:38:49.769Z',NULL,NULL,'mol_logo_icon.ico','image/x-icon',378150,NULL,NULL,NULL,NULL);
INSERT INTO media VALUES(15,'hiba','2025-05-24T07:41:28.964Z','2025-05-24T07:41:28.965Z',NULL,NULL,'Hiba-Group-05-scaled.png','image/png',122910,2560,824,50,50);
INSERT INTO media VALUES(16,'hiba','2025-05-24T10:03:43.872Z','2025-05-24T10:03:43.873Z',NULL,NULL,'Hiba-Group-05-scaled-1.png','image/png',122910,2560,824,50,50);
INSERT INTO media VALUES(17,'logo','2025-05-24T10:10:52.527Z','2025-05-24T10:10:52.528Z',NULL,NULL,'foton_EC_truck-2.jpg','image/jpeg',126404,1100,619,50,50);
INSERT INTO media VALUES(18,'spx','2025-05-27T01:31:58.700Z','2025-05-27T01:31:58.701Z',NULL,NULL,'spx_express-logo_brandlogos.net_7avqk.png','image/png',39266,891,363,50,50);
INSERT INTO media VALUES(19,'JTS','2025-05-27T02:48:41.842Z','2025-05-27T02:48:41.843Z',NULL,NULL,'1697141876108.jpeg','image/jpeg',5928,200,200,50,50);
CREATE TABLE `payload_locked_documents` (
	`id` integer PRIMARY KEY NOT NULL,
	`global_slug` text,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
CREATE TABLE `payload_preferences` (
	`id` integer PRIMARY KEY NOT NULL,
	`key` text,
	`value` text,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
INSERT INTO payload_preferences VALUES(1,'pages-list','{"preset":null,"limit":5}','2025-05-21T11:07:04.245Z','2025-05-21T09:07:11.848Z');
INSERT INTO payload_preferences VALUES(2,'media-list','{"preset":null,"limit":10}','2025-05-21T11:01:09.951Z','2025-05-21T09:57:53.700Z');
INSERT INTO payload_preferences VALUES(3,'users-list','{"preset":null}','2025-05-21T11:07:19.354Z','2025-05-21T11:07:19.354Z');
INSERT INTO payload_preferences VALUES(4,'collection-pages-1','{"fields":{"layout":{"collapsed":["682dba23aa86cb32ca6cf752"]},"layout.2.grit.items":{"collapsed":[]},"layout.2.project.items":{"collapsed":[]},"layout.3.clients":{"collapsed":[]}}}','2025-05-24T10:03:14.672Z','2025-05-23T03:38:17.401Z');
CREATE TABLE `payload_preferences_rels` (
	`id` integer PRIMARY KEY NOT NULL,
	`order` integer,
	`parent_id` integer NOT NULL,
	`path` text NOT NULL,
	`users_id` integer,
	FOREIGN KEY (`parent_id`) REFERENCES `payload_preferences`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO payload_preferences_rels VALUES(2,NULL,2,'user',1);
INSERT INTO payload_preferences_rels VALUES(3,NULL,1,'user',1);
INSERT INTO payload_preferences_rels VALUES(4,NULL,3,'user',1);
INSERT INTO payload_preferences_rels VALUES(5,NULL,4,'user',1);
CREATE TABLE `payload_migrations` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`batch` numeric,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
);
INSERT INTO payload_migrations VALUES(1,'dev',-1,'2025-05-27 14:13:45','2025-05-21T08:59:23.605Z');
CREATE TABLE IF NOT EXISTS "payload_locked_documents_rels" (
	`id` integer PRIMARY KEY NOT NULL,
	`order` integer,
	`parent_id` integer NOT NULL,
	`path` text NOT NULL,
	`users_id` integer,
	`media_id` integer,
	`pages_id` integer,
	FOREIGN KEY (`parent_id`) REFERENCES `payload_locked_documents`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`media_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`pages_id`) REFERENCES `pages`(`id`) ON UPDATE no action ON DELETE cascade
);
CREATE TABLE IF NOT EXISTS "pages_blocks_hero" (
	`_order` integer NOT NULL,
	`_parent_id` integer NOT NULL,
	`_path` text NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`heading` text NOT NULL,
	`sub_heading` text NOT NULL,
	`image_id` integer NOT NULL,
	`block_name` text, `cta_button_label` text NOT NULL, `cta_button_url` text NOT NULL,
	FOREIGN KEY (`image_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`_parent_id`) REFERENCES `pages`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO pages_blocks_hero VALUES(1,1,'layout','682dba23aa86cb32ca6cf752','Selamat Datang di Moulee World','{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"this is sub heading coba","type":"text","version":1}],"direction":"ltr","format":"","indent":0,"type":"paragraph","version":1,"textFormat":0,"textStyle":""}],"direction":"ltr","format":"","indent":0,"type":"root","version":1}}',1,NULL,'Pelajari lebih lanjut','www.google.com');
CREATE TABLE IF NOT EXISTS "pages_blocks_grid_items" (
	`_order` integer NOT NULL,
	`_parent_id` integer NOT NULL,
	`_path` text NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`block_name` text,
	FOREIGN KEY (`_parent_id`) REFERENCES `pages`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO pages_blocks_grid_items VALUES(2,1,'layout','683081bf4c10c30b09a7eb2d',NULL);
CREATE TABLE IF NOT EXISTS "pages_blocks_grid_items_grit_items" (
	`_order` integer NOT NULL,
	`_parent_id` text NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`class_name` text NOT NULL,
	`img_id` integer,
	`img_class_name` text,
	`title_class_name` text,
	`spare_img_id` integer,
	FOREIGN KEY (`img_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`spare_img_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`_parent_id`) REFERENCES `pages_blocks_grid_items`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO pages_blocks_grid_items_grit_items VALUES(1,'683081bf4c10c30b09a7eb2d','1','Coba 1','','lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',7,'w-full h-full','justify-end',NULL);
INSERT INTO pages_blocks_grid_items_grit_items VALUES(2,'683081bf4c10c30b09a7eb2d','2','item 2','','lg:col-span-2 md:col-span-3 md:row-span-2',9,'h-full w-full','justify-end',NULL);
INSERT INTO pages_blocks_grid_items_grit_items VALUES(3,'683081bf4c10c30b09a7eb2d','4','Item 3',NULL,'lg:col-span-2 md:col-span-3 md:row-span-2 text-4xl',10,'h-full w-full','justify-end',NULL);
CREATE TABLE `pages_blocks_last_project` (
	`_order` integer NOT NULL,
	`_parent_id` integer NOT NULL,
	`_path` text NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`block_name` text,
	FOREIGN KEY (`_parent_id`) REFERENCES `pages`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO pages_blocks_last_project VALUES(3,1,'layout','6831103034a2e0687b9ad7ee',NULL);
CREATE TABLE IF NOT EXISTS "pages_blocks_last_project_project_items" (
	`_order` integer NOT NULL,
	`_parent_id` text NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`des` text,
	`img_id` integer,
	`linkname` text,
	`link` text,
	FOREIGN KEY (`img_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`_parent_id`) REFERENCES `pages_blocks_last_project`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO pages_blocks_last_project_project_items VALUES(1,'6831103034a2e0687b9ad7ee','1','Project 1','Ini adalah project pertama',12,'Project 1','#');
INSERT INTO pages_blocks_last_project_project_items VALUES(2,'6831103034a2e0687b9ad7ee','68311da0b19641045aa85680','Project 2','ini adalah project 2',13,'Project 2','#');
CREATE TABLE IF NOT EXISTS "pages" (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text,
	`slug` text NOT NULL,
	`seo_meta_title` text,
	`seo_meta_description` text,
	`seo_og_image_id` integer,
	`updated_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	`created_at` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
	FOREIGN KEY (`seo_og_image_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null
);
INSERT INTO pages VALUES(1,'This is Landing Page Bro','landing-page','Moulee','Garage ',14,'2025-05-27T02:49:12.625Z','2025-05-21T09:08:01.443Z');
CREATE TABLE IF NOT EXISTS "pages_blocks_client" (
	`_order` integer NOT NULL,
	`_parent_id` integer NOT NULL,
	`_path` text NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`block_name` text,
	FOREIGN KEY (`_parent_id`) REFERENCES `pages`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO pages_blocks_client VALUES(4,1,'layout','68319954280260611e77b05e',NULL);
CREATE TABLE `pages_blocks_client_clients` (
	`_order` integer NOT NULL,
	`_parent_id` text NOT NULL,
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`logo_id` integer,
	`name_logo_id` integer,
	FOREIGN KEY (`logo_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`name_logo_id`) REFERENCES `media`(`id`) ON UPDATE no action ON DELETE set null,
	FOREIGN KEY (`_parent_id`) REFERENCES `pages_blocks_client`(`id`) ON UPDATE no action ON DELETE cascade
);
INSERT INTO pages_blocks_client_clients VALUES(1,'68319954280260611e77b05e','68319957280260611e77b060','Hiba Rent Car',16,NULL);
INSERT INTO pages_blocks_client_clients VALUES(2,'68319954280260611e77b05e','683515f376d3e03ea64a330e','SPX',18,NULL);
INSERT INTO pages_blocks_client_clients VALUES(3,'68319954280260611e77b05e','683527f44dbbf6e9e2ac7a0d','JTS',19,NULL);
CREATE INDEX `users_updated_at_idx` ON `users` (`updated_at`);
CREATE INDEX `users_created_at_idx` ON `users` (`created_at`);
CREATE UNIQUE INDEX `users_email_idx` ON `users` (`email`);
CREATE INDEX `media_updated_at_idx` ON `media` (`updated_at`);
CREATE INDEX `media_created_at_idx` ON `media` (`created_at`);
CREATE UNIQUE INDEX `media_filename_idx` ON `media` (`filename`);
CREATE INDEX `payload_locked_documents_global_slug_idx` ON `payload_locked_documents` (`global_slug`);
CREATE INDEX `payload_locked_documents_updated_at_idx` ON `payload_locked_documents` (`updated_at`);
CREATE INDEX `payload_locked_documents_created_at_idx` ON `payload_locked_documents` (`created_at`);
CREATE INDEX `payload_preferences_key_idx` ON `payload_preferences` (`key`);
CREATE INDEX `payload_preferences_updated_at_idx` ON `payload_preferences` (`updated_at`);
CREATE INDEX `payload_preferences_created_at_idx` ON `payload_preferences` (`created_at`);
CREATE INDEX `payload_preferences_rels_order_idx` ON `payload_preferences_rels` (`order`);
CREATE INDEX `payload_preferences_rels_parent_idx` ON `payload_preferences_rels` (`parent_id`);
CREATE INDEX `payload_preferences_rels_path_idx` ON `payload_preferences_rels` (`path`);
CREATE INDEX `payload_preferences_rels_users_id_idx` ON `payload_preferences_rels` (`users_id`);
CREATE INDEX `payload_migrations_updated_at_idx` ON `payload_migrations` (`updated_at`);
CREATE INDEX `payload_migrations_created_at_idx` ON `payload_migrations` (`created_at`);
CREATE INDEX `payload_locked_documents_rels_order_idx` ON `payload_locked_documents_rels` (`order`);
CREATE INDEX `payload_locked_documents_rels_parent_idx` ON `payload_locked_documents_rels` (`parent_id`);
CREATE INDEX `payload_locked_documents_rels_path_idx` ON `payload_locked_documents_rels` (`path`);
CREATE INDEX `payload_locked_documents_rels_users_id_idx` ON `payload_locked_documents_rels` (`users_id`);
CREATE INDEX `payload_locked_documents_rels_media_id_idx` ON `payload_locked_documents_rels` (`media_id`);
CREATE INDEX `payload_locked_documents_rels_pages_id_idx` ON `payload_locked_documents_rels` (`pages_id`);
CREATE INDEX `pages_blocks_hero_order_idx` ON `pages_blocks_hero` (`_order`);
CREATE INDEX `pages_blocks_hero_parent_id_idx` ON `pages_blocks_hero` (`_parent_id`);
CREATE INDEX `pages_blocks_hero_path_idx` ON `pages_blocks_hero` (`_path`);
CREATE INDEX `pages_blocks_hero_image_idx` ON `pages_blocks_hero` (`image_id`);
CREATE INDEX `pages_blocks_grid_items_order_idx` ON `pages_blocks_grid_items` (`_order`);
CREATE INDEX `pages_blocks_grid_items_parent_id_idx` ON `pages_blocks_grid_items` (`_parent_id`);
CREATE INDEX `pages_blocks_grid_items_path_idx` ON `pages_blocks_grid_items` (`_path`);
CREATE INDEX `pages_blocks_grid_items_grit_items_order_idx` ON `pages_blocks_grid_items_grit_items` (`_order`);
CREATE INDEX `pages_blocks_grid_items_grit_items_parent_id_idx` ON `pages_blocks_grid_items_grit_items` (`_parent_id`);
CREATE INDEX `pages_blocks_grid_items_grit_items_img_idx` ON `pages_blocks_grid_items_grit_items` (`img_id`);
CREATE INDEX `pages_blocks_grid_items_grit_items_spare_img_idx` ON `pages_blocks_grid_items_grit_items` (`spare_img_id`);
CREATE INDEX `pages_blocks_last_project_order_idx` ON `pages_blocks_last_project` (`_order`);
CREATE INDEX `pages_blocks_last_project_parent_id_idx` ON `pages_blocks_last_project` (`_parent_id`);
CREATE INDEX `pages_blocks_last_project_path_idx` ON `pages_blocks_last_project` (`_path`);
CREATE INDEX `pages_blocks_last_project_project_items_order_idx` ON `pages_blocks_last_project_project_items` (`_order`);
CREATE INDEX `pages_blocks_last_project_project_items_parent_id_idx` ON `pages_blocks_last_project_project_items` (`_parent_id`);
CREATE INDEX `pages_blocks_last_project_project_items_img_idx` ON `pages_blocks_last_project_project_items` (`img_id`);
CREATE INDEX `pages_seo_seo_og_image_idx` ON `pages` (`seo_og_image_id`);
CREATE INDEX `pages_updated_at_idx` ON `pages` (`updated_at`);
CREATE INDEX `pages_created_at_idx` ON `pages` (`created_at`);
CREATE INDEX `pages_blocks_client_order_idx` ON `pages_blocks_client` (`_order`);
CREATE INDEX `pages_blocks_client_parent_id_idx` ON `pages_blocks_client` (`_parent_id`);
CREATE INDEX `pages_blocks_client_path_idx` ON `pages_blocks_client` (`_path`);
CREATE INDEX `pages_blocks_client_clients_order_idx` ON `pages_blocks_client_clients` (`_order`);
CREATE INDEX `pages_blocks_client_clients_parent_id_idx` ON `pages_blocks_client_clients` (`_parent_id`);
CREATE INDEX `pages_blocks_client_clients_logo_idx` ON `pages_blocks_client_clients` (`logo_id`);
CREATE INDEX `pages_blocks_client_clients_name_logo_idx` ON `pages_blocks_client_clients` (`name_logo_id`);
COMMIT;
