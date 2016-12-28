package main

import (
	"encoding/json"
	"net/http"

	"github.com/NeowayLabs/dojo/api/model"
)

func main() {
	http.HandleFunc("/api/v1/user/new", newUserHandler)
	http.ListenAndServe(":8080", nil)
}

func newUserHandler(rw http.ResponseWriter, req *http.Request) {
	decoder := json.NewDecoder(req.Body)
	defer req.Body.Close()

	var u model.User
	err := decoder.Decode(&u)
	check(err)

	err = u.Save()
	if err != nil {
		http.Error(rw, err.Error(), 500)
	} else {
		rw.Write([]byte("Saved user " + u.Name))
	}
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}
