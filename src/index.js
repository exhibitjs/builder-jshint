import {JSHINT as jshint} from 'jshint';
import path from 'path';

const defaults = {
  include: '**/*.js',
  reporter: 'jshint-stylish',
  jshintrc: true,
  fail: false,
};

export default function (options) {
  options = Object.assign({}, defaults, options);

  const {reporter} = typeof options.reporter === 'string' ?
    require(options.reporter) : // eslint-disable-line global-require
    options.reporter;

  return function *exhibitJshint({file, importClosest, matches, contents, util}) {
    if (matches(options.include)) {
      // get config from a .jshintrc file if possible
      let jshintConfig;
      if (options.jshintrc) {
        // find the nearest .jshintrc file
        let jshintrc;
        try {
          jshintrc = yield importClosest('.jshintrc');
        }
        catch (error) {
          if (error !== 'ENOENT') throw error;
        }

        // parse it as JSON
        if (jshintrc) {
          try {
            jshintConfig = JSON.parse(jshintrc.contents.toString());
          }
          catch (error) {
            throw new util.SourceError({
              file: jshintrc.file,
              message: error.message,
              contents: jshintrc.contents,
            });
          }
        }
      }

      if (!jshintConfig) jshintConfig = {};

      // add any extra config overrides from options
      Object.assign(jshintConfig, options.config);

      // lint the file
      jshint(contents.toString(), jshintConfig);

      // handle errors
      if (jshint.errors && jshint.errors.length) {
        // report
        if (reporter) {
          // for (const error of jshint.errors) reporter({file: fileRelative, error});
          const cwdRelative = path.relative(process.cwd(), file);
          reporter(jshint.errors.map(error => ({file: cwdRelative, error})));
        }

        // fail the build if necessary
        if (options.fail) {
          throw new util.SourceError({
            file,
            message: 'Refusing to build because JSHint errors occurred and options.fail is true',
          });
        }
      }
    }

    return contents;
  };
}
