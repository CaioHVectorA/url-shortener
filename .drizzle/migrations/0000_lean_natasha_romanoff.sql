CREATE TABLE `analytics` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`ip` text NOT NULL,
	`user_agent` text NOT NULL,
	`referer` text NOT NULL,
	`short_id` integer NOT NULL,
	FOREIGN KEY (`short_id`) REFERENCES `shorter`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `analytics_id_unique` ON `analytics` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `analytics_id_idx` ON `analytics` (`id`);--> statement-breakpoint
CREATE TABLE `shorter` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`short` text(255) NOT NULL,
	`long` text NOT NULL,
	`is_active` integer NOT NULL,
	`user_id` integer NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `shorter_id_unique` ON `shorter` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `shorter_id_idx` ON `shorter` (`id`);--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`first_name` text(255) NOT NULL,
	`last_name` text(255) NOT NULL,
	`email` text NOT NULL,
	`is_active` integer NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_id_unique` ON `user` (`id`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_id_idx` ON `user` (`id`);