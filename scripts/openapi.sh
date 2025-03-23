#!/usr/bin/env bash

set -e

OUT=src/api/rest
IN=src/api/rest

# IN has multiple name.yaml files.
# for each i want to create name.d.ts inside out
create_files() {
	for i in $(find "$IN" -name "*.yaml" -type f | grep -v .d.ts); do
		OUT_FILE="$OUT/$(basename "$i" .yaml).d.ts"
		echo "Generating $OUT_FILE"
		pnpm exec openapi-typescript $i --output $OUT_FILE
	done
}
create_files
