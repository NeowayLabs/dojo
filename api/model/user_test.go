package model

import (
	"bytes"
	"io/ioutil"
	"net/http/httptest"
	"path"
	"strings"
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

		content, err := ioutil.ReadFile(path.Join(dbPath, "users.json"))
		if err != nil {
			t.Error(err)
		}

		expected := []byte(strings.Replace(`[
		  {
		    "name": "octavio",
		    "password": "588a56af5df74a9f36b09575"
		  }
		]`, "\t", "", -1))

		if !bytes.Equal(content, expected) {
			t.Error("DB file doesn't mach expected data")
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

		content, err := ioutil.ReadFile(path.Join(dbPath, "users.json"))
		if err != nil {
			t.Error(err)
		}

		expected := []byte(strings.Replace(`[
		  {
		    "name": "octavio",
		    "password": "588a56af5df74a9f36b09575"
		  }
		]`, "\t", "", -1))

		if !bytes.Equal(content, expected) {
			t.Error("DB file doesn't mach expected data")
		}
	})

	clearDB()
}
