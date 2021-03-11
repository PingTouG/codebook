import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, v as validate_slots, o as onMount, g as goto, h as space, j as element, t as text, k as claim_space, l as claim_element, m as children, n as claim_text, p as detach_dev, q as attr_dev, r as add_location, u as insert_dev, w as append_dev, x as listen_dev, y as _slicedToArray, z as set_data_dev, A as noop, B as binding_callbacks, C as regenerator, D as validate_each_argument, E as validate_each_keys, F as create_component, G as claim_component, H as mount_component, I as transition_in, J as transition_out, K as destroy_component, L as query_selector_all, M as update_keyed_each, N as check_outros, O as group_outros, P as outro_and_destroy_block } from './client.9da8ae88.js';

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src\\components\\book.svelte";

function create_fragment$1(ctx) {
  var t0;
  var div;
  var h1;
  var t1;
  var t2;
  var h5;
  var t3;
  var t4;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      t0 = space();
      div = element("div");
      h1 = element("h1");
      t1 = text(
      /*title*/
      ctx[0]);
      t2 = space();
      h5 = element("h5");
      t3 = text("By @ ");
      t4 = text(
      /*author*/
      ctx[1]);
      this.h();
    },
    l: function claim(nodes) {
      t0 = claim_space(nodes);
      div = claim_element(nodes, "DIV", {
        class: true,
        style: true
      });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes,
      /*title*/
      ctx[0]);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(div_nodes);
      h5 = claim_element(div_nodes, "H5", {
        class: true
      });
      var h5_nodes = children(h5);
      t3 = claim_text(h5_nodes, "By @ ");
      t4 = claim_text(h5_nodes,
      /*author*/
      ctx[1]);
      h5_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "title svelte-b7gn6w");
      add_location(h1, file$1, 18, 2, 490);
      attr_dev(h5, "class", "author svelte-b7gn6w");
      add_location(h5, file$1, 19, 2, 524);
      attr_dev(div, "class", "book svelte-b7gn6w");
      attr_dev(div, "style",
      /*style*/
      ctx[4]);
      add_location(div, file$1, 17, 0, 416);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div, anchor);
      append_dev(div, h1);
      append_dev(h1, t1);
      append_dev(div, t2);
      append_dev(div, h5);
      append_dev(h5, t3);
      append_dev(h5, t4);
      /*div_binding*/

      ctx[5](div);

      if (!mounted) {
        dispose = listen_dev(div, "click",
        /*click_handler*/
        ctx[6], false, false, false);
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*title*/
      1) set_data_dev(t1,
      /*title*/
      ctx[0]);
      if (dirty &
      /*author*/
      2) set_data_dev(t4,
      /*author*/
      ctx[1]);

      if (dirty &
      /*style*/
      16) {
        attr_dev(div, "style",
        /*style*/
        ctx[4]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
      /*div_binding*/

      ctx[5](null);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Book", slots, []);
  var title = $$props.title;
  var _$$props$author = $$props.author,
      author = _$$props$author === void 0 ? "CodeBook" : _$$props$author;
  var url = $$props.url;
  var book;
  var style;

  function resetSize() {
    //   书本比例为18.4*26
    var ratio = 18.4 / 26;
    var height = book.clientWidth / ratio;
    $$invalidate(4, style = "height: ".concat(height, "px"));
  }

  onMount(resetSize);
  var writable_props = ["title", "author", "url"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Book> was created with unknown prop '".concat(key, "'"));
  });

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      book = $$value;
      $$invalidate(3, book);
    });
  }

  var click_handler = function click_handler() {
    return goto(url);
  };

  $$self.$$set = function ($$props) {
    if ("title" in $$props) $$invalidate(0, title = $$props.title);
    if ("author" in $$props) $$invalidate(1, author = $$props.author);
    if ("url" in $$props) $$invalidate(2, url = $$props.url);
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      goto: goto,
      title: title,
      author: author,
      url: url,
      book: book,
      style: style,
      resetSize: resetSize
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("title" in $$props) $$invalidate(0, title = $$props.title);
    if ("author" in $$props) $$invalidate(1, author = $$props.author);
    if ("url" in $$props) $$invalidate(2, url = $$props.url);
    if ("book" in $$props) $$invalidate(3, book = $$props.book);
    if ("style" in $$props) $$invalidate(4, style = $$props.style);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [title, author, url, book, style, div_binding, click_handler];
}

var Book = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Book, _SvelteComponentDev);

  var _super = _createSuper$1(Book);

  function Book(options) {
    var _this;

    _classCallCheck(this, Book);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      title: 0,
      author: 1,
      url: 2
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Book",
      options: options,
      id: create_fragment$1.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*title*/
    ctx[0] === undefined && !("title" in props)) {
      console.warn("<Book> was created without expected prop 'title'");
    }

    if (
    /*url*/
    ctx[2] === undefined && !("url" in props)) {
      console.warn("<Book> was created without expected prop 'url'");
    }

    return _this;
  }

  _createClass(Book, [{
    key: "title",
    get: function get() {
      throw new Error("<Book>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Book>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "author",
    get: function get() {
      throw new Error("<Book>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Book>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "url",
    get: function get() {
      throw new Error("<Book>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Book>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Book;
}(SvelteComponentDev);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\index.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[1] = list[i];
  child_ctx[3] = i;
  return child_ctx;
} // (34:4) {#each books as book, index (`${book}


function create_each_block(key_1, ctx) {
  var div;
  var book;
  var t;
  var current;
  book = new Book({
    props: {
      title:
      /*book*/
      ctx[1],
      url: "book/".concat(
      /*book*/
      ctx[1])
    },
    $$inline: true
  });
  var block = {
    key: key_1,
    first: null,
    c: function create() {
      div = element("div");
      create_component(book.$$.fragment);
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      claim_component(book.$$.fragment, div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "book__item");
      add_location(div, file, 34, 6, 1351);
      this.first = div;
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      mount_component(book, div, null);
      append_dev(div, t);
      current = true;
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      var book_changes = {};
      if (dirty &
      /*books*/
      1) book_changes.title =
      /*book*/
      ctx[1];
      if (dirty &
      /*books*/
      1) book_changes.url = "book/".concat(
      /*book*/
      ctx[1]);
      book.$set(book_changes);
    },
    i: function intro(local) {
      if (current) return;
      transition_in(book.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(book.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      destroy_component(book);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(34:4) {#each books as book, index (`${book}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var t;
  var div1;
  var div0;
  var each_blocks = [];
  var each_1_lookup = new Map();
  var current;
  var each_value =
  /*books*/
  ctx[0];
  validate_each_argument(each_value);

  var get_key = function get_key(ctx) {
    return "".concat(
    /*book*/
    ctx[1], "_").concat(
    /*index*/
    ctx[3]);
  };

  validate_each_keys(ctx, each_value, get_each_context, get_key);

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  var block = {
    c: function create() {
      t = space();
      div1 = element("div");
      div0 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1spq4rs\"]", document.head);
      head_nodes.forEach(detach_dev);
      t = claim_space(nodes);
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div0_nodes);
      }

      div0_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "CodeBook | 有质感的编程";
      attr_dev(div0, "class", "book__list svelte-1wdakar");
      add_location(div0, file, 32, 2, 1266);
      attr_dev(div1, "class", "home svelte-1wdakar");
      add_location(div1, file, 31, 0, 1245);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t, anchor);
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div0, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*books*/
      1) {
        each_value =
        /*books*/
        ctx[0];
        validate_each_argument(each_value);
        group_outros();
        validate_each_keys(ctx, each_value, get_each_context, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, div0, outro_and_destroy_block, create_each_block, null, get_each_context);
        check_outros();
      }
    },
    i: function intro(local) {
      if (current) return;

      for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
        transition_in(each_blocks[_i4]);
      }

      current = true;
    },
    o: function outro(local) {
      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        transition_out(each_blocks[_i5]);
      }

      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t);
      if (detaching) detach_dev(div1);

      for (var _i6 = 0; _i6 < each_blocks.length; _i6 += 1) {
        each_blocks[_i6].d();
      }
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

function preload() {
  return __awaiter(this, void 0, void 0, /*#__PURE__*/regenerator.mark(function _callee() {
    var res, _yield$res$json, books;

    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return this.fetch("index.json");

          case 2:
            res = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            _context.next = 6;
            return res.json();

          case 6:
            _yield$res$json = _context.sent;
            books = _yield$res$json.books;
            return _context.abrupt("return", {
              books: books
            });

          case 11:
            this.error(404, "Not Found");

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Routes", slots, []);
  var books = $$props.books;
  var writable_props = ["books"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("books" in $$props) $$invalidate(0, books = $$props.books);
  };

  $$self.$capture_state = function () {
    return {
      __awaiter: __awaiter,
      preload: preload,
      Book: Book,
      books: books
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("books" in $$props) $$invalidate(0, books = $$props.books);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [books];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      books: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*books*/
    ctx[0] === undefined && !("books" in props)) {
      console.warn("<Routes> was created without expected prop 'books'");
    }

    return _this;
  }

  _createClass(Routes, [{
    key: "books",
    get: function get() {
      throw new Error("<Routes>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Routes>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Routes;
}(SvelteComponentDev);

export default Routes;
export { preload };
