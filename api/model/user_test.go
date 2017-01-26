package model

import (
	"bytes"
	"net/http/httptest"
	"testing"
)

func TestNewUser(t *testing.T) {
	clearDB() // Warning! Before testing we wipe out the DB!

	data := []byte(`{"name": "octavio", "password":"588a56af5df74a9f36b09575"}`)
	req := httptest.NewRequest("POST", "/user/new", bytes.NewReader(data))
	rw := httptest.NewRecorder()

	UserNewHandler(rw, req)

	if rw.Code != 200 {
		t.Error("Wrong response code")
	}

	if rw.Body.String() != "Saved user octavio" {
		t.Error("Wrong response body")
	}
}
