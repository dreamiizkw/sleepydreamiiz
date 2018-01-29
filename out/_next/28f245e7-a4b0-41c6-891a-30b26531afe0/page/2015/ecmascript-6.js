
          window.__NEXT_REGISTER_PAGE('/2015/ecmascript-6', function() {
            var comp = module.exports=webpackJsonp([8],{44:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.H3=t.H2=void 0;var n=a(25),o=l(n),r=a(3),u=l(r),i=a(1),s=l(i),d=function(e){var t=e.id,a=e.level,l=void 0===a?2:a,n=e.fontSize,o=void 0===n?16:n,r=e.children;return s.default.createElement("div",{className:"jsx-3001872643"},s.default.createElement("h"+l,{style:{fontWeight:500,fontSize:o}},s.default.createElement("span",{className:"jsx-3001872643"},s.default.createElement("a",{href:"#"+t,id:t,className:"jsx-3001872643"},"#")),r),s.default.createElement(u.default,{styleId:"3001872643",css:['div.jsx-3001872643{margin:25px 0;font-family:Helvetica Neue,Helvetica,Arial, "Lucida Grande",sans-serif;}',"span.jsx-3001872643{position:absolute;margin-left:-15px;width:15px;}","a.jsx-3001872643{visibility:hidden;}","div.jsx-3001872643:hover a.jsx-3001872643,span.jsx-3001872643:hover a.jsx-3001872643{visibility:visible;}"]}))},f=d,c=function(e){return d((0,o.default)({},e,{level:3,fontSize:14}))};t.default=f,t.H2=f,t.H3=c},463:function(e,t,a){e.exports=a(464)},464:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a(1),o=l(n),r=a(21),u=l(r),i=a(41),s=l(i),d=a(35),f=l(d),c=a(42),m=l(c),h=a(43),p=l(h),g=a(70),E=l(g),b=a(44),y=a(75),w=a(60),v=l(w),k=a(71),x=l(k),S=a(46),T=l(S);t.default=(0,T.default)(function(e){var t=e.views;return o.default.createElement(s.default,null,o.default.createElement(u.default,null,o.default.createElement("title",null,"ECMAScript 6")),o.default.createElement(m.default,null,"ECMAScript 6"),o.default.createElement(p.default,{date:"February 22, 2015",views:t}),o.default.createElement(E.default,{by:"Ludwig Wittgenstein"},"The limits of my language mean the limits of my world."),o.default.createElement(f.default,null,"For the past few months I’ve been exclusively writing ECMAScript 6 code by taking advantage of transpilation",o.default.createElement(y.Ref,{id:"1"})," to a currently supported version of JavaScript."),o.default.createElement(f.default,null,"ECMAScript 6, henceforth ES6 and formerly ES.next, is the latest version of the specification. As of August 2014 no new features are being discussed, but details and edge cases are still being sorted out. It’s expected to be completed and published mid-2015."),o.default.createElement(f.default,null,"Adopting ES6 has simultaneously resulted in increased productivity (by making my code more succinct) and eliminated entire classes of bugs by addressing common JavaScript gotchas."),o.default.createElement(f.default,null,"More importantly, however, it’s reaffirmed my belief in an evolutionary approach towards language and software design as opposed to ",o.default.createElement("a",{href:A[1],target:"_blank"},"clean-slate recreation")),o.default.createElement(f.default,null,"This should be fairly obvious to you if you’ve been using CoffeeScript, which set out to focus on the good parts of JS and hide the broken ones. ES6 has been able to adopt a lot of CoffeeScript’s great innovations in a non-disruptive way, to such an extent that some have even questioned its ",o.default.createElement("a",{href:A[2],target:"_blank"},"role moving forward"),"."),o.default.createElement(E.default,{by:o.default.createElement("a",{href:A[3],style:{textDecoration:"none"}},"@raganwald")},"For all intents and purposes, JavaScript has merged CoffeeScript into master. \u2028I call that a victory for making things and trying them out."),o.default.createElement(f.default,null,"Instead of making a thorough review of ",o.default.createElement("a",{href:A[4],target:"_blank"},"all the new features"),", I’ll point out the most interesting ones. To incentivize developers to upgrade, new languages or frameworks need to (1) feature a compelling compatibility story and (2) give you a ",o.default.createElement("a",{href:A[5],target:"_blank"},"big enough carrot"),"."),o.default.createElement(b.H2,{id:"the-module-syntax"},"The module syntax"),o.default.createElement(f.default,null,"ES6 introduces ",o.default.createElement("b",null,"syntax")," for defining modules and declaring dependencies. I emphasize the word syntax because ES6 is not concerned with the actual implementation details of how modules are fetched or loaded."),o.default.createElement(f.default,null,"This further strengthens the ",o.default.createElement("b",null,"interoperability")," between the different contexts in which JavaScript can be executed."),o.default.createElement(f.default,null,"Up to now, no guidelines existed for how to actually do this. A common approach is to introduce a function declaration:"),o.default.createElement(f.default,null,"Consider as an example the simple task of writing a reusable implementation of ",o.default.createElement("a",{target:"_blank",href:A[6]},"CRC32")," in JavaScript."),o.default.createElement(f.default,null,"Up to now, no guidelines existed for how to actually do this. A common approach is to introduce a function declaration:"),o.default.createElement(x.default,null,"function crc32 () {\n  // …\n}"),o.default.createElement(f.default,null,"With the caveat, of course, that it introduces a single fixed global name that other parts of the code will have to refer to. And from the perspective of the code that uses that ",o.default.createElement(v.default,null,"crc32")," function, there’s no way to declare the dependency. One just has to assume the function will exist prior to the code’s interpretation."),o.default.createElement(f.default,null,"With this situation in mind, Node.JS led the way with the introduction of the ",o.default.createElement(v.default,null,"require")," runtime function and the ",o.default.createElement(v.default,null,"module.exports")," and ",o.default.createElement(v.default,null,"exports")," objects. Despite succeeding in creating a thriving ecosystem of modules around it, the interoperability possibilities were still somewhat limited."),o.default.createElement(f.default,null,"A common scenario to illustrate this is the generation of browser bundles of modules, with tools like ",o.default.createElement("a",{href:A[7],target:"_blank"},"browserify")," or ",o.default.createElement("a",{href:A[8],target:"_blank"},"webpack"),". These can only be conceived because they treat ",o.default.createElement(v.default,null,"require()")," as syntax, effectively ridding it of its inherent dynamism."),o.default.createElement(f.default,null,"If you’re trying to transport code to the browser, the following is not subject to static analysis and therefore breaks:"),o.default.createElement(x.default,null,"require(woot() + ‘_module.js’)"),o.default.createElement(f.default,null,"In other words, the packer’s algorithm can’t possibly know what ",o.default.createElement(v.default,null,"woot()")," means ahead of time."),o.default.createElement(f.default,null,"ES6 has introduced the right set of restrictions while accomodating for most existing use cases, drawing inspiration from most of the informally-specified ad-hoc module systems out there, like jQuery’s ",o.default.createElement(v.default,null,"$"),"."),o.default.createElement(f.default,null,"The syntax does take some getting used to. The most common pattern for dependency definitions is surprisingly impractical."),o.default.createElement(f.default,null,"The following code:"),o.default.createElement(x.default,null,"import crc32 from ‘crc32’"),o.default.createElement(f.default,null,"works for"),o.default.createElement(x.default,null,"export default function crc32(){}"),o.default.createElement(f.default,null,"but not for"),o.default.createElement(x.default,null,"export function crc32()"),o.default.createElement(f.default,null,"the latter is considered a ",o.default.createElement("em",null,"named export")," and requires the ",o.default.createElement(v.default,null,"{ }")," syntax in the import statement:"),o.default.createElement(x.default,null,"import { crc32 } from ‘crc32’"),o.default.createElement(f.default,null,"In other words, the simplest (and arguably most desirable) form of module definition requires the extra default keyword. Or in the absence of that, the usage of ",o.default.createElement(v.default,null,"{ }")," when importing."),o.default.createElement(b.H2,{id:"destructuring"},"Destructuring"),o.default.createElement(f.default,null,"One of the most common patterns that has emerged in modern JavaScript code is the usage of option objects."),o.default.createElement(f.default,null,"So common is this practice that newly specified browser APIs, like WHATWG’s ",o.default.createElement("a",{href:A[9],target:"_blank"},"fetch")," (a modern substitute for XMLHttpRequest) follow it:"),o.default.createElement(x.default,null,"fetch(‘/users’, {\n  method: ‘POST’,\n  headers: {\n    Accept: ‘application/json’,\n    ‘Content-Type’: ‘application/json’\n  },\n  body: JSON.stringify({\n    first: ‘Guillermo’,\n    last: ‘Rauch’\n  })\n})"),o.default.createElement(f.default,null,"The widespread adoption of this pattern has effectively prevented the JavaScript ecosystem from falling into ",o.default.createElement("a",{href:A[10],target:"_blank"},"The Boolean Trap"),"."),o.default.createElement(f.default,null,"If said API accepted regular parameters as opposed to an options object, calling fetch would be an exercise in argument order memorization and the typing of the ",o.default.createElement(v.default,null,"null")," keyword."),o.default.createElement(x.default,null,"// artistic rendition of a nightmare alternative world\nfetch(‘/users’, ‘POST’, null, null, {\n  Accept: ‘application/json’,\n  ‘Content-Type’: ‘application/json’\n}, null, JSON.stringify({\n  first: ‘Guillermo’,\n  last: ‘Rauch’\n}))"),o.default.createElement(f.default,null,"On the implementation side of things, however, things haven’t looked nearly as pretty. Looking at the function’s declaration signature is no longer descriptive of its input’s possibilities:"),o.default.createElement(x.default,null,"\nfunction fetch(url, opts){\n  // …\n}"),o.default.createElement(f.default,null,"Usually followed by the manual assignment of defaults to local variables:"),o.default.createElement(x.default,null,"opts = opts || {}\nvar body = opts.body || ''\nvar headers = opts.headers || {}\nvar method = opts.method || 'GET'"),o.default.createElement(f.default,null,"And unfortunately for us, despite being common, the ",o.default.createElement(v.default,null,"||")," practice actually introduces subtle bugs. In this case we’re not admitting that ",o.default.createElement(v.default,null,"opts.body")," could be 0, so robust code would most likely look like:"),o.default.createElement(x.default,null,"var body = opts.body === undefined ? '' : opts.body"),o.default.createElement(f.default,null,"Thanks to destructured parameters we can at once clearly define the parameters, properly set defaults and expose them to the local scope:"),o.default.createElement(x.default,null,"fetch(url, { body='', method='GET', headers={} }){\n  console.log(method) // no opts. everywhere!\n"),o.default.createElement(f.default,null,"As a matter of fact, defaults can also apply to the entire object parameter as well:"),o.default.createElement(x.default,null,"fetch(url, { method='GET' } = {}){\n  // the second parameter defaults to {}\n  // the following will output \"GET\":\n  console.log(method)\n}"),o.default.createElement(f.default,null,"You can also destructure with the assignment operator as follows:"),o.default.createElement(x.default,null,"var { method, body } = opts"),o.default.createElement(f.default,null,"This is reminiscent to me of the expressiveness granted by ",o.default.createElement(v.default,null,"with"),", without the magic or negative performance implications."),o.default.createElement(b.H2,{id:"new-conventions"},"New Conventions"),o.default.createElement(f.default,null,"Some parts of the language have been altogether replaced with better alternatives that’ll quickly become a new default for how you write JavaScript."),o.default.createElement(f.default,null,"I’ll go over some of them."),o.default.createElement(b.H3,{id:"let-and-const-over-var"},"let/const over var"),o.default.createElement(f.default,null,"Instead of writing ",o.default.createElement(v.default,null,"var x = y")," you’ll most likely be writing ",o.default.createElement(v.default,null,"let x = y"),". let scopes your variable definition to the block it’s defined in:"),o.default.createElement(x.default,null,"if (foo) {\n  let x = 5\n  setTimeout(function(){\u2028\n    // x is `5` here\u2028  \n  }, 500)\n}\n// x is `undefined` here"),o.default.createElement(f.default,null,"This is especially useful for ",o.default.createElement(v.default,null,"for")," or ",o.default.createElement(v.default,null,"while")," loops:"),o.default.createElement(x.default,null,"for (let i = 0; i < 10; i++) {}\n// `i` doesn't exist here."),o.default.createElement(f.default,null,"When you want to ensure ",o.default.createElement("a",{href:"https://mathiasbynens.be/notes/es6-const",target:"_blank"},"binding immutability")," with the same semantics as ",o.default.createElement(v.default,null,"let"),", use ",o.default.createElement(v.default,null,"const")," instead."),o.default.createElement(b.H3,{id:"template-strings"},"template strings over concatenation"),o.default.createElement(f.default,null,"With the lack of ",o.default.createElement(v.default,null,"sprintf")," or similar utilities in the standard JavaScript library, composing strings has always been more painful than it should."),o.default.createElement(f.default,null,"Template strings make the embedding of expressions trivial, as well as support for multiple lines. Simply replace ",o.default.createElement(v.default,null,"‘")," with ",o.default.createElement(v.default,null,"`"),"."),o.default.createElement(x.default,null,"let str = `\n  Hello ${first}. \n  We are in the year ${new Date().getFullYear()}\n`"),o.default.createElement(b.H3,{id:"class-over-prototypes"},"class over prototypes"),o.default.createElement(f.default,null,"Defining a class was cumbersome and required a deep understanding of the language internals. Even though it’s still obviously useful to grasp the inner-workings, the barrier to entry to newcomers was unnecessarily high."),o.default.createElement(f.default,null,o.default.createElement(v.default,null,"class")," offers syntax sugar for defining a constructor ",o.default.createElement(v.default,null,"function"),", the methods within ",o.default.createElement(v.default,null,"prototype")," and getters / setters. It also provides prototypical inheritance with syntax alone (no utilities or 3rd party modules)."),o.default.createElement(x.default,null,"class A extends B {\n  constructor(){}\n  method(){}\n  get prop(){}\n  set prop(){}\n}"),o.default.createElement(f.default,null,"I initially was surprised to learn classes are not hoisted (explanation ",o.default.createElement("a",{href:A[11],target:"_blank"},"here"),"). You should therefore think of them translating roughly to ",o.default.createElement(v.default,null,"var A = function(){}")," as opposed to ",o.default.createElement(v.default,null,"function A(){}"),"."),o.default.createElement(b.H3,{id:"fat-arrow-over-function"},"()=> over function"),o.default.createElement(f.default,null,"Not only is ",o.default.createElement(v.default,null,"(x, y) => {}")," shorter to write than ",o.default.createElement(v.default,null,"function (x,y) {}"),", but the behavior of this within the function body will most likely refer to what you want."),o.default.createElement(f.default,null,"The so-called “fat arrow” functions are ",o.default.createElement("em",null,"lexically bound"),". Consider the example of a method within a class that launches two timers:"),o.default.createElement(x.default,null,"class Person {\n  constructor(name){\n    this.name = name\n  }\n\n  timers(){\n    setTimeout(function(){\n      console.log(this.name)\n    }, 100)\n\n    setTimeout(() => {\n      console.log(this.name)\n    }, 100)\n  }\n}"),o.default.createElement(f.default,null,"To the dismay of newcomers to the language, the first timer (using ",o.default.createElement(v.default,null,"function"),") will log ",o.default.createElement(v.default,null,'"undefined"'),". The second one will now correctly log name."),o.default.createElement(b.H2,{id:"async-io"},"First-class support for async I/O"),o.default.createElement(f.default,null,"Asynchronous code execution has been around for almost the entire history of the language. ",o.default.createElement(v.default,null,"setTimeout"),", after all, was introduced around the time JavaScript 1.0 came out."),o.default.createElement(f.default,null,"But arguably, the language didn’t ",o.default.createElement("em",null,"really support")," it. The return value of function calls that scheduled “future work” is normally ",o.default.createElement(v.default,null,"undefined"),", or in the case of ",o.default.createElement(v.default,null,"setTimeout")," a ",o.default.createElement(v.default,null,"Number"),"."),o.default.createElement(f.default,null,"The introduction of ",o.default.createElement(v.default,null,"Promise")," addresses this, and by doing so fills a very large hole of interoperability and ",o.default.createElement("a",{href:A[12],target:"_blank"},"composability"),"."),o.default.createElement(f.default,null,"On one hand, APIs you’ll encounter become wholly more predictable. As a test of this, consider the new ",o.default.createElement(v.default,null,"fetch")," API. How does it work beyond the signature we described? You guessed right. It returns a ",o.default.createElement(v.default,null,"Promise"),"."),o.default.createElement(f.default,null,"If you’ve used Node.JS in the past, you know that there’s an informal contract that callbacks will follow the signature:"),o.default.createElement(x.default,null,"function (err, result){}"),o.default.createElement(f.default,null,"Also informally specified is the idea that callbacks will fire ",o.default.createElement("em",null,"only once"),". And that ",o.default.createElement(v.default,null,"null")," will be the value in the absence of an error (and not ",o.default.createElement(v.default,null,"undefined")," or ",o.default.createElement(v.default,null,"false"),"). Except, this might not always ",o.default.createElement("a",{href:A[13],target:"_blank"},"be the case"),"."),o.default.createElement(b.H2,{id:"towards-the-future"},"Towards the future"),o.default.createElement(f.default,null,"ES6 is gaining a lot of momentum in the ecosystem. ",o.default.createElement("a",{href:A[14],target:"_blank"},"Chrome")," and "," ",o.default.createElement("a",{href:A[15],target:"_blank"},"io.js")," have already incorporated some of its features. A lot has already been written about it."),o.default.createElement(f.default,null,"But what’s worth pointing out is that this momentum has been largely enabled by ",o.default.createElement("em",null,"transpilation")," rather than actual support. ",o.default.createElement("a",{href:A[16],target:"_blank"},"Great tools")," have emerged to enable transpiling and polyfilling, and browsers have over time added proper debugging and error reporting support for them (through source maps)."),o.default.createElement(f.default,null,"The evolution of the language and its proposed features are outpacing implementation. As mentioned above, ",o.default.createElement(v.default,null,"Promise")," is genuinely exciting as a building block alone, but consider the benefits of solving ",o.default.createElement("a",{href:A[17],target:"_blank"},"the callback problem")," once and for all."),o.default.createElement(f.default,null,o.default.createElement("b",null,"ES7")," is poised to do this by introducing the possibility of ",o.default.createElement(v.default,null,"await"),"-ing a promise:"),o.default.createElement(x.default,null,"async function uploadAvatar(){\n  let user = await getUser()\n  user.avatar = await getAvatar()\n  return await user.save()\n}"),o.default.createElement(f.default,null,"Even though the spec is in its ",o.default.createElement("a",{href:A[18],target:"_blank"},"early discussions"),", the same tool that compiles ES6 to ES5 already ",o.default.createElement("a",{href:A[19],target:"_blank"},"enables it"),"."),o.default.createElement(f.default,null,"There’s still substantial work left to do to make sure the process of adopting new language syntax and APIs becomes even more friction-less to those getting started."),o.default.createElement(f.default,null,"But one thing is for certain: we must embrace the moving target."),o.default.createElement(y.FootNotes,null,o.default.createElement(y.Note,{id:"1"},"I use the word “transpilation” throughout the article on the basis of its popularity to refer to JavaScript source-to-source compilation. That aside, the merits of the term are ",o.default.createElement("a",{href:A[0],target:"_blank"},"technically debatable"),".")))});var A=["https://twitter.com/fogus/status/550717447163355136","http://www.sigcomm.org/sites/default/files/ccr/papers/2008/January/1341431-1341436.pdf","https://github.com/jashkenas/coffeescript/issues/3859","https://twitter.com/raganwald/status/555386257233027073","https://github.com/lukehoban/es6features","http://teddziuba.tumblr.com/post/26426290981/python-3s-marketing-problem","http://en.wikipedia.org/wiki/Cyclic_redundancy_check","http://browserify.org/","https://github.com/webpack/webpack","https://fetch.spec.whatwg.org/","http://ariya.ofilabs.com/2011/08/hall-of-api-shame-boolean-trap.html","https://esdiscuss.org/history/2014-06-05T15%3A54%3A16.000Z-rossberg.google.com?path=%2Ftopic%2Fin-es6-strict-mode-do-function-declarations-within-a-block-hoist","https://blog.jcoglan.com/2011/03/11/promises-are-the-monad-of-asynchronous-programming/","https://medium.com/code-adventures/farewell-node-js-4ba9e7f3e52b#7cda","https://twitter.com/addyosmani/status/541978036904554496","https://iojs.org/en/es6.html","http://babeljs.io/","http://tirania.org/blog/archive/2013/Aug-15.html","https://esdiscuss.org/notes/2014-01-30#async-await","http://babeljs.io/docs/usage/transformers/#async-to-generator"]}},[463]);
            return { page: comp.default }
          })
        