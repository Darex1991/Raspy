# RPCi

RPCi (**R**aspbery **P**i **C**ontrol **i**nterface) is a small REST API server, designed for the **Raspberry Pi**.

### Installation

RPCi requires:

* NPM
* Python
* Flask

Clone this repository, and run ``npm install`` in the ``client`` folder.

### Usage

##### Building the front end

Before usage, the front end needs to be built into a bundle in the ``dist`` folder. In the project root folder, type the following:

```bash
$ make client
```

Wait for the compilation to complete.

##### Start the server

In the project root folder, type the following:

```bash
$ make server
```

Make sure the front end has ben built into a bundle.

You can do both at the same time with just the following command:

```bash
$ make
```
