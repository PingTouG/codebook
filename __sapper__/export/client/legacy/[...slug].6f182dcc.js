import { C as regenerator, y as _slicedToArray, _ as _inherits, a as _getPrototypeOf, b as _possibleConstructorReturn, c as _classCallCheck, i as init, d as _assertThisInitialized, e as dispatch_dev, f as _createClass, S as SvelteComponentDev, s as safe_not_equal, h as space, j as element, t as text, L as query_selector_all, p as detach_dev, k as claim_space, l as claim_element, m as children, n as claim_text, q as attr_dev, r as add_location, u as insert_dev, w as append_dev, z as set_data_dev, A as noop, v as validate_slots } from './client.9da8ae88.js';
import { _ as _asyncToGenerator } from './asyncToGenerator.5229e80b.js';

function dateFormat(date, fmt = 'YYYY-mm-dd HH:MM:SS') {
    let ret;
    const dateTime = new Date(date);
    const opt = {
        "Y+": dateTime.getFullYear().toString(),
        "m+": (dateTime.getMonth() + 1).toString(),
        "d+": dateTime.getDate().toString(),
        "H+": dateTime.getHours().toString(),
        "M+": dateTime.getMinutes().toString(),
        "S+": dateTime.getSeconds().toString() // 秒
    };
    for (let k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")));
        }
    }
    return fmt;
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\article\\[...slug].svelte";

function create_fragment(ctx) {
  var title_value;
  var t0;
  var section;
  var h1;
  var t1_value =
  /*page*/
  ctx[0].title + "";
  var t1;
  var t2;
  var div2;
  var div0;
  var t3;
  var t4_value =
  /*page*/
  ctx[0].author + "";
  var t4;
  var t5;
  var div1;
  var t6;
  var t7_value = dateFormat(
  /*page*/
  ctx[0].time) + "";
  var t7;
  var t8;
  var div3;
  var raw_value =
  /*page*/
  ctx[0].html + "";
  document.title = title_value =
  /*page*/
  ctx[0].title;
  var block = {
    c: function create() {
      t0 = space();
      section = element("section");
      h1 = element("h1");
      t1 = text(t1_value);
      t2 = space();
      div2 = element("div");
      div0 = element("div");
      t3 = text("作者：");
      t4 = text(t4_value);
      t5 = space();
      div1 = element("div");
      t6 = text("时间：");
      t7 = text(t7_value);
      t8 = space();
      div3 = element("div");
      this.h();
    },
    l: function claim(nodes) {
      var head_nodes = query_selector_all("[data-svelte=\"svelte-xdszgy\"]", document.head);
      head_nodes.forEach(detach_dev);
      t0 = claim_space(nodes);
      section = claim_element(nodes, "SECTION", {
        class: true
      });
      var section_nodes = children(section);
      h1 = claim_element(section_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t1 = claim_text(h1_nodes, t1_value);
      h1_nodes.forEach(detach_dev);
      t2 = claim_space(section_nodes);
      div2 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      t3 = claim_text(div0_nodes, "作者：");
      t4 = claim_text(div0_nodes, t4_value);
      div0_nodes.forEach(detach_dev);
      t5 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      t6 = claim_text(div1_nodes, "时间：");
      t7 = claim_text(div1_nodes, t7_value);
      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t8 = claim_space(section_nodes);
      div3 = claim_element(section_nodes, "DIV", {
        class: true
      });
      var div3_nodes = children(div3);
      div3_nodes.forEach(detach_dev);
      section_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "title");
      add_location(h1, file, 27, 2, 538);
      attr_dev(div0, "class", "author svelte-13lkdwn");
      add_location(div0, file, 31, 4, 611);
      attr_dev(div1, "class", "time");
      add_location(div1, file, 32, 4, 659);
      attr_dev(div2, "class", "info svelte-13lkdwn");
      add_location(div2, file, 30, 2, 587);
      attr_dev(div3, "class", "md-content");
      add_location(div3, file, 35, 2, 725);
      attr_dev(section, "class", "md");
      add_location(section, file, 26, 0, 514);
    },
    m: function mount(target, anchor) {
      insert_dev(target, t0, anchor);
      insert_dev(target, section, anchor);
      append_dev(section, h1);
      append_dev(h1, t1);
      append_dev(section, t2);
      append_dev(section, div2);
      append_dev(div2, div0);
      append_dev(div0, t3);
      append_dev(div0, t4);
      append_dev(div2, t5);
      append_dev(div2, div1);
      append_dev(div1, t6);
      append_dev(div1, t7);
      append_dev(section, t8);
      append_dev(section, div3);
      div3.innerHTML = raw_value;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*page*/
      1 && title_value !== (title_value =
      /*page*/
      ctx[0].title)) {
        document.title = title_value;
      }

      if (dirty &
      /*page*/
      1 && t1_value !== (t1_value =
      /*page*/
      ctx[0].title + "")) set_data_dev(t1, t1_value);
      if (dirty &
      /*page*/
      1 && t4_value !== (t4_value =
      /*page*/
      ctx[0].author + "")) set_data_dev(t4, t4_value);
      if (dirty &
      /*page*/
      1 && t7_value !== (t7_value = dateFormat(
      /*page*/
      ctx[0].time) + "")) set_data_dev(t7, t7_value);
      if (dirty &
      /*page*/
      1 && raw_value !== (raw_value =
      /*page*/
      ctx[0].html + "")) div3.innerHTML = raw_value;
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(t0);
      if (detaching) detach_dev(section);
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
    var _ref3$params$slug, category, id, res, data;

    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref3$params$slug = _slicedToArray(_ref3.params.slug, 2), category = _ref3$params$slug[0], id = _ref3$params$slug[1];
            _context.next = 3;
            return this.fetch("article/".concat(category, "/").concat(id, ".json"));

          case 3:
            res = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            _context.next = 7;
            return res.json();

          case 7:
            data = _context.sent;
            return _context.abrupt("return", {
              page: data
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
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var _$$props$$$slots = $$props.$$slots,
      slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots;
      $$props.$$scope;
  validate_slots("U5B_slugu5D", slots, []);
  var page = $$props.page;
  var writable_props = ["page"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5B_slugu5D> was created with unknown prop '".concat(key, "'"));
  });

  $$self.$$set = function ($$props) {
    if ("page" in $$props) $$invalidate(0, page = $$props.page);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      dateFormat: dateFormat,
      page: page
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("page" in $$props) $$invalidate(0, page = $$props.page);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [page];
}

var U5B_slugu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5B_slugu5D, _SvelteComponentDev);

  var _super = _createSuper(U5B_slugu5D);

  function U5B_slugu5D(options) {
    var _this;

    _classCallCheck(this, U5B_slugu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      page: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5B_slugu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*page*/
    ctx[0] === undefined && !("page" in props)) {
      console.warn("<U5B_slugu5D> was created without expected prop 'page'");
    }

    return _this;
  }

  _createClass(U5B_slugu5D, [{
    key: "page",
    get: function get() {
      throw new Error("<U5B_slugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5B_slugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5B_slugu5D;
}(SvelteComponentDev);

export default U5B_slugu5D;
export { preload };
