package model

import (
	"encoding/json"
	"errors"
	"net/http"
	"time"
)

// Register model represents an item in the register DB
type Register struct {
	Time time.Time `json:"time"`
}

// RegisterNewHandler expects GET to save a new register in DB
func RegisterNewHandler(rw http.ResponseWriter, req *http.Request) {
	r := Register{Time: time.Now()}
	err := r.store()

	if err != nil {
		http.Error(rw, err.Error(), 500)
	} else {
		rw.Write([]byte("Saved register " + r.Time.String()))
	}
}

func (r Register) store() error {
	registers := r.openCollection()

	for _, element := range registers {
		if registerTimeEquals(element.Time, r.Time) {
			return errors.New("Register already exists")
		}
	}

	registers = append(registers, r)

	r.saveCollection(registers)
	return nil
}

func registerTimeEquals(a, b time.Time) bool {
	return a.Year() == b.Year() && a.Day() == b.Day() && a.Minute() == b.Minute()
}

func (r Register) openCollection() []Register {
	db := readFile("registers.json")
	registers := make([]Register, 0)

	err := json.Unmarshal(db, &registers)
	check(err)

	return registers
}

func (r Register) saveCollection(c []Register) {
	data, err := json.MarshalIndent(c, "", "  ")
	check(err)

	writeFile("registers.json", data)
}
