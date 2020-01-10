/* eslint-disable */

import 'whatwg-fetch';
require('es6-promise').polyfill();

import { Tracer } from 'lightstep-tracer';

const tracer = new Tracer({
  access_token: '',
  component_name: 'test',
});

tracer.startSpan('span');

document.body.innerHTML = 'success!';
