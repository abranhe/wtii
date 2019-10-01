import test from 'ava';
import execa from 'execa';

test('Main', async t => {
	const {stdout} = await execa('./cli.js', ['--version']);
	t.true(stdout.length > 0);
});

test('Hours output', async t => {
	const {stdout} = await execa('./cli.js');
	t.true(stdout.length > 0);
});
