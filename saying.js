var say = require('say'),
  colors = require('colors'),
  sys = require('sys');

  // no callback, fire and forget
  //say.speak('Alex', 'whats up, dog?');

  // no callback, fire and forget
  //say.speak('Cellos', 'whats up, dog?');

  // output some text to the console as the callback
  say.speak('Alex', 'Might be relevant to enterprise type services but Neil Patel says longer content = better ranking/conversion - http://www.quicksprout.com/2012/12/20/the-science-behind-long-copy-how-more-content-increases-rankings-and-conversions/ Main points -  - Analyzing top 10 search results for over 20,000 keywords, shows avg content length = 2000 words - Direct correlation between word length and number of inlinks to their blogs - More social media hits to longer articles - Users moving towards longer and longer queries, favoring longer articles', function () {
    sys.puts('text to speech complete'.green);
  });


