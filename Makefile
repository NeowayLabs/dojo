all: build test test-api test-client

build:
	cd api && make -e build

test-api: build
	./hack/check.sh

test-client:
	npm --prefix client/ test

test: test-api test-client

install:
	npm --prefix client/ install
