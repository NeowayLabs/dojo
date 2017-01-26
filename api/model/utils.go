package model

import (
	"io/ioutil"
	"os"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func readFile(fileName string) []byte {
	dbPath := os.Getenv("GOPATH") + "/src/github.com/NeowayLabs/dojo/api/_db"
	file := dbPath + "/" + fileName

	if _, err := os.Stat(file); os.IsNotExist(err) { // when file doesn't exist yet
		os.Mkdir(dbPath, 0755)
		ioutil.WriteFile(file, []byte("[]"), 0644) // create empty json array
	}

	db, err := ioutil.ReadFile(file)
	check(err)
	return db
}

func writeFile(fileName string, data []byte) {
	dbPath := os.Getenv("GOPATH") + "/src/github.com/NeowayLabs/dojo/api/_db/"

	err := ioutil.WriteFile(dbPath+fileName, data, 0644)
	check(err)
}
