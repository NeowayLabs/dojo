package model

// Model is an interface for persisting data in DB file
type Model interface {
	read() error
	save() error
}

//TODO: This interface may represent the collection or single model?
