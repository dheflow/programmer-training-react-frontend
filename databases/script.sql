-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema DB_Rental
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema DB_Rental
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `DB_Rental` DEFAULT CHARACTER SET utf8 ;
USE `DB_Rental` ;

-- -----------------------------------------------------
-- Table `DB_Rental`.`tb_users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_Rental`.`tb_users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `username` VARCHAR(255) NULL,
  `password` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB_Rental`.`tb_customer`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_Rental`.`tb_customer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `id_number` VARCHAR(255) NULL,
  `name` VARCHAR(255) NULL,
  `telephone` VARCHAR(255) NULL,
  `address` VARCHAR(255) NULL,
  `handphone` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB_Rental`.`tb_brand`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_Rental`.`tb_brand` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `description` TEXT(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB_Rental`.`tb_vehicle_type`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_Rental`.`tb_vehicle_type` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `brand_id` INT NULL,
  `name` VARCHAR(45) NULL,
  `description` TEXT(255) NULL,
  `price` FLOAT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_brand_id_idx` (`brand_id` ASC) VISIBLE,
  CONSTRAINT `fk_brand_id`
    FOREIGN KEY (`brand_id`)
    REFERENCES `DB_Rental`.`tb_brand` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB_Rental`.`tb_motor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_Rental`.`tb_motor` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `police_number` VARCHAR(255) NULL,
  `vehicle_type_id` INT NULL,
  `year_build` INT NULL,
  `year_operated` INT NULL,
  `fuel_type` VARCHAR(255) NULL,
  `owner_name` VARCHAR(255) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_vehicle_type_id_idx` (`vehicle_type_id` ASC) VISIBLE,
  CONSTRAINT `fk_vehicle_type_id`
    FOREIGN KEY (`vehicle_type_id`)
    REFERENCES `DB_Rental`.`tb_vehicle_type` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `DB_Rental`.`tb_rental`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `DB_Rental`.`tb_rental` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `transaction_number` VARCHAR(255) NULL,
  `transaction_date` DATETIME NULL,
  `users_id` INT NULL,
  `customer_id` INT NULL,
  `motor_id` INT NULL,
  `rent_duration` INT NULL,
  `price` FLOAT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_users_id_idx` (`users_id` ASC) VISIBLE,
  INDEX `fk_customer_id_idx` (`customer_id` ASC) VISIBLE,
  INDEX `fk_motor_id_idx` (`motor_id` ASC) VISIBLE,
  CONSTRAINT `fk_users_id`
    FOREIGN KEY (`users_id`)
    REFERENCES `DB_Rental`.`tb_users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_customer_id`
    FOREIGN KEY (`customer_id`)
    REFERENCES `DB_Rental`.`tb_customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_motor_id`
    FOREIGN KEY (`motor_id`)
    REFERENCES `DB_Rental`.`tb_motor` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
