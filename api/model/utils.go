package model

import (
	"io/ioutil"
	"os"
	"path/filepath"
)

// Folder where collection (json) files will be stored		TODO: Make it configurable
var dbPath = os.Getenv("GOPATH") + "/src/github.com/NeowayLabs/dojo/api/_db/"

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func readFile(fileName string) []byte {
	file := filepath.Join(dbPath, fileName)

	if _, err := os.Stat(file); os.IsNotExist(err) { // when file doesn't exist yet
		os.Mkdir(dbPath, 0755)
		ioutil.WriteFile(file, []byte("[]"), 0644) // create empty json array
	}

	db, err := ioutil.ReadFile(file)
	check(err)
	return db
}

func writeFile(fileName string, data []byte) {
	err := ioutil.WriteFile(dbPath+fileName, data, 0644)
	check(err)
}

// clearDB empties the db folder
func clearDB() {
	d, err := os.Open(dbPath)
	if os.IsNotExist(err) {
		os.Mkdir(dbPath, 0755)
		d, err = os.Open(dbPath)
	}	
	check(err)
	
	defer d.Close()
	names, err := d.Readdirnames(-1)
	check(err)

	for _, name := range names {
		err = os.RemoveAll(filepath.Join(dbPath, name))
		check(err)
	}
}
