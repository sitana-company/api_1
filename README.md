# api_1

Introduction to API REST development with JavaScript using the Netuno Platform.

Tutorial video in portuguese:

<a href="http://www.youtube.com/watch?v=mG12ZRgBlQk" target="_blank" title="Introdução API REST JSON em JS - Parte 1">
 <img src="https://raw.githubusercontent.com/sitana-company/api_1/main/docs/video.jpg" alt="Tutorial Video" width="320" height="180" />
</a>

Here are the services source codes:

- [server/services/](server/services/)

Documentation:

- [REST Web Services resource](https://doc.netuno.org/docs/academy/server/services/rest).

## Automatic Application Install

```
./netuno app github=sitana-company/api_1
```

### Running

Start the Netuno Server:

```
./netuno server app=api_1
```

## From Scratch

Clone this project inside this folder:

- `(Netuno Root directory)/apps/api_1/`

### Configuration

You'll need to copy the sample configuration, for example:

- `cp config/sample.json config/_development.json`

Modify it as you need to match your environment.

### Running

In the Netuno root directory run:

```
./netuno server app=api_1
```

