import { C as regenerator, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, D as validate_each_argument, E as validate_each_keys, s as safe_not_equal, j as element, t as text, h as space, l as claim_element, m as children, n as claim_text, p as detach_dev, k as claim_space, q as attr_dev, r as add_location, u as insert_dev, w as append_dev, z as set_data_dev, L as query_selector_all, y as _slicedToArray, M as update_keyed_each, A as noop, v as validate_slots, T as destroy_block } from './client.9da8ae88.js';
import { _ as _asyncToGenerator } from './asyncToGenerator.5229e80b.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\book\\[book].svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[2] = list[i];
  return child_ctx;
} // (25:2) {#each articles as art (art.id)}


function create_each_block(key_1, ctx) {
  var li;
  var a;
  var t0_value =
  /*art*/
  ctx[2].title + "";
  var t0;
  var a_href_value;
  var t1;
  var block = {
    key: key_1,
    first: null,
    c: function create() {
      li = element("li");
      a = element("a");
      t0 = text(t0_value);
      t1 = space();
      this.h();
    },
    l: function claim(nodes) {
      li = claim_element(nodes, "LI", {});
      var li_nodes = children(li);
      a = claim_element(li_nodes, "A", {
        class: true,
        href: true
      });
      var a_nodes = children(a);
      t0 = claim_text(a_nodes, t0_value);
      a_nodes.forEach(detach_dev);
      t1 = claim_space(li_nodes);
      li_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(a, "class", "link svelte-1fydojb");
      attr_dev(a, "href", a_href_value = "article/".concat(
      /*category*/
      ctx[0], "/").concat(
      /*art*/
      ctx[2].id));
      add_location(a, file, 26, 6, 561);
      add_location(li, file, 25, 4, 550);
      this.first = li;
    },
    m: function mount(target, anchor) {
      insert_dev(target, li, anchor);
      append_dev(li, a);
      append_dev(a, t0);
      append_dev(li, t1);
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;
      if (dirty &
      /*articles*/
      2 && t0_value !== (t0_value =
      /*art*/
      ctx[2].title + "")) set_data_dev(t0, t0_value);

      if (dirty &
      /*category, articles*/
      3 && a_href_value !== (a_href_value = "article/".concat(
      /*category*/
      ctx[0], "/").concat(
      /*art*/
      ctx[2].id))) {
        attr_dev(a, "href", a_href_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(li);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(25:2) {#each articles as art (art.id)}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var title_value;
  var t0;
  var h1;
  var t1;
  var t2;
  var ul;
  var each_blocks = [];
  var each_1_lookup = new Map();
  document.title = title_value = "CODE BOOK | " +
  /*category*/
  ctx[0];
  var each_value =
  /*articles*/
  ctx[1];
  validate_each_argument(each_value);

  var get_key = function get_key(ctx) {
    return (
      /*art*/
      ctx[2].id
    );
  };

  validate_each_keys(ctx, each_value, get_each_context, get_key);

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  var block = {
    c: function create() {
      t0 = space();
      h1 = element("h1");
      t1 = text(
      /*category*/
      ctx[0]);
      t2 = space();
      ul = element("ul");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1qh5xov\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes,
      /*category*/
      ctx[0]);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(nodes);
      ul = claim_element(nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(ul_nodes);
      }

      ul_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "category svelte-1fydojb");
      add_location(h1, file, 22, 0, 456);
      attr_dev(ul, "class", "list svelte-1fydojb");
      add_location(ul, file, 23, 0, 493);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, h1, anchor);
      append_dev(h1, t1);
      insert_dev(target, t2, anchor);
      insert_dev(target, ul, anchor);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(ul, null);
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*category*/
      1 && title_value !== (title_value = "CODE BOOK | " +
      /*category*/
      ctx[0])) {
        document.title = title_value;
      }

      if (dirty &
      /*category*/
      1) set_data_dev(t1,
      /*category*/
      ctx[0]);

      if (dirty &
      /*category, articles*/
      3) {
        each_value =
        /*articles*/
        ctx[1];
        validate_each_argument(each_value);
        validate_each_keys(ctx, each_value, get_each_context, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, each_value, each_1_lookup, ul, destroy_block, create_each_block, null, get_each_context);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t2);
      if (detaching) detach_dev(ul);

      for (var _i4 = 0; _i4 < each_blocks.length; _i4 += 1) {
        each_blocks[_i4].d();
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

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/regenerator.mark(function _callee(_ref3) {
    var book, res, _yield$res$json, articles;

    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            book = _ref3.params.book;
            _context.next = 3;
            return this.fetch("book/".concat(book, ".json"));

          case 3:
            res = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 12;
              break;
            }

            _context.next = 7;
            return res.json();

          case 7:
            _yield$res$json = _context.sent;
            articles = _yield$res$json.articles;
            return _context.abrupt("return", {
              category: book,
              articles: articles
            });

          case 12:
            this.error(404, "Not Found");

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("U5Bbooku5D", slots, []);
  var category = $$props.category;
  var articles = $$props.articles;
  var writable_props = ["category", "articles"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bbooku5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("category" in $$props) $$invalidate(0, category = $$props.category);
    if ("articles" in $$props) $$invalidate(1, articles = $$props.articles);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      category: category,
      articles: articles
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("category" in $$props) $$invalidate(0, category = $$props.category);
    if ("articles" in $$props) $$invalidate(1, articles = $$props.articles);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [category, articles];
}

var U5Bbooku5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bbooku5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bbooku5D);

  function U5Bbooku5D(options) {
    var _this;

    _classCallCheck(this, U5Bbooku5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      category: 0,
      articles: 1
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bbooku5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*category*/
    ctx[0] === undefined && !("category" in props)) {
      console.warn("<U5Bbooku5D> was created without expected prop 'category'");
    }

    if (
    /*articles*/
    ctx[1] === undefined && !("articles" in props)) {
      console.warn("<U5Bbooku5D> was created without expected prop 'articles'");
    }

    return _this;
  }

  _createClass(U5Bbooku5D, [{
    key: "category",
    get: function get() {
      throw new Error("<U5Bbooku5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bbooku5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "articles",
    get: function get() {
      throw new Error("<U5Bbooku5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bbooku5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bbooku5D;
}(SvelteComponentDev);

export default U5Bbooku5D;
export { preload };
