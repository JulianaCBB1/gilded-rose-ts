# Gilded Rose

This is the Gilded Rose kata implemented in TypeScript. Subclasses have been used to implement specific behaviour to each type of item. Now, when new item types are added, there is no need to update `updateQuality()`, making the code much cleaner and thus easier to maintain and extend.

## Getting started

Install dependencies

```sh
npm install
```

## Run the unit tests from the Command-Line

Unit tests have been implemented in jest

```sh
npm run test:jest
```

To run all tests in watch mode

```sh
npm run test:jest:watch
```

## Run the TextTest fixture from the Command-Line

_You may need to install `ts-node`_

```sh
npx ts-node test/golden-master-text-test.ts
```

Or with number of days as args:

```sh
npx ts-node test/golden-master-text-test.ts 10
```

You should make sure the command shown above works when you execute it in a terminal before trying to use TextTest (see below).

## Run the TextTest approval test that comes with this project

There are instructions in the [TextTest Readme](../texttests/README.md) for setting up TextTest. You will need to specify the Python executable and interpreter in [config.gr](../texttests/config.gr). Uncomment these lines:

    executable:${TEXTTEST_HOME}/python/texttest_fixture.py
    interpreter:python
