package main

import (
	"net/http"

	"github.com/NeowayLabs/dojo/api/model"
)

const entrypoint = "/api/v1"

func main() {
	http.HandleFunc(entrypoint+"/user/new", model.UserNewHandler)
	http.HandleFunc(entrypoint+"/clock/hit", model.RegisterNewHandler)
	http.ListenAndServe(":8080", nil)
}
