package model

// User model represents an item in the user DB
type User struct {
	Name     string
	Password string
}

func (u *User) save() error {
	return nil
}

func openCollection() {

}
