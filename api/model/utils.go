package model

import (
	"io/ioutil"
	"os"
)

const dbPath = "db"

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func readFile(path string) []byte {
	if _, err := os.Stat(path); os.IsNotExist(err) { // when file doesn't exist yet
		os.Mkdir(dbPath, 0755)
		ioutil.WriteFile(path, []byte("[]"), 0644) // create empty json array
	}

	db, _ := ioutil.ReadFile(path)
	return db
}
