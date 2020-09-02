'use strict';
const mock = require('egg-mock');

describe('test/i18n.test.js', () => {
  let app;
  before(() => {
    app = mock.app();
    return app.ready();
  });
  after(() => app.close());

  // describe('ctx.__(key, value)', () => {
  //   it('should return locale de', () => {
  //     return app.httpRequest()
  //       .get('/message?locale=de')
  //       .expect(200)
  //       .expect('Set-Cookie', /locale=de; path=\/; max-age=\d+; expires=[^;]+ GMT/)
  //       .expect({
  //         message: 'Hallo sky, wie geht es dir heute? Wie war dein 18.',
  //         empty: '',
  //         notexists_key: 'key not exists',
  //         empty_string: '',
  //         novalue: 'key %s ok',
  //         arguments3: '1 2 3',
  //         arguments4: '1 2 3 4',
  //         arguments5: '1 2 3 4 5',
  //         arguments6: '1 2 3 4 5. 6',
  //         values: 'foo bar foo bar {2} {100}',
  //       });
  //   });
  // });

  describe('view render with __(key, value)', () => {
    it('should render with default locale: en-US', () => {
      return app.httpRequest()
        .get('/')
        .expect(200)
        .expect('Set-Cookie', /locale=en-us; path=\/; max-age=\d+; expires=[^;]+ GMT/)
        .expect('<li>Email: </li>\n<li>Hello sky, how are you today?</li>\n<li>foo bar</li>\n');
    });

    // it('should render with query locale: zh_CN', () => {
    //   return app.httpRequest()
    //     .get('/?locale=zh_CN')
    //     .set('Host', 'foo.example.com')
    //     .expect(200)
    //     .expect('Set-Cookie', /locale=zh-cn; path=\/; max-age=\d+; expires=[^;]+ GMT/)
    //     .expect('<li>邮箱: </li>\n<li>sky，今天过得如何？</li>\n<li>foo bar</li>\n');
    // });
  });
});
