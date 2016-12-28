package model

import (
	"encoding/json"
	"errors"
	"io/ioutil"
	"net/http"
	"os"
)

const path = "db/users.json"

// User model represents an item in the user DB
type User struct {
	Name     string `json:"name"`
	Password string `json:"password"`
}

// UserNewHandler receives POST with user data in body & saves it in DB
func UserNewHandler(rw http.ResponseWriter, req *http.Request) {
	decoder := json.NewDecoder(req.Body)
	defer req.Body.Close()

	var u User
	err := decoder.Decode(&u)
	check(err)

	err = u.store()
	if err != nil {
		http.Error(rw, err.Error(), 500)
	} else {
		rw.Write([]byte("Saved user " + u.Name))
	}
}

func (u User) store() error {
	users := openCollection()

	for _, element := range users {
		if element.Name == u.Name {
			return errors.New("User already exists")
		}
	}

	users = append(users, u)

	saveCollection(users)
	return nil
}

func openCollection() []User {
	if _, err := os.Stat(path); os.IsNotExist(err) { // when file doesn't exist yet
		os.Mkdir("db", 0755) // TODO: extract from 'path' string
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
