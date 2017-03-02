package model

import (
	"net/http/httptest"
	"regexp"
	"testing"
)

func TestRegisters(t *testing.T) {
	clearDB() // Warning! Before testing we wipe out the DB!

	t.Run("fresh new register in empty db", func(t *testing.T) {
		req := httptest.NewRequest("GET", "/clock/hit", nil)
		rw := httptest.NewRecorder()

		RegisterNewHandler(rw, req)

		if rw.Code != 200 {
			t.Error("Wrong response code")
		}

		// e.g. "Saved register 2017-01-27 11:08:22.637121123 -0200 BRST"
		var regx = regexp.MustCompile(`Saved register \d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}.\d+ -\d+ \w+`)
		if !regx.MatchString(rw.Body.String()) {
			t.Errorf("Wrong response body: '%s'", rw.Body.String())
		}
	})

	t.Run("hitting clock with already registered time", func(t *testing.T) {
		req := httptest.NewRequest("GET", "/clock/hit", nil)
		rw := httptest.NewRecorder()

		RegisterNewHandler(rw, req)

		if rw.Code != 500 {
			t.Error("Wrong response code")
		}

		if rw.Body.String() != "Register already exists\n" {
			t.Error("Wrong response body")
		}
	})

	clearDB()
}
