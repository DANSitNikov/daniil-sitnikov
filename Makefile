REGISTRY_USER ?=
IMAGE_NAME ?= website-v1
IMAGE_VERSION ?= 1.0.0

ifeq ($(strip $(REGISTRY_USER)),)
IMAGE_REPO := $(IMAGE_NAME)
else
IMAGE_REPO := $(REGISTRY_USER)/$(IMAGE_NAME)
endif

.PHONY: docker-build docker-run docker-push docker-build-dev docker-run-dev

docker-build:
	docker build -t $(IMAGE_REPO):latest -t $(IMAGE_REPO):$(IMAGE_VERSION) .

docker-run:
	docker run --rm -p 3000:3000 $(IMAGE_REPO):latest

docker-push:
	docker push $(IMAGE_REPO):latest
	docker push $(IMAGE_REPO):$(IMAGE_VERSION)

docker-build-dev:
	docker build -f Dockerfile.dev -t $(IMAGE_REPO):dev .

docker-run-dev:
	docker run --rm -p 3000:3000 -v "$$(pwd):/app" -v /app/node_modules $(IMAGE_REPO):dev
