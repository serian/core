log(Date.TIME_SECOND === 1000);
log(Date.TIME_MINUTE === 60000);
log(Date.TIME_HOUR === 3600000);
log(Date.TIME_DAY === 86400000);
log((10).pad(10) === '0000000010');
log((10).pad(10, 'a') === 'aaaaaaaa10');
log((10).pad(0) === '10');
log((100).toHexString() === '64');
log(['a', 'b', 'c'].split(1).length === 3);
log(['a', 'b', 'c'].split(1).join(', ') === 'a, b, c');
log(['a', 'b', 'c'].split(1).every(function (val, idx) { return val[0] === this[idx][0]; }, [['a'], ['b'], ['c']]));
log(['a', 'b', 'c'].split(2).length === 2);
log(['a', 'b', 'c'].split(2).join(', ') === 'a,b, c');
log(['a', 'b', 'c'].split(2).every(function (val, idx) { return val[0] === this[idx][0]; }, [['a', 'b'], ['c']]));
log(['a', 'b', 'c'].split(3).length === 1);
log(['a', 'b', 'c'].split(3).join(', ') === 'a,b,c');
log(['a', 'b', 'c'].split(3).every(function (val, idx) { return val[0] === this[idx][0]; }, [['a', 'b', 'c']]));
log(['a', 'b', 'c'].split(100).length === 1);
log(['a', 'b', 'c'].split(100).join(', ') === 'a,b,c');
log(['a', 'b', 'c'].split(100).every(function (val, idx) { return val[0] === this[idx][0]; }, [['a', 'b', 'c']]));
log(['a', 'b', 'c'].split(0).length === 3);
log(['a', 'b', 'c'].split(0).join(', ') === 'a, b, c');
log(['a', 'b', 'c'].split(0).every(function (val, idx) { return val[0] === this[idx][0]; }, ['a', 'b', 'c']));
log(typeof String.katakana === 'object');
log('a'.pad(2) === ' a');
log('a'.pad(2, '0') === '0a');
log('a'.pad(0) === 'a');
log('a'.indent(2) === '  a');
log('a'.indent(2, '	') === '		a');
log('a\na'.indent(2) === '  a\n  a');
log('a'.indent(0) === 'a');
log('a'.wrap('t') === 'tat');
log('a'.wrap('t', 's') === 'tas');
log('e'.wrap(9) === '9e9');
log('test'.extract(/^(t)e(st)$/) === 't');
log('test'.extract(/^(t)e(st)$/, 2) === 'st');
log('TEST'.decapitalize() === 'tEST');
log('test'.capitalize() === 'Test');
log('a'.toByteArray()[0] === 97);
log('a'.toByteArray().join(', ') === '97');
log('テスト'.toByteArray('utf8').join(', ') === '227, 131, 134, 227, 130, 185, 227, 131, 136');
log('テスト'.toByteArray('Shift_JIS').join(', ') === '131, 101, 131, 88, 131, 103');
log('a'.md5() === '0cc175b9c0f1b6a831c399e269772661');
log('テスト'.md5('utf8') === 'b0f1c5a480f416234a803b35d9932c57');
log('テスト'.md5('Shift_JIS') === '3f0326f4e56c3f4b54feede9071cafbf');
log('a'.sha1() === 'hvfkN/qlp/zhXR3cuerq6jd2Z7g=');
log('テスト'.sha1('utf8') === 'Y7Vg24hJ4IeXYktYM1JA4NBigr0=');
log('テスト'.sha1('Shift_JIS') === 'phP4bmL7OC/qjrV8YiycASIQQiE=');
log('テスト'.convertToUnicode() === 'ƹ');
log('テスト'.convertToUnicode('Shift_JIS') === 'ﾆｹﾈ');
log('テスト'.convertToUnicode('EUC-JP') === '胴');
log('テスト'.convertToUnicode('iso-2022-jp') === '���');
log('テスト'.convertFromUnicode() === 'ãã¹ã');
log('テスト'.convertFromUnicode('Shift_JIS') === 'eXg');
log('テスト'.convertFromUnicode('EUC-JP') === '¥Æ¥¹¥È');
log('テスト'.convertFromUnicode('iso-2022-jp') === '$B%F%9%H');
log('a<!--test-->a'.trimTag() === 'aa');
log('<div>a</div>'.trimTag() === 'a');
log('<div>a<p>a</div>'.trimTag() === 'aa');
log('<!--test--><div>a</div>'.trimTag() === 'a');
log('<!--test-->\n<div>a</div>'.trimTag() === '\na');
log('a'.includesFullwidth() === false);
log('テスト'.includesFullwidth());
log('abあcd'.includesFullwidth());
log('aiueo'.toHiragana() === 'aiueo');
log('アイウエオ'.toHiragana() === 'あいうえお');
log('カキクケコ'.toHiragana() === 'かきくけこ');
log('aiueo'.toKatakana() === 'aiueo');
log('あいうえお'.toKatakana() === 'アイウエオ');
log('かきくけこ'.toKatakana() === 'カキクケコ');
log('aiueo'.toRoma() === 'aiueo');
log('あいうえお'.toRoma() === 'aiueo');
log('かきくけこ'.toRoma() === 'kakikukeko');
log('アイウエオ'.toRoma() === 'aiueo');
log('カキクケコ'.toRoma() === 'kakikukeko');
