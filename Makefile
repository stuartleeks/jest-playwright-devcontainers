SHELL=bash

URL?=github.com

.PHONY: help
help: ## show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%s\033[0m|%s\n", $$1, $$2}' \
		| column -t -s '|'

test: ## run tests
	yarn run jest 


test-debug: ## run tests in debug mode
	PWDEBUG=1 yarn run jest 

record: ## record a test
	yarn playwright codegen ${URL}