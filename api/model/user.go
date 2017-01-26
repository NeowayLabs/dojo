package model

import (
	"encoding/json"
	"errors"
	"net/http"
)

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
	users := u.openCollection()

	for _, element := range users {
		if element.Name == u.Name {
			return errors.New("User already exists")
		}
	}

	users = append(users, u)

	u.saveCollection(users)
	return nil
}

func (u User) openCollection() []User {
	db := readFile("users.json")
	users := make([]User, 0)

	err := json.Unmarshal(db, &users)
	check(err)

	return users
}

func (u User) saveCollection(c []User) {
	data, err := json.MarshalIndent(c, "", "  ")
	check(err)

	writeFile("users.json", data)
}
