package model

import (
	"encoding/json"
	"io/ioutil"
	"os"
)

const path = "db/users.json"

// User model represents an item in the user DB
type User struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}

// Save stores user in db
func (u User) Save() error {
	users := openCollection()

	users = append(users, u)

	saveCollection(users)
	return nil
}

func openCollection() []User {
	if _, err := os.Stat(path); os.IsNotExist(err) { // when file doesn't exist yet
		os.Mkdir("db", 0644) // TODO: extract from 'path' string
		ioutil.WriteFile(path, []byte("[]"), 0644)
	}

	db, _ := ioutil.ReadFile(path)
	users := make([]User, 0)
	json.Unmarshal(db, &users)

	return users
}

func saveCollection(c []User) {
	data, _ := json.MarshalIndent(c, "", "  ")
	ioutil.WriteFile(path, data, 0644)
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}
