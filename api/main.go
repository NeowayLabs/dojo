package main

import (
    "os"
	"fmt"
    "net/http"
    "encoding/json"
    "github.com/NeowayLabs/dojo/api/user"
)

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func newUserHandler(rw http.ResponseWriter, req *http.Request) {
	decoder := json.NewDecoder(req.Body)
    defer req.Body.Close()

    var u user.User
    err := decoder.Decode(&u)
	check(err)

    fmt.Println(u)
    f, err := os.OpenFile("db.json", os.O_APPEND|os.O_WRONLY, 0600)
    check(err)
    defer f.Close()

    ju, err := json.Marshal(u)
    check(err)

    _, err = f.Write(ju)
    check(err)
}

func main() {
	http.HandleFunc("/api/v1/user/new", newUserHandler)
	http.ListenAndServe(":8080", nil)
}
