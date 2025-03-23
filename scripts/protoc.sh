#!/usr/bin/env bash

set -e

OUT=src/api/rpc
IN=proto

mkdir -p "$OUT" "$IN"

if ! find "$IN" -name "*.proto" -type f | grep -q .; then
	echo "Error: No .proto files found in $IN directory"
	exit 1
fi

DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" &>/dev/null && pwd)"

# protoc --proto_path=./api \
#        --proto_path=./third_party \
# 	       --go_out=paths=source_relative:./api \
# 	       --go-http_out=paths=source_relative:./api \
# 	       --go-grpc_out=paths=source_relative:./api \
#        --openapi_out=fq_schema_naming=true,default_response=false:. \
#        $(API_PROTO_FILES)

protoc -I=$DIR \
	--plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
	--proto_path=$IN/third_party \
	--proto_path=$IN/api \
	--js_out=import_style=commonjs,binary:$OUT \
	--ts_out=$OUT \
	\
	$IN/api/*.proto # --grpc-web_out=import_style=typescript,mode=grpcweb:$OUT \

# protoc -I=$IN $IN/*.proto \
# 	--js_out=import_style=commonjs:$OUT \
# 	--grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT

# protoc -I=$DIR echo.proto \
# 	--js_out=import_style=commonjs:$OUT_DIR \
# 	--grpc-web_out=import_style=commonjs,mode=grpcwebtext:$OUT_DIR
#
