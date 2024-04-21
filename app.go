package main

import (
	"context"
	"fmt"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

// Get all notes in the database
func (a *App) GetNotes() []Note {
	var notes []Note
	DB.Db.Find(&notes)

	return notes
}

// Create a new note in the database
func (a *App) CreateNote(title string, content string) Note {
	note := Note{
		Title:   title,
		Content: content,
	}

	DB.Db.Create(&note)

	return note
}

// Delete a note from the database
func (a *App) DeleteNote(id int) {
	DB.Db.Delete(&Note{}, id)
}
