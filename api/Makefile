all: build test

VERSION=$(shell git rev-parse --abbrev-ref HEAD)
BUILDARGS = -installsuffix netgo -ldflags "-linkmode external -extldflags -static -X main.VersionString=$(VERSION)" -v
UNAME_S := $(shell uname -s)
ifeq ($(UNAME_S),Darwin)
	BUILDARGS = -ldflags "-linkmode external -X main.VersionString=$(VERSION)" -v
endif

build:
	go build $(BUILDARGS)
