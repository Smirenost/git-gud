#!/usr/bin/env node
'use strict';

const meow = require('meow');
const lib = require('./index.js');

const cli = meow(`
 Usage
   $ good <command>
 Examples
   $ good open         # opens repo page
   $ good issues       # opens issues page
   $ good prs          # opens pull requests page
   $ good pr           # opens current pull request page
   $ good releases     # opens releases page
   $ good branches     # opens branches page
   $ good wiki         # opens wiki page
   $ good settings     # opens settings page
   $ good contributors # opens contributors page
   $ good new-pr       # opens new pull request page`,
{});

if (cli.input.length > 0 && lib.isValidCommand(cli.input[0])) {
	lib.init(cli.input[0]);
} else {
	cli.showHelp(2);
}
