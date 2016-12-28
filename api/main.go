package main

import (
	"net/http"

	"github.com/NeowayLabs/dojo/api/model"
)

func main() {
	http.HandleFunc("/api/v1/user/new", model.UserNewHandler)
	http.ListenAndServe(":8080", nil)
}
