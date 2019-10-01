#!/usr/bin/env node
'use strict';

const meow = require('meow');
const boxen = require('boxen');
const oclock = require('o-clock');
const feedback = require('@abranhe/feedback');

const cli = meow(
	`
	Usage
	  $ wtii

		╭───────╮
		│3:07 PM│
		╰───────╯

	Options
	  -f, --feedback  Send a feedback
	  -h, --help      Show help message and close
	  -v, --version   View package Version

	Examples
	  $ what-time-is-it

		╭───────╮
		│7:03 PM│
		╰───────╯
`,
	{
		flags: {
			help: {
				type: 'boolean',
				alias: 'h'
			},
			version: {
				type: 'boolean',
				alias: 'v'
			},
			feedback: {
				type: 'boolean',
				alias: 'f'
			}
		}
	},
);

console.log(
	boxen(oclock(), {
		borderColor: 'cyan',
		float: 'left',
		borderStyle: 'round',
		pading: 3,
		margin: 1
	}),
);

if (cli.flags.feedback) {
	feedback.project('wtii');
	feedback.description('Are you getting the wrong time? Open an issue at:');
	feedback.link(cli.pkg.bugs.url);
	feedback.message(feedback.defaultMessage);
	feedback.web();
}
