# [lightstep/lightstep-tracer-javascript#207](https://github.com/lightstep/lightstep-tracer-javascript/issues/207) reproduction

1. Clone this repository
1. Install with `npm install`
1. Start the dev server: `npx webpack-dev-server`
1. Load `http://localhost:8080` in a browser **other than** IE11
    * Confirm that you see a "success!" message
1. Load `http://10.0.2.2:8080` (for a VM; otherwise `http://localhost:8080` should be fine) in IE11
    * Use a [free VM](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/) if necessary
    * Confirm that you see nada
    * Pull up the dev tools and see an unhappy debugger. (You may need to refresh.)
1. Uninstall the LS tracer: `npm uninstall --save lightstep-tracer`
1. Install the branch with the fix: `npm install --save "git://github.com/lightstep/lightstep-tracer-javascript#iredelmeier/revert-protobufjs-removal"`
1. Restart the dev server: `npx webpack-dev-server`
1. Reload in IE11 and see a happy little message
