package main

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Database struct {
	Db *gorm.DB
}

func (d *Database) Init() error {
	var err error
	// TODO: Change this to a proper database
	d.Db, err = gorm.Open(sqlite.Open("/Users/whoami/database.db"), &gorm.Config{})
	if err != nil {
		return err
	}

	// Migrate the schema
	d.Db.AutoMigrate(&Note{})

	return nil
}
