import { _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, s as safe_not_equal, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, v as validate_slots, o as onMount, g as space, h as element, t as text, j as claim_space, k as claim_element, l as children, m as claim_text, n as detach_dev, p as attr_dev, q as add_location, r as insert_dev, u as append_dev, w as _slicedToArray, x as set_data_dev, y as noop, z as binding_callbacks, A as create_component, B as query_selector_all, C as claim_component, D as mount_component, E as transition_in, F as transition_out, G as destroy_component } from './client.cb43e4d9.js';

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
      add_location(h1, file$1, 16, 2, 409);
      attr_dev(h5, "class", "author svelte-b7gn6w");
      add_location(h5, file$1, 17, 2, 443);
      attr_dev(div, "class", "book svelte-b7gn6w");
      attr_dev(div, "style",
      /*style*/
      ctx[3]);
      add_location(div, file$1, 15, 0, 362);
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

      ctx[4](div);
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
      8) {
        attr_dev(div, "style",
        /*style*/
        ctx[3]);
      }
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div);
      /*div_binding*/

      ctx[4](null);
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
      author = _$$props$author === void 0 ? "PingTouG" : _$$props$author;
  var book;
  var style;

  function resetSize() {
    //   书本比例为18.4*26
    var ratio = 18.4 / 26;
    var height = book.clientWidth / ratio;
    $$invalidate(3, style = "height: ".concat(height, "px"));
  }

  onMount(resetSize);
  var writable_props = ["title", "author"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Book> was created with unknown prop '".concat(key, "'"));
  });

  function div_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      book = $$value;
      $$invalidate(2, book);
    });
  }

  $$self.$$set = function ($$props) {
    if ("title" in $$props) $$invalidate(0, title = $$props.title);
    if ("author" in $$props) $$invalidate(1, author = $$props.author);
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      title: title,
      author: author,
      book: book,
      style: style,
      resetSize: resetSize
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("title" in $$props) $$invalidate(0, title = $$props.title);
    if ("author" in $$props) $$invalidate(1, author = $$props.author);
    if ("book" in $$props) $$invalidate(2, book = $$props.book);
    if ("style" in $$props) $$invalidate(3, style = $$props.style);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [title, author, book, style, div_binding];
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
      author: 1
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
  }]);

  return Book;
}(SvelteComponentDev);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\index.svelte";

function create_fragment(ctx) {
  var t0;
  var div6;
  var div5;
  var div0;
  var book0;
  var t1;
  var div1;
  var book1;
  var t2;
  var div2;
  var book2;
  var t3;
  var div3;
  var book3;
  var t4;
  var div4;
  var book4;
  var current;
  book0 = new Book({
    props: {
      "a-item": true,
      title: "JavaScript"
    },
    $$inline: true
  });
  book1 = new Book({
    props: {
      "a-item": true,
      title: "Vue"
    },
    $$inline: true
  });
  book2 = new Book({
    props: {
      "a-item": true,
      title: "React"
    },
    $$inline: true
  });
  book3 = new Book({
    props: {
      "a-item": true,
      title: "Svelte"
    },
    $$inline: true
  });
  book4 = new Book({
    props: {
      "a-item": true,
      title: "Deno"
    },
    $$inline: true
  });
  var block = {
    c: function create() {
      t0 = space();
      div6 = element("div");
      div5 = element("div");
      div0 = element("div");
      create_component(book0.$$.fragment);
      t1 = space();
      div1 = element("div");
      create_component(book1.$$.fragment);
      t2 = space();
      div2 = element("div");
      create_component(book2.$$.fragment);
      t3 = space();
      div3 = element("div");
      create_component(book3.$$.fragment);
      t4 = space();
      div4 = element("div");
      create_component(book4.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-1spq4rs\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      div6 = claim_element(nodes, "DIV", {
        class: true
      });
      var div6_nodes = children(div6);
      div5 = claim_element(div6_nodes, "DIV", {
        class: true
      });
      var div5_nodes = children(div5);
      div0 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      claim_component(book0.$$.fragment, div0_nodes);
      div0_nodes.forEach(detach_dev);
      t1 = claim_space(div5_nodes);
      div1 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      claim_component(book1.$$.fragment, div1_nodes);
      div1_nodes.forEach(detach_dev);
      t2 = claim_space(div5_nodes);
      div2 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      claim_component(book2.$$.fragment, div2_nodes);
      div2_nodes.forEach(detach_dev);
      t3 = claim_space(div5_nodes);
      div3 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      claim_component(book3.$$.fragment, div3_nodes);
      div3_nodes.forEach(detach_dev);
      t4 = claim_space(div5_nodes);
      div4 = claim_element(div5_nodes, "DIV", {
        class: true
      });
      var div4_nodes = children(div4);
      claim_component(book4.$$.fragment, div4_nodes);
      div4_nodes.forEach(detach_dev);
      div5_nodes.forEach(detach_dev);
      div6_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      document.title = "CodeBook | 有质感的编程";
      attr_dev(div0, "class", "book__item");
      add_location(div0, file, 9, 4, 191);
      attr_dev(div1, "class", "book__item");
      add_location(div1, file, 12, 4, 272);
      attr_dev(div2, "class", "book__item");
      add_location(div2, file, 15, 4, 346);
      attr_dev(div3, "class", "book__item");
      add_location(div3, file, 18, 4, 422);
      attr_dev(div4, "class", "book__item");
      add_location(div4, file, 21, 4, 499);
      attr_dev(div5, "class", "book__list svelte-1wdakar");
      add_location(div5, file, 8, 2, 162);
      attr_dev(div6, "class", "home svelte-1wdakar");
      add_location(div6, file, 7, 0, 141);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, div6, anchor);
      append_dev(div6, div5);
      append_dev(div5, div0);
      mount_component(book0, div0, null);
      append_dev(div5, t1);
      append_dev(div5, div1);
      mount_component(book1, div1, null);
      append_dev(div5, t2);
      append_dev(div5, div2);
      mount_component(book2, div2, null);
      append_dev(div5, t3);
      append_dev(div5, div3);
      mount_component(book3, div3, null);
      append_dev(div5, t4);
      append_dev(div5, div4);
      mount_component(book4, div4, null);
      current = true;
    },
    p: noop,
    i: function intro(local) {
      if (current) return;
      transition_in(book0.$$.fragment, local);
      transition_in(book1.$$.fragment, local);
      transition_in(book2.$$.fragment, local);
      transition_in(book3.$$.fragment, local);
      transition_in(book4.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(book0.$$.fragment, local);
      transition_out(book1.$$.fragment, local);
      transition_out(book2.$$.fragment, local);
      transition_out(book3.$$.fragment, local);
      transition_out(book4.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(div6);
      destroy_component(book0);
      destroy_component(book1);
      destroy_component(book2);
      destroy_component(book3);
      destroy_component(book4);
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

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("Routes", slots, []);
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Routes> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$capture_state = function () {
    return {
      Book: Book
    };
  };

  return [];
}

var Routes = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Routes, _SvelteComponentDev);

  var _super = _createSuper(Routes);

  function Routes(options) {
    var _this;

    _classCallCheck(this, Routes);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Routes",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Routes;
}(SvelteComponentDev);

export default Routes;
