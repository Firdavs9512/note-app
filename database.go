package main

import (
	"os"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

type Database struct {
	Db *gorm.DB
}

func (d *Database) Init() error {
	var err error
	dir, err := os.UserHomeDir()
	if err != nil {
		return err
	}

	if err := createDirectoryIfNotExists(dir + "/.note-app"); err != nil {
		return err
	}

	database_file := dir + "/.note-app/database.db"
	d.Db, err = gorm.Open(sqlite.Open(database_file), &gorm.Config{})
	if err != nil {
		return err
	}

	// Migrate the schema
	d.Db.AutoMigrate(&Note{})

	return nil
}

func createDirectoryIfNotExists(path string) error {
	if _, err := os.Stat(path); os.IsNotExist(err) {
		err = os.MkdirAll(path, 0755)
		if err != nil {
			return err
		}
	}
	return nil
}
