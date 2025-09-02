- games 表

```sql
  CREATE TABLE `games` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '游戏ID',
  `name` VARCHAR(255) NOT NULL COMMENT '游戏名称',
  `short_name` VARCHAR(50) NOT NULL COMMENT '游戏简称',
  `cover_url` VARCHAR(255) DEFAULT NULL COMMENT '游戏封面图URL',
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_short_name` (`short_name`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='游戏信息表';
```

- items 表

```sql
CREATE TABLE `items` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '物品ID',
    `game_id` INT UNSIGNED NOT NULL COMMENT '关联 games.id',
    `name` VARCHAR(255) NOT NULL COMMENT '物品名称',
    `description` TEXT COMMENT '物品描述',
    `icon_url` VARCHAR(255) DEFAULT NULL COMMENT '物品图标URL',
    `type` VARCHAR(50) DEFAULT NULL COMMENT '物品类型',
    `rarity` VARCHAR(50) DEFAULT NULL COMMENT '稀有度',
    `sell_price` INT DEFAULT 0 COMMENT '出售价格',
    `buy_price` INT DEFAULT 0 COMMENT '购买价格',
    PRIMARY KEY (`id`),
    KEY `idx_game_id` (`game_id`),
    KEY `idx_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='物品信息表';
```

- crafting_recipes 表

```sql
CREATE TABLE `crafting_recipes` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '配方ID',
    `game_id` INT UNSIGNED NOT NULL COMMENT '关联 games.id',
    `result_item_id` INT UNSIGNED NOT NULL COMMENT '关联 items.id',
    `station` VARCHAR(255) DEFAULT NULL COMMENT '制造站点',
    `quantity` INT UNSIGNED DEFAULT 1 COMMENT '制造出物品的数量',
    PRIMARY KEY (`id`),
    KEY `idx_game_id` (`game_id`),
    KEY `idx_result_item_id` (`result_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='制造配方表';
```

- recipe_materials 表

```sql
CREATE TABLE `recipe_materials` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '材料ID',
    `recipe_id` INT UNSIGNED NOT NULL COMMENT '关联 crafting_recipes.id',
    `material_item_id` INT UNSIGNED NOT NULL COMMENT '关联 items.id',
    `quantity` INT UNSIGNED NOT NULL COMMENT '所需材料的数量',
    PRIMARY KEY (`id`),
    KEY `idx_recipe_id` (`recipe_id`),
    KEY `idx_material_item_id` (`material_item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='配方材料表';
```

- npcs 表

```sql
CREATE TABLE `npcs` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT 'NPC ID',
    `game_id` INT UNSIGNED NOT NULL COMMENT '关联 games.id',
    `name` VARCHAR(255) NOT NULL COMMENT 'NPC 名称',
    `description` TEXT COMMENT 'NPC 描述',
    `portrait_url` VARCHAR(255) DEFAULT NULL COMMENT 'NPC 头像URL',
    `location` VARCHAR(255) DEFAULT NULL COMMENT '出现地点',
    `dialogue` TEXT COMMENT '常用对话或好感度对话',
    `is_marriageable` BOOLEAN DEFAULT FALSE COMMENT '是否可结婚',
    PRIMARY KEY (`id`),
    KEY `idx_game_id` (`game_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='NPC信息表';
```

- npc_gifts 表

```sql
CREATE TABLE `npc_gifts` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '礼物偏好ID',
    `npc_id` INT UNSIGNED NOT NULL COMMENT '关联 npcs.id',
    `item_id` INT UNSIGNED NOT NULL COMMENT '关联 items.id',
    `preference` VARCHAR(50) NOT NULL COMMENT '偏好类型',
    PRIMARY KEY (`id`),
    KEY `idx_npc_id` (`npc_id`),
    KEY `idx_item_id` (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='NPC礼物偏好表';
```

- enemies 表

```sql
CREATE TABLE `enemies` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '敌人ID',
    `game_id` INT UNSIGNED NOT NULL COMMENT '关联 games.id',
    `name` VARCHAR(255) NOT NULL COMMENT '敌人名称',
    `health` INT UNSIGNED DEFAULT 0 COMMENT '生命值',
    `damage` INT UNSIGNED DEFAULT 0 COMMENT '伤害',
    `defense` INT UNSIGNED DEFAULT 0 COMMENT '防御力',
    `location` VARCHAR(255) DEFAULT NULL COMMENT '出现地点/环境',
    `is_boss` BOOLEAN DEFAULT FALSE COMMENT '是否为BOSS',
    PRIMARY KEY (`id`),
    KEY `idx_game_id` (`game_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='敌人信息表';
```

- item_drops 表

```sql
CREATE TABLE `item_drops` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '掉落ID',
    `enemy_id` INT UNSIGNED NOT NULL COMMENT '关联 enemies.id',
    `item_id` INT UNSIGNED NOT NULL COMMENT '关联 items.id',
    `drop_rate` DECIMAL(5, 2) DEFAULT 0.00 COMMENT '掉落几率（百分比）',
    `min_quantity` INT UNSIGNED DEFAULT 1 COMMENT '最少掉落数量',
    `max_quantity` INT UNSIGNED DEFAULT 1 COMMENT '最多掉落数量',
    PRIMARY KEY (`id`),
    KEY `idx_enemy_id` (`enemy_id`),
    KEY `idx_item_id` (`item_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='物品掉落表';
```
