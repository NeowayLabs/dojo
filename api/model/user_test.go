package model

import (
	"bytes"
	"net/http/httptest"
	"testing"
)

func TestNewUser(t *testing.T) {
	clearDB() // Warning! Before testing we wipe out the DB!

	t.Run("valid user in empty db", func(t *testing.T) {
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
	})

	t.Run("alredy existing user", func(t *testing.T) {
		data := []byte(`{"name": "octavio", "password":"588a56af5df74a9f36b09575"}`)
		req := httptest.NewRequest("POST", "/user/new", bytes.NewReader(data))
		rw := httptest.NewRecorder()

		UserNewHandler(rw, req)

		if rw.Code != 500 {
			t.Error("Wrong response code")
		}

		if rw.Body.String() != "User already exists\n" {
			t.Error("Wrong response body")
		}
	})

	clearDB()
}
