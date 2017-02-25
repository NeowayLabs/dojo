all: build test

build:
	cd api && make -e build

test: build
	./hack/check.sh
