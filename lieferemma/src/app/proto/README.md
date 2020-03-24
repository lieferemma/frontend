# Lieferemma gRPC API

Lieferemma uses gRPC to communicate between the different Clients and the Server. In this repo you can find
the proto-file and the generated code.

## How to generate code 


### python

setup your system like described here: https://grpc.io/docs/tutorials/basic/python/

generate your output folder

`mkdir generated_code`

`python3 -m grpc_tools.protoc -I . --python_out=./generated_code --grpc_python_out=./generated_code lieferemma_api.proto`

### web 

make sure you have `protoc` installed. Instructions can be found [here](http://google.github.io/proto-lens/installing-protoc.html).

`mkdir generated_code`

Install the `protoc-gen-grpc-web`  plugin:
   
1. Download the plugin

`curl -o protoc-gen-grpc-web -sL https://github.com/grpc/grpc-web/releases/download/1.0.7/protoc-gen-grpc-web-1.0.7-linux-x86_64 `

2. Move the binary 

`sudo mv protoc-gen-grpc-web /usr/local/bin/protoc-gen-grpc-web`

3. Make it executable 

` sudo chmod +x /usr/local/bin/protoc-gen-grpc-web`


`protoc -I=. api.proto --grpc-web_out=import_style=commonjs,mode=grpcwebtext:.`


### node 

prerequisits:

- node v12.16.1 

`npm install -g grpc-tools`

`grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./generated_code/node/ --grpc_out=../generated_code/node/--plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` api.proto`





# TODO

Lieferemma is still in development stage therefore not all needed information is in the API yet.

- [ ] Add commisioning workflow via getItemsforRoute to be able to check that you have everything before you drive off
