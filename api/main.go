package main

import (
	"encoding/json"
	"net/http"

	"github.com/NeowayLabs/dojo/api/model"
)

func main() {
	// http.HandleFunc("/api/v1/user/new", newUserHandler)
	// http.ListenAndServe(":8080", nil)
	u := model.User{Name: "Banana", Password: "321"}
	u.Save()
}

func newUserHandler(rw http.ResponseWriter, req *http.Request) {
	decoder := json.NewDecoder(req.Body)
	defer req.Body.Close()

	var u model.User
	err := decoder.Decode(&u)
	check(err)

	err2 := u.Save()
	check(err2)
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}
