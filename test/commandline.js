import test from 'ava';
import fs from 'fs';
import commandline from '../dist/commandline';

test('cert (default)', t => {
  const { cert } = commandline.parse([]);
  t.truthy(cert);
});

test('cert', t => {
  const { cert } = commandline.parse(['--cert', '../resources/localhost.cert']);
  t.truthy(cert);
});

test('key (default)', t => {
  const { key } = commandline.parse([]);
  t.truthy(key);
});

test('key', t => {
  const { key } = commandline.parse(['--key', '../resources/localhost.key']);
  t.truthy(key);
});

test('port (default)', t => {
  const { port } = commandline.parse([]);
  t.is(port, 9001);
});

test('port', t => {
  const { port } = commandline.parse(['--port', '5001']);
  t.is(port, 5001);
});

test('target (default)', t => {
  const { target } = commandline.parse([]);
  t.is(target, "localhost:9000");
});

test('target', t => {
  const { target } = commandline.parse(['--target', 'localhost:5000']);
  t.is(target, 'localhost:5000');
});

test('insecure (default)', t => {
    const { insecure } = commandline.parse([]);
    t.is(insecure, undefined);
});

test('insecure', t => {
    const { insecure } = commandline.parse(['--insecure']);
    t.is(insecure, true);
});

test('config', t => {
  const { config } = commandline.parse(['--config', './test-config.json']);
  t.truthy(config);
});
