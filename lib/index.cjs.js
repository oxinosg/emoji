'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var immutable = require('immutable');
var keys = require('lodash/keys');
var draftJs = require('draft-js');
var utils = require('@draft-js-plugins/utils');
var emojiToolkit = require('emoji-toolkit');
var PropTypes = require('prop-types');
var data = require('emojibase-data/en/compact.json');
var fa = require('react-icons/fa');
var reactCustomScrollbars2 = require('react-custom-scrollbars-2');
var toStyle = require('to-style');
var clsx = require('clsx');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var keys__default = /*#__PURE__*/_interopDefaultLegacy(keys);
var utils__default = /*#__PURE__*/_interopDefaultLegacy(utils);
var emojiToolkit__default = /*#__PURE__*/_interopDefaultLegacy(emojiToolkit);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var data__default = /*#__PURE__*/_interopDefaultLegacy(data);
var toStyle__default = /*#__PURE__*/_interopDefaultLegacy(toStyle);
var clsx__default = /*#__PURE__*/_interopDefaultLegacy(clsx);

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function Emoji(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      className = _ref.className,
      decoratedText = _ref.decoratedText,
      EmojiInlineText = _ref.emojiInlineText,
      children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement(EmojiInlineText, {
    className: className,
    decoratedText: decoratedText,
    theme: theme
  }, children);
}

var Entry$2 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Entry, _Component);

  function Entry() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.mouseDown = false;

    _this.onMouseUp = function () {
      if (_this.mouseDown) {
        _this.mouseDown = false;

        _this.props.onEmojiSelect(_this.props.emoji);
      }
    };

    _this.onMouseDown = function (event) {
      // Note: important to avoid a content edit change
      event.preventDefault();
      _this.mouseDown = true;
    };

    _this.onMouseEnter = function () {
      _this.props.onEmojiFocus(_this.props.index);
    };

    return _this;
  }

  var _proto = Entry.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.mouseDown = false;
  };

  _proto.render = function render() {
    var _this$props = this.props,
        emoji = _this$props.emoji,
        _this$props$theme = _this$props.theme,
        theme = _this$props$theme === void 0 ? {} : _this$props$theme,
        isFocused = _this$props.isFocused,
        id = _this$props.id,
        EmojiImage = _this$props.emojiImage;
    var className = isFocused ? theme.emojiSuggestionsEntryFocused : theme.emojiSuggestionsEntry;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: className,
      onMouseDown: this.onMouseDown,
      onMouseUp: this.onMouseUp,
      onMouseEnter: this.onMouseEnter,
      role: "option",
      id: id,
      "aria-selected": isFocused ? 'true' : undefined
    }, /*#__PURE__*/React__default["default"].createElement(EmojiImage, {
      emoji: emoji,
      theme: theme,
      unicode: emojiToolkit.shortnameToUnicode(emoji)
    }), /*#__PURE__*/React__default["default"].createElement("span", {
      className: theme.emojiSuggestionsEntryText
    }, this.props.emoji));
  };

  return Entry;
}(React.Component);

function getWordAt(string, position) {
  // Perform type conversions.
  var str = String(string); // eslint-disable-next-line no-bitwise

  var pos = Number(position) >>> 0; // Search for the word's beginning and end.

  var left = str.slice(0, pos + 1).search(/\S+$/);
  var right = str.slice(pos).search(/\s/); // The last word in the string is a special case.

  if (right < 0) {
    return {
      word: str.slice(left),
      begin: left,
      end: str.length
    };
  } // Return the word, using the located bounds to extract it from the string.


  return {
    word: str.slice(left, right + pos),
    begin: left,
    end: right + pos
  };
}

function getSearchText(editorState, selection) {
  var anchorKey = selection.getAnchorKey();
  var anchorOffset = selection.getAnchorOffset() - 1;
  var currentContent = editorState.getCurrentContent();
  var currentBlock = currentContent.getBlockForKey(anchorKey);
  var blockText = currentBlock.getText();
  return getWordAt(blockText, anchorOffset);
}

// or replaced emoji shortname like ":thumbsup:". Behavior determined by `Mode` parameter.

var Mode = {
  INSERT: 'INSERT',
  // insert emoji to current cursor position
  REPLACE: 'REPLACE' // replace emoji shortname

};
function addEmoji(editorState, emojiShortName, mode) {
  if (mode === void 0) {
    mode = Mode.INSERT;
  }

  var emoji = emojiToolkit.shortnameToUnicode(emojiShortName);
  var contentState = editorState.getCurrentContent();
  var contentStateWithEntity = contentState.createEntity('emoji', 'IMMUTABLE', {
    emojiUnicode: emoji
  });
  var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
  var currentSelectionState = editorState.getSelection();
  var emojiAddedContent;
  var emojiEndPos = 0;
  var blockSize = 0;

  switch (mode) {
    case Mode.INSERT:
      {
        // in case text is selected it is removed and then the emoji is added
        var afterRemovalContentState = draftJs.Modifier.removeRange(contentState, currentSelectionState, 'backward'); // deciding on the position to insert emoji

        var targetSelection = afterRemovalContentState.getSelectionAfter();
        emojiAddedContent = draftJs.Modifier.insertText(afterRemovalContentState, targetSelection, emoji, undefined, entityKey);
        emojiEndPos = targetSelection.getAnchorOffset();
        var blockKey = targetSelection.getAnchorKey();
        blockSize = contentState.getBlockForKey(blockKey).getLength();
        break;
      }

    case Mode.REPLACE:
      {
        var _getSearchText = getSearchText(editorState, currentSelectionState),
            begin = _getSearchText.begin,
            end = _getSearchText.end; // Get the selection of the :emoji: search text


        var emojiTextSelection = currentSelectionState.merge({
          anchorOffset: begin,
          focusOffset: end
        });
        emojiAddedContent = draftJs.Modifier.replaceText(contentState, emojiTextSelection, emoji, undefined, entityKey);
        emojiEndPos = end;

        var _blockKey = emojiTextSelection.getAnchorKey();

        blockSize = contentState.getBlockForKey(_blockKey).getLength();
        break;
      }

    default:
      throw new Error('Unidentified value of "mode"');
  } // If the emoji is inserted at the end, a space is appended right after for
  // a smooth writing experience.


  if (emojiEndPos === blockSize) {
    emojiAddedContent = draftJs.Modifier.insertText(emojiAddedContent, emojiAddedContent.getSelectionAfter(), ' ');
  }

  var newEditorState = draftJs.EditorState.push(editorState, emojiAddedContent, 'insert-fragment');
  return draftJs.EditorState.forceSelection(newEditorState, emojiAddedContent.getSelectionAfter());
}

var _excluded = ["theme", "ariaProps", "callbacks", "onClose", "onOpen", "onSearchChange", "positionSuggestions", "shortNames", "store", "emojiImage"];

var EmojiSuggestions = /*#__PURE__*/function (_Component) {
  _inheritsLoose(EmojiSuggestions, _Component);

  function EmojiSuggestions() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isActive: false,
      focusedOptionIndex: 0
    };

    _this.onEditorStateChange = function (editorState) {
      var searches = _this.props.store.getAllSearches(); // if no search portal is active there is no need to show the popover


      if (searches.size === 0) {
        return editorState;
      }

      var removeList = function removeList() {
        _this.props.store.resetEscapedSearch();

        _this.closeDropdown();

        return editorState;
      }; // get the current selection


      var selection = editorState.getSelection();
      var anchorKey = selection.getAnchorKey();
      var anchorOffset = selection.getAnchorOffset(); // the list should not be visible if a range is selected or the editor has no focus

      if (!selection.isCollapsed() || !selection.getHasFocus()) return removeList(); // identify the start & end positon of each search-text

      var offsetDetails = searches.map(function (offsetKey) {
        return utils__default["default"].decodeOffsetKey(offsetKey);
      }); // a leave can be empty when it is removed due e.g. using backspace

      var leaves = offsetDetails.filter(function (offsetDetail) {
        return offsetDetail.blockKey === anchorKey;
      }).map(function (offsetDetail) {
        return editorState.getBlockTree(offsetDetail.blockKey).getIn([offsetDetail.decoratorKey, 'leaves', offsetDetail.leafKey]);
      }); // if all leaves are undefined the popover should be removed

      if (leaves.every(function (leave) {
        return leave === undefined;
      })) {
        return removeList();
      } // Checks that the cursor is after the @ character but still somewhere in
      // the word (search term). Setting it to allow the cursor to be left of
      // the @ causes troubles due selection confusion.


      var plainText = editorState.getCurrentContent().getPlainText();
      var selectionIsInsideWord = leaves.filter(function (leave) {
        return leave !== undefined;
      }).map(function (_ref) {
        var start = _ref.start,
            end = _ref.end;
        return start === 0 && anchorOffset === 1 && plainText.charAt(anchorOffset) !== ':' && /(\s|^):[\w]*/.test(plainText) && anchorOffset <= end || // : is the first character
        anchorOffset > start + 1 && anchorOffset <= end;
      }
      /*: is in the text or at the end*/
      );
      if (selectionIsInsideWord.every(function (isInside) {
        return isInside === false;
      })) return removeList();
      _this.activeOffsetKey = selectionIsInsideWord.filter(function (value) {
        return value === true;
      }).keySeq().first();

      _this.onSearchChange(editorState, selection); // make sure the escaped search is reseted in the cursor since the user
      // already switched to another emoji search


      if (!_this.props.store.isEscaped(_this.activeOffsetKey)) {
        _this.props.store.resetEscapedSearch();
      } // If none of the above triggered to close the window, it's safe to assume
      // the dropdown should be open. This is useful when a user focuses on another
      // input field and then comes back: the dropdown will again.


      if (!_this.state.isActive && !_this.props.store.isEscaped(_this.activeOffsetKey)) {
        _this.openDropdown();
      } // makes sure the focused index is reseted every time a new selection opens
      // or the selection was moved to another emoji search


      if (_this.lastSelectionIsInsideWord === undefined || !selectionIsInsideWord.equals(_this.lastSelectionIsInsideWord)) {
        _this.setState({
          focusedOptionIndex: 0
        });
      }

      _this.lastSelectionIsInsideWord = selectionIsInsideWord;
      return editorState;
    };

    _this.onSearchChange = function (editorState, selection) {
      var _getSearchText = getSearchText(editorState, selection),
          word = _getSearchText.word;

      var searchValue = word.substring(1, word.length);

      if (_this.lastSearchValue !== searchValue && typeof _this.props.onSearchChange === 'function') {
        _this.lastSearchValue = searchValue;

        _this.props.onSearchChange({
          value: searchValue
        });
      }
    };

    _this.onDownArrow = function (keyboardEvent) {
      keyboardEvent.preventDefault();
      var newIndex = _this.state.focusedOptionIndex + 1;

      _this.onEmojiFocus(newIndex >= _this.filteredEmojis.size ? 0 : newIndex);
    };

    _this.onTab = function (keyboardEvent) {
      keyboardEvent.preventDefault();

      _this.commitSelection();
    };

    _this.onUpArrow = function (keyboardEvent) {
      keyboardEvent.preventDefault();

      if (_this.filteredEmojis && _this.filteredEmojis.size > 0) {
        var newIndex = _this.state.focusedOptionIndex - 1;

        _this.onEmojiFocus(Math.max(newIndex, 0));
      }
    };

    _this.onEscape = function (keyboardEvent) {
      keyboardEvent.preventDefault();

      var activeOffsetKey = _this.lastSelectionIsInsideWord.filter(function (value) {
        return value === true;
      }).keySeq().first();

      _this.props.store.escapeSearch(activeOffsetKey);

      _this.closeDropdown(); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    };

    _this.onEmojiSelect = function (emoji) {
      _this.closeDropdown();

      var newEditorState = addEmoji(_this.props.store.getEditorState(), emoji, Mode.REPLACE);

      _this.props.store.setEditorState(newEditorState);
    };

    _this.onEmojiFocus = function (index) {
      var descendant = "emoji-option-" + _this.key + "-" + index;
      _this.props.ariaProps.ariaActiveDescendantID = descendant;

      _this.setState({
        focusedOptionIndex: index
      }); // to force a re-render of the outer component to change the aria props


      _this.props.store.setEditorState(_this.props.store.getEditorState());
    };

    _this.getEmojisForFilter = function () {
      var selection = _this.props.store.getEditorState().getSelection();

      var _getSearchText2 = getSearchText(_this.props.store.getEditorState(), selection),
          word = _getSearchText2.word;

      var emojiValue = word.substring(1, word.length).toLowerCase();

      var filteredValues = _this.props.shortNames.filter(function (emojiShortName) {
        return !emojiValue || emojiShortName.indexOf(emojiValue) > -1;
      });

      var size = filteredValues.size < 9 ? filteredValues.size : 9;
      return filteredValues.setSize(size);
    };

    _this.commitSelection = function () {
      _this.onEmojiSelect(_this.filteredEmojis.get(_this.state.focusedOptionIndex));

      return 'handled';
    };

    _this.openDropdown = function () {
      // This is a really nasty way of attaching & releasing the key related functions.
      // It assumes that the keyFunctions object will not loose its reference and
      // by this we can replace inner parameters spread over different modules.
      // This better be some registering & unregistering logic. PRs are welcome :)
      _this.props.callbacks.handleReturn = _this.commitSelection;

      _this.props.callbacks.keyBindingFn = function (keyboardEvent) {
        // arrow down
        if (keyboardEvent.keyCode === 40) {
          _this.onDownArrow(keyboardEvent);
        } // arrow up


        if (keyboardEvent.keyCode === 38) {
          _this.onUpArrow(keyboardEvent);
        } // escape


        if (keyboardEvent.keyCode === 27) {
          _this.onEscape(keyboardEvent);
        } // tab


        if (keyboardEvent.keyCode === 9) {
          _this.onTab(keyboardEvent);
        }

        return undefined;
      };

      var descendant = "emoji-option-" + _this.key + "-" + _this.state.focusedOptionIndex;
      _this.props.ariaProps.ariaActiveDescendantID = descendant;
      _this.props.ariaProps.ariaOwneeID = "emojis-list-" + _this.key;
      _this.props.ariaProps.ariaHasPopup = 'true';
      _this.props.ariaProps.ariaExpanded = true;

      _this.setState({
        isActive: true
      });

      if (_this.props.onOpen) {
        _this.props.onOpen();
      }
    };

    _this.closeDropdown = function () {
      // make sure none of these callbacks are triggered
      _this.props.callbacks.keyBindingFn = undefined;
      _this.props.callbacks.handleReturn = undefined;
      _this.props.ariaProps.ariaHasPopup = 'false';
      _this.props.ariaProps.ariaExpanded = false;
      _this.props.ariaProps.ariaActiveDescendantID = undefined;
      _this.props.ariaProps.ariaOwneeID = undefined;

      _this.setState({
        isActive: false
      });

      if (_this.props.onClose) {
        _this.props.onClose();
      }
    };

    return _this;
  }

  var _proto = EmojiSuggestions.prototype;

  _proto.UNSAFE_componentWillMount = function UNSAFE_componentWillMount() {
    this.key = draftJs.genKey();
    this.props.callbacks.onChange = this.onEditorStateChange;
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.popover && this.filteredEmojis) {
      // In case the list shrinks there should be still an option focused.
      // Note: this might run multiple times and deduct 1 until the condition is
      // not fullfilled anymore.
      var size = this.filteredEmojis.size;

      if (size > 0 && this.state.focusedOptionIndex >= size) {
        this.setState({
          focusedOptionIndex: size - 1
        });
      }

      if (size <= 0) {
        this.closeDropdown();
      }

      var decoratorRect = this.props.store.getPortalClientRect(this.activeOffsetKey);

      if (decoratorRect) {
        var newStyles = this.props.positionSuggestions({
          decoratorRect: decoratorRect,
          props: this.props,
          state: this.state,
          filteredEmojis: this.filteredEmojis,
          popover: this.popover
        });

        for (var _i = 0, _Object$entries = Object.entries(newStyles); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _Object$entries[_i],
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          this.popover.style[key] = value;
        }
      } else {
        //close dropdown if no position could calculated
        this.closeDropdown();
      }
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.props.callbacks.onChange = undefined;
  };

  _proto.render = function render() {
    var _this2 = this;

    if (!this.state.isActive) {
      return null;
    }

    this.filteredEmojis = this.getEmojisForFilter();

    var _this$props = this.props,
        _this$props$theme = _this$props.theme,
        theme = _this$props$theme === void 0 ? {} : _this$props$theme;
        _this$props.ariaProps;
        _this$props.callbacks;
        _this$props.onClose;
        _this$props.onOpen;
        _this$props.onSearchChange;
        _this$props.positionSuggestions;
        _this$props.shortNames;
        _this$props.store;
        var emojiImage = _this$props.emojiImage,
        restProps = _objectWithoutPropertiesLoose(_this$props, _excluded);

    return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, restProps, {
      className: theme.emojiSuggestions,
      role: "listbox",
      id: "emojis-list-" + this.key,
      ref: function ref(element) {
        _this2.popover = element;
      }
    }), this.filteredEmojis.map(function (emoji, index) {
      return /*#__PURE__*/React__default["default"].createElement(Entry$2, {
        key: emoji,
        onEmojiSelect: _this2.onEmojiSelect,
        onEmojiFocus: _this2.onEmojiFocus,
        isFocused: _this2.state.focusedOptionIndex === index,
        emoji: emoji,
        index: index,
        id: "emoji-option-" + _this2.key + "-" + index,
        theme: theme,
        emojiImage: emojiImage
      });
    }).toJS());
  };

  return EmojiSuggestions;
}(React.Component);

function EmojiSuggestionsPortal(_ref) {
  var children = _ref.children,
      store = _ref.store,
      offsetKey = _ref.offsetKey;
  var ref = React.useRef(null);
  var updatePortalClientRect = React.useCallback(function () {
    store.updatePortalClientRect(offsetKey, function () {
      var _ref$current;

      return (_ref$current = ref.current) == null ? void 0 : _ref$current.getBoundingClientRect();
    });
  }, [store, offsetKey]);
  React.useEffect(function () {
    store.register(offsetKey);
    updatePortalClientRect(); // trigger a re-render so the EmojiSuggestions becomes active

    store.setEditorState(store.getEditorState());
    return function () {
      store.unregister(offsetKey);
    };
  }, [updatePortalClientRect, store]);
  return /*#__PURE__*/React__default["default"].createElement("span", {
    ref: ref
  }, children);
}

// Filtering out all non printable characters.
// All the printable characters of ASCII are conveniently in one continuous range
function escapeNonASCIICharacters(str) {
  return str.replace(/[^ -~]+/g, '');
}

function createEmojisFromStrategy() {
  var emojis = {};

  for (var _iterator = _createForOfIteratorHelperLoose(data__default["default"]), _step; !(_step = _iterator()).done;) {
    var item = _step.value;
    var shortName = emojiToolkit.toShort(item.unicode);
    var emoji = emojiToolkit.emojiList[escapeNonASCIICharacters(shortName)];

    if (emoji) {
      if (!emojis[emoji.category]) {
        emojis[emoji.category] = {};
      }

      emojis[emoji.category][shortName] = [shortName];

      if (item.skins) {
        for (var _iterator2 = _createForOfIteratorHelperLoose(item.skins), _step2; !(_step2 = _iterator2()).done;) {
          var skin = _step2.value;
          var skinShortName = emojiToolkit.toShort(skin.unicode);

          if (emojiToolkit.emojiList[skinShortName]) {
            emojis[emoji.category][shortName].push(skinShortName);
          }
        }
      }
    }
  }

  return emojis;
}

var defaultEmojiGroups = [{
  title: 'People',
  icon: /*#__PURE__*/React__default["default"].createElement(fa.FaSmile, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['people']
}, {
  title: 'Nature',
  icon: /*#__PURE__*/React__default["default"].createElement(fa.FaPaw, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['nature']
}, {
  title: 'Food & Drink',
  icon: /*#__PURE__*/React__default["default"].createElement(fa.FaUtensils, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['food']
}, {
  title: 'Activity',
  icon: /*#__PURE__*/React__default["default"].createElement(fa.FaFutbol, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['activity']
}, {
  title: 'Travel & Places',
  icon: /*#__PURE__*/React__default["default"].createElement(fa.FaPlane, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['travel']
}, {
  title: 'Objects',
  icon: /*#__PURE__*/React__default["default"].createElement(fa.FaBell, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['objects']
}, {
  title: 'Symbols',
  icon: /*#__PURE__*/React__default["default"].createElement(fa.FaHeart, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['symbols']
}, {
  title: 'Flags',
  icon: /*#__PURE__*/React__default["default"].createElement(fa.FaFlag, {
    style: {
      verticalAlign: ''
    }
  }),
  categories: ['flags']
}];
var defaultEmojiGroups$1 = defaultEmojiGroups;

var Entry$1 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Entry, _Component);

  function Entry() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isFocused: false
    };

    _this.onMouseUp = function () {
      if (_this.mouseDown) {
        _this.mouseDown = false;

        _this.props.onEmojiSelect(_this.props.emoji);
      }
    };

    _this.onMouseDown = function () {
      _this.mouseDown = true;

      if (_this.props.onEmojiMouseDown) {
        _this.props.onEmojiMouseDown(_assertThisInitialized(_this), _this.props.toneSet || null);
      }
    };

    _this.onMouseEnter = function () {
      if (!_this.props.checkMouseDown()) {
        _this.setState({
          isFocused: true
        });
      }
    };

    _this.onMouseLeave = function () {
      if (!_this.props.checkMouseDown()) {
        _this.setState({
          isFocused: false
        });
      }
    };

    _this.deselect = function () {
      _this.setState({
        isFocused: false
      });
    };

    _this.mouseDown = _this.props.mouseDown;
    return _this;
  }

  var _proto = Entry.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        _this$props$theme = _this$props.theme,
        theme = _this$props$theme === void 0 ? {} : _this$props$theme,
        emoji = _this$props.emoji,
        EmojiImage = _this$props.emojiImage;
    var isFocused = this.state.isFocused;
    return /*#__PURE__*/React__default["default"].createElement("button", {
      type: "button",
      className: isFocused ? theme.emojiSelectPopoverEntryFocused : theme.emojiSelectPopoverEntry,
      onMouseDown: this.onMouseDown,
      onMouseEnter: this.onMouseEnter,
      onMouseLeave: this.onMouseLeave,
      onMouseUp: this.onMouseUp,
      ref: function ref(element) {
        _this2.button = element;
      }
    }, /*#__PURE__*/React__default["default"].createElement(EmojiImage, {
      emoji: emoji,
      theme: theme,
      unicode: emojiToolkit.shortnameToUnicode(emoji)
    }));
  };

  return Entry;
}(React.Component);

Entry$1.propTypes = {
  theme: PropTypes__default["default"].object.isRequired,
  emoji: PropTypes__default["default"].string.isRequired,
  mouseDown: PropTypes__default["default"].bool,
  checkMouseDown: PropTypes__default["default"].func.isRequired,
  onEmojiSelect: PropTypes__default["default"].func.isRequired,
  onEmojiMouseDown: PropTypes__default["default"].func
};
Entry$1.defaultProps = {
  mouseDown: false
};

var Group = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Group, _Component);

  function Group() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      hasRenderedEmoji: false
    };

    _this.shouldComponentUpdate = function (nextProps) {
      if (_this.state.hasRenderedEmoji) {
        return false;
      }

      return nextProps.isActive;
    };

    _this.renderCategory = function (category) {
      var _this$props = _this.props,
          _this$props$theme = _this$props.theme,
          theme = _this$props$theme === void 0 ? {} : _this$props$theme,
          emojis = _this$props.emojis,
          checkMouseDown = _this$props.checkMouseDown,
          onEmojiSelect = _this$props.onEmojiSelect,
          onEmojiMouseDown = _this$props.onEmojiMouseDown,
          emojiImage = _this$props.emojiImage,
          isActive = _this$props.isActive;
      var categoryEmojis = emojis[category];
      return Object.keys(categoryEmojis).map(function (key) {
        return /*#__PURE__*/React__default["default"].createElement("li", {
          key: categoryEmojis[key][0],
          className: theme.emojiSelectPopoverGroupItem
        }, isActive && /*#__PURE__*/React__default["default"].createElement(Entry$1, {
          emoji: categoryEmojis[key][0],
          theme: theme,
          toneSet: categoryEmojis[key].length > 1 ? categoryEmojis[key] : null,
          checkMouseDown: checkMouseDown,
          onEmojiSelect: onEmojiSelect,
          onEmojiMouseDown: onEmojiMouseDown,
          emojiImage: emojiImage
        }));
      });
    };

    return _this;
  }

  var _proto = Group.prototype;

  _proto.componentDidUpdate = function componentDidUpdate() {
    if (this.props.isActive) {
      this.setState({
        hasRenderedEmoji: true
      }); // eslint-disable-line
    }
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        _this$props2$theme = _this$props2.theme,
        theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
        group = _this$props2.group;
    return /*#__PURE__*/React__default["default"].createElement("section", {
      className: theme.emojiSelectPopoverGroup,
      ref: function ref(element) {
        _this2.container = element;
      }
    }, /*#__PURE__*/React__default["default"].createElement("h3", {
      className: theme.emojiSelectPopoverGroupTitle
    }, group.title), /*#__PURE__*/React__default["default"].createElement("ul", {
      className: theme.emojiSelectPopoverGroupList,
      ref: function ref(element) {
        _this2.list = element;
      }
    }, group.categories.map(function (category) {
      return _this2.renderCategory(category);
    })));
  };

  return Group;
}(React.Component);

Group.propTypes = {
  theme: PropTypes__default["default"].object.isRequired,
  group: PropTypes__default["default"].object.isRequired,
  emojis: PropTypes__default["default"].object.isRequired,
  checkMouseDown: PropTypes__default["default"].func.isRequired,
  onEmojiSelect: PropTypes__default["default"].func.isRequired,
  onEmojiMouseDown: PropTypes__default["default"].func.isRequired,
  isActive: PropTypes__default["default"].bool
};

var Groups = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Groups, _Component);

  function Groups() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      activeGroup: 0
    };

    _this.onScroll = function (values) {
      var _this$props = _this.props,
          groups = _this$props.groups,
          onGroupScroll = _this$props.onGroupScroll;
      var activeGroup = 0;
      groups.forEach(function (group, index) {
        if (values.scrollTop >= group.top) {
          activeGroup = index;

          _this.setState({
            activeGroup: activeGroup
          });
        }
      });
      onGroupScroll(activeGroup);
    };

    _this.onWheel = function (event) {
      // Disable page scroll, but enable groups scroll
      var _getValues = _this.scrollbars.getValues(),
          clientHeight = _getValues.clientHeight,
          scrollHeight = _getValues.scrollHeight,
          scrollTop = _getValues.scrollTop;

      if (event.deltaY > 0) {
        if (scrollTop < scrollHeight - clientHeight - event.deltaY) {
          event.stopPropagation();
        } else {
          _this.scrollbars.scrollToBottom();
        }
      } else {
        if (scrollTop > -event.deltaY) {
          // eslint-disable-line no-lonely-if
          event.stopPropagation();
        } else {
          _this.scrollbars.scrollTop(0);
        }
      }
    };

    _this.scrollToGroup = function (groupIndex) {
      var groups = _this.props.groups;

      _this.scrollbars.scrollTop(groups[groupIndex].topList);
    };

    _this.calculateBounds = function () {
      var _getValues2 = _this.scrollbars.getValues(),
          scrollHeight = _getValues2.scrollHeight,
          scrollTop = _getValues2.scrollTop;

      if (scrollHeight) {
        var groups = _this.props.groups;
        var containerTop = _this.container.getBoundingClientRect().top - scrollTop;
        groups.forEach(function (group) {
          var groupTop = group.instance.container.getBoundingClientRect().top;
          var listTop = group.instance.list.getBoundingClientRect().top;
          group.top = groupTop - containerTop; // eslint-disable-line no-param-reassign

          group.topList = listTop - containerTop; // eslint-disable-line no-param-reassign
        });
      }
    };

    _this.isRenderedGroupActive = function (index) {
      var activeGroup = _this.state.activeGroup;
      var isOpen = _this.props.isOpen;
      return activeGroup === index || isOpen && activeGroup + 1 === index; // we also preload next group when popup is open
    };

    return _this;
  }

  var _proto = Groups.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.calculateBounds();
  };

  _proto.componentDidUpdate = function componentDidUpdate() {
    this.calculateBounds();
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props2 = this.props,
        _this$props2$theme = _this$props2.theme,
        theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
        _this$props2$groups = _this$props2.groups,
        groups = _this$props2$groups === void 0 ? [] : _this$props2$groups,
        emojis = _this$props2.emojis,
        checkMouseDown = _this$props2.checkMouseDown,
        onEmojiSelect = _this$props2.onEmojiSelect,
        onEmojiMouseDown = _this$props2.onEmojiMouseDown,
        emojiImage = _this$props2.emojiImage;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: theme.emojiSelectPopoverGroups,
      onWheel: this.onWheel,
      ref: function ref(element) {
        _this2.container = element;
      }
    }, /*#__PURE__*/React__default["default"].createElement(reactCustomScrollbars2.Scrollbars, {
      className: theme.emojiSelectPopoverScrollbarOuter,
      onScrollFrame: this.onScroll,
      renderTrackVertical: function renderTrackVertical() {
        return /*#__PURE__*/React__default["default"].createElement("div", {
          className: theme.emojiSelectPopoverScrollbar
        });
      },
      renderThumbVertical: function renderThumbVertical(props) {
        return /*#__PURE__*/React__default["default"].createElement("div", _extends({}, props, {
          className: theme.emojiSelectPopoverScrollbarThumb
        }));
      },
      ref: function ref(element) {
        _this2.scrollbars = element;
      }
    }, groups.map(function (group, index) {
      return /*#__PURE__*/React__default["default"].createElement(Group, {
        key: "group#" + index + "[" + group.categories.join(',') + "]" // eslint-disable-line react/no-array-index-key
        ,
        theme: theme,
        group: group,
        emojis: emojis,
        checkMouseDown: checkMouseDown,
        onEmojiSelect: onEmojiSelect,
        onEmojiMouseDown: onEmojiMouseDown,
        ref: function ref(element) {
          group.instance = element; // eslint-disable-line no-param-reassign
        },
        emojiImage: emojiImage,
        isActive: _this2.isRenderedGroupActive(index)
      });
    })));
  };

  return Groups;
}(React.Component);

Groups.propTypes = {
  theme: PropTypes__default["default"].object.isRequired,
  groups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object).isRequired,
  emojis: PropTypes__default["default"].object.isRequired,
  checkMouseDown: PropTypes__default["default"].func.isRequired,
  onEmojiSelect: PropTypes__default["default"].func.isRequired,
  onEmojiMouseDown: PropTypes__default["default"].func.isRequired,
  onGroupScroll: PropTypes__default["default"].func.isRequired,
  isOpen: PropTypes__default["default"].bool
};

var Entry = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Entry, _Component);

  function Entry() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.mouseDown = false;

    _this.onMouseDown = function () {
      _this.mouseDown = true;
    };

    _this.onMouseUp = function () {
      if (_this.mouseDown) {
        _this.mouseDown = false;

        _this.props.onGroupSelect(_this.props.groupIndex);
      }
    };

    return _this;
  }

  var _proto = Entry.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        _this$props$theme = _this$props.theme,
        theme = _this$props$theme === void 0 ? {} : _this$props$theme,
        icon = _this$props.icon,
        isActive = _this$props.isActive;
    return /*#__PURE__*/React__default["default"].createElement("button", {
      className: isActive ? theme.emojiSelectPopoverNavEntryActive : theme.emojiSelectPopoverNavEntry,
      onMouseDown: this.onMouseDown,
      type: "button",
      onMouseUp: this.onMouseUp
    }, icon);
  };

  return Entry;
}(React.Component);

Entry.propTypes = {
  theme: PropTypes__default["default"].object.isRequired,
  icon: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].string]).isRequired,
  groupIndex: PropTypes__default["default"].number.isRequired,
  isActive: PropTypes__default["default"].bool,
  onGroupSelect: PropTypes__default["default"].func.isRequired
};
Entry.defaultProps = {
  isActive: false
};

var Nav = function Nav(_ref) {
  var _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? {} : _ref$theme,
      groups = _ref.groups,
      activeGroup = _ref.activeGroup,
      onGroupSelect = _ref.onGroupSelect;
  return /*#__PURE__*/React__default["default"].createElement("ul", {
    className: theme.emojiSelectPopoverNav
  }, groups.map(function (group, index) {
    return /*#__PURE__*/React__default["default"].createElement("li", {
      key: "nav-group#" + index + "[" + group.categories.join(',') + "]" // eslint-disable-line react/no-array-index-key
      ,
      className: theme.emojiSelectPopoverNavItem
    }, /*#__PURE__*/React__default["default"].createElement(Entry, {
      theme: theme,
      groupIndex: index,
      isActive: index === activeGroup,
      icon: group.icon,
      onGroupSelect: onGroupSelect
    }));
  }));
};

Nav.propTypes = {
  theme: PropTypes__default["default"].object.isRequired,
  groups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object).isRequired,
  activeGroup: PropTypes__default["default"].number.isRequired,
  onGroupSelect: PropTypes__default["default"].func.isRequired
};
var Nav$1 = Nav;

var ToneSelect = /*#__PURE__*/function (_Component) {
  _inheritsLoose(ToneSelect, _Component);

  function ToneSelect() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    _this.setCorrectPosition = function (areaBounds, entryBounds) {
      var width = _this.tones.offsetWidth;
      var height = _this.tones.offsetHeight;
      var style = {
        marginLeft: 0,
        left: entryBounds.left + entryBounds.width / 2 - width / 2,
        // eslint-disable-line no-mixed-operators
        bottom: entryBounds.bottom + entryBounds.height
      };

      if (style.left < areaBounds.left) {
        delete style.marginLeft;
        style.left = areaBounds.left;
      } else if (style.left > areaBounds.left + areaBounds.width - width) {
        // eslint-disable-line no-mixed-operators
        delete style.marginLeft;
        delete style.left;
        style.right = areaBounds.right;
      }

      if (style.bottom > areaBounds.bottom + areaBounds.height - height) {
        delete style.bottom;
        style.top = entryBounds.top + entryBounds.height;
      }

      style = toStyle__default["default"].object(style);

      for (var _i = 0, _Object$entries = Object.entries(style); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _Object$entries[_i],
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _this.tones.style[key] = value;
      }
    };

    return _this;
  }

  var _proto = ToneSelect.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this$props$bounds = this.props.bounds,
        areaBounds = _this$props$bounds.areaBounds,
        entryBounds = _this$props$bounds.entryBounds;
    this.setCorrectPosition(areaBounds, entryBounds);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        _this$props$theme = _this$props.theme,
        theme = _this$props$theme === void 0 ? {} : _this$props$theme,
        _this$props$toneSet = _this$props.toneSet,
        toneSet = _this$props$toneSet === void 0 ? [] : _this$props$toneSet,
        onEmojiSelect = _this$props.onEmojiSelect,
        emojiImage = _this$props.emojiImage;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: theme.emojiSelectPopoverToneSelect
    }, /*#__PURE__*/React__default["default"].createElement("ul", {
      className: theme.emojiSelectPopoverToneSelectList,
      ref: function ref(element) {
        _this2.tones = element;
      }
    }, (toneSet || []).map(function (emoji) {
      return /*#__PURE__*/React__default["default"].createElement("li", {
        key: "tone-select(" + emoji + ")",
        className: theme.emojiSelectPopoverToneSelectItem
      }, /*#__PURE__*/React__default["default"].createElement(Entry$1, {
        emoji: emoji,
        theme: theme,
        checkMouseDown: function checkMouseDown() {
          return false;
        },
        onEmojiSelect: onEmojiSelect,
        mouseDown: true,
        emojiImage: emojiImage
      }));
    })));
  };

  return ToneSelect;
}(React.Component);

ToneSelect.propTypes = {
  theme: PropTypes__default["default"].object.isRequired,
  bounds: PropTypes__default["default"].shape({
    areaBounds: PropTypes__default["default"].shape({
      left: PropTypes__default["default"].number.isRequired,
      right: PropTypes__default["default"].number.isRequired,
      top: PropTypes__default["default"].number.isRequired,
      bottom: PropTypes__default["default"].number.isRequired,
      width: PropTypes__default["default"].number.isRequired,
      height: PropTypes__default["default"].number.isRequired
    }).isRequired,
    entryBounds: PropTypes__default["default"].shape({
      left: PropTypes__default["default"].number.isRequired,
      right: PropTypes__default["default"].number.isRequired,
      top: PropTypes__default["default"].number.isRequired,
      bottom: PropTypes__default["default"].number.isRequired,
      width: PropTypes__default["default"].number.isRequired,
      height: PropTypes__default["default"].number.isRequired
    }).isRequired
  }).isRequired,
  onEmojiSelect: PropTypes__default["default"].func.isRequired
};

var Popover = /*#__PURE__*/function (_Component) {
  _inheritsLoose(Popover, _Component);

  function Popover() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.activeEmoji = null;
    _this.toneSelectTimer = null;
    _this.mouseDown = false;
    _this.toneSet = null;
    _this.state = {
      activeGroup: 0,
      showToneSelect: false
    };

    _this.onMouseDown = function () {
      _this.mouseDown = true;
    };

    _this.onMouseUp = function () {
      _this.mouseDown = false;

      if (_this.activeEmoji) {
        _this.activeEmoji.deselect();

        _this.activeEmoji = null;

        if (_this.state.showToneSelect) {
          _this.closeToneSelect();
        } else if (_this.toneSelectTimer) {
          clearTimeout(_this.toneSelectTimer);
          _this.toneSelectTimer = null;
        }
      }
    };

    _this.onEmojiSelect = function (emoji) {
      var newEditorState = addEmoji(_this.props.store.getEditorState(), emoji);

      _this.props.store.setEditorState(newEditorState);

      _this.props.onEmojiSelect();
    };

    _this.onEmojiMouseDown = function (emojiEntry, toneSet) {
      _this.activeEmoji = emojiEntry;

      if (toneSet) {
        _this.openToneSelectWithTimer(toneSet);
      }
    };

    _this.onGroupSelect = function (groupIndex) {
      _this.groupsElement.scrollToGroup(groupIndex);
    };

    _this.onGroupScroll = function (groupIndex) {
      if (groupIndex !== _this.state.activeGroup) {
        _this.setState({
          activeGroup: groupIndex
        });
      }
    };

    _this.openToneSelectWithTimer = function (toneSet) {
      _this.toneSelectTimer = setTimeout(function () {
        _this.toneSelectTimer = null;

        _this.openToneSelect(toneSet);
      }, _this.props.toneSelectOpenDelay);
    };

    _this.openToneSelect = function (toneSet) {
      _this.toneSet = toneSet;

      _this.setState({
        showToneSelect: true
      });
    };

    _this.closeToneSelect = function () {
      _this.toneSet = [];

      _this.setState({
        showToneSelect: false
      });
    };

    _this.checkMouseDown = function () {
      return _this.mouseDown;
    };

    _this.renderToneSelect = function () {
      if (_this.state.showToneSelect) {
        var _this$props = _this.props,
            _this$props$theme = _this$props.theme,
            theme = _this$props$theme === void 0 ? {} : _this$props$theme,
            emojiImage = _this$props.emojiImage;

        var containerBounds = _this.container.getBoundingClientRect();

        var areaBounds = _this.groupsElement.container.getBoundingClientRect();

        var entryBounds = _this.activeEmoji.button.getBoundingClientRect(); // Translate TextRectangle coords to CSS relative coords


        var bounds = {
          areaBounds: {
            left: areaBounds.left - containerBounds.left,
            right: containerBounds.right - areaBounds.right,
            top: areaBounds.top - containerBounds.top,
            bottom: containerBounds.bottom - areaBounds.bottom,
            width: areaBounds.width,
            height: areaBounds.width
          },
          entryBounds: {
            left: entryBounds.left - containerBounds.left,
            right: containerBounds.right - entryBounds.right,
            top: entryBounds.top - containerBounds.top,
            bottom: containerBounds.bottom - entryBounds.bottom,
            width: entryBounds.width,
            height: entryBounds.width
          }
        };
        return /*#__PURE__*/React__default["default"].createElement(ToneSelect, {
          theme: theme,
          bounds: bounds,
          toneSet: _this.toneSet,
          onEmojiSelect: _this.onEmojiSelect,
          emojiImage: emojiImage
        });
      }

      return null;
    };

    _this.renderMenu = function (position) {
      var _this$props2 = _this.props,
          menuPosition = _this$props2.menuPosition,
          _this$props2$theme = _this$props2.theme,
          theme = _this$props2$theme === void 0 ? {} : _this$props2$theme,
          _this$props2$groups = _this$props2.groups,
          groups = _this$props2$groups === void 0 ? [] : _this$props2$groups;
      var activeGroup = _this.state.activeGroup;
      if (position === (menuPosition || 'bottom')) return /*#__PURE__*/React__default["default"].createElement(Nav$1, {
        theme: theme,
        groups: groups,
        activeGroup: activeGroup,
        onGroupSelect: _this.onGroupSelect
      });
      return null;
    };

    return _this;
  }

  var _proto = Popover.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener('mouseup', this.onMouseUp);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener('mouseup', this.onMouseUp);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props3 = this.props,
        _this$props3$theme = _this$props3.theme,
        theme = _this$props3$theme === void 0 ? {} : _this$props3$theme,
        _this$props3$groups = _this$props3.groups,
        groups = _this$props3$groups === void 0 ? [] : _this$props3$groups,
        emojis = _this$props3.emojis,
        _this$props3$isOpen = _this$props3.isOpen,
        isOpen = _this$props3$isOpen === void 0 ? false : _this$props3$isOpen,
        emojiImage = _this$props3.emojiImage;
    var className = isOpen ? theme.emojiSelectPopover : theme.emojiSelectPopoverClosed;
    var activeGroup = this.state.activeGroup;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: className,
      onMouseDown: this.onMouseDown,
      ref: function ref(element) {
        _this2.container = element;
      }
    }, isOpen && /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("h3", {
      className: theme.emojiSelectPopoverTitle
    }, groups[activeGroup].title), this.renderMenu('top'), /*#__PURE__*/React__default["default"].createElement(Groups, {
      theme: theme,
      groups: groups,
      emojis: emojis,
      checkMouseDown: this.checkMouseDown,
      onEmojiSelect: this.onEmojiSelect,
      onEmojiMouseDown: this.onEmojiMouseDown,
      onGroupScroll: this.onGroupScroll,
      ref: function ref(element) {
        _this2.groupsElement = element;
      },
      emojiImage: emojiImage,
      isOpen: isOpen
    }), this.renderMenu('bottom'), this.renderToneSelect()));
  };

  return Popover;
}(React.Component);

Popover.propTypes = {
  theme: PropTypes__default["default"].object.isRequired,
  store: PropTypes__default["default"].object.isRequired,
  groups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].object).isRequired,
  emojis: PropTypes__default["default"].object.isRequired,
  toneSelectOpenDelay: PropTypes__default["default"].number.isRequired,
  isOpen: PropTypes__default["default"].bool,
  menuPosition: PropTypes__default["default"].oneOf(['top', 'bottom'])
};
Popover.defaultProps = {
  isOpen: false
};

var emojis = createEmojisFromStrategy();

var EmojiSelect = /*#__PURE__*/function (_Component) {
  _inheritsLoose(EmojiSelect, _Component);

  function EmojiSelect() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;
    _this.state = {
      isOpen: false
    };

    _this.onClick = function (event) {
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
    };

    _this.onButtonMouseUp = function () {
      return _this.state.isOpen ? _this.closePopover() : _this.openPopover();
    };

    _this.openPopover = function () {
      if (!_this.state.isOpen) {
        _this.setState({
          isOpen: true
        });
      }

      if (_this.props.onOpen) {
        _this.props.onOpen();
      }
    };

    _this.closePopover = function () {
      if (_this.state.isOpen) {
        _this.setState({
          isOpen: false
        });
      }

      if (_this.props.onClose) {
        _this.props.onClose();
      }
    };

    return _this;
  }

  var _proto = EmojiSelect.prototype;

  // When the selector is open and users click anywhere on the page,
  // the selector should close
  _proto.componentDidMount = function componentDidMount() {
    document.addEventListener('click', this.closePopover);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    document.removeEventListener('click', this.closePopover);
  };

  _proto.render = function render() {
    var _this2 = this;

    var _this$props = this.props,
        _this$props$theme = _this$props.theme,
        theme = _this$props$theme === void 0 ? {} : _this$props$theme,
        store = _this$props.store,
        selectGroups = _this$props.selectGroups,
        selectButtonContent = _this$props.selectButtonContent,
        toneSelectOpenDelay = _this$props.toneSelectOpenDelay,
        emojiImage = _this$props.emojiImage,
        closeOnEmojiSelect = _this$props.closeOnEmojiSelect,
        menuPosition = _this$props.menuPosition;
    var buttonClassName = this.state.isOpen ? theme.emojiSelectButtonPressed : theme.emojiSelectButton;
    return /*#__PURE__*/React__default["default"].createElement("div", {
      className: theme.emojiSelect,
      onClick: this.onClick
    }, /*#__PURE__*/React__default["default"].createElement("button", {
      className: buttonClassName,
      onMouseUp: this.onButtonMouseUp,
      type: "button"
    }, selectButtonContent), /*#__PURE__*/React__default["default"].createElement(Popover, {
      theme: theme,
      store: store,
      groups: selectGroups,
      emojis: emojis,
      toneSelectOpenDelay: toneSelectOpenDelay,
      isOpen: this.state.isOpen,
      emojiImage: emojiImage,
      menuPosition: menuPosition,
      onEmojiSelect: function onEmojiSelect() {
        if (closeOnEmojiSelect) {
          _this2.closePopover();
        }
      }
    }));
  };

  return EmojiSelect;
}(React.Component);

EmojiSelect.propTypes = {
  theme: PropTypes__default["default"].object.isRequired,
  store: PropTypes__default["default"].object.isRequired,
  selectGroups: PropTypes__default["default"].arrayOf(PropTypes__default["default"].shape({
    title: PropTypes__default["default"].string.isRequired,
    icon: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].string]).isRequired,
    categories: PropTypes__default["default"].arrayOf(PropTypes__default["default"].oneOf(Object.keys(emojis))).isRequired
  })),
  selectButtonContent: PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].string]),
  toneSelectOpenDelay: PropTypes__default["default"].number,
  menuPosition: PropTypes__default["default"].oneOf(['top', 'bottom'])
};
EmojiSelect.defaultProps = {
  selectButtonContent: '☺',
  selectGroups: defaultEmojiGroups$1,
  toneSelectOpenDelay: 500
};

var escapedFind = emojiToolkit__default["default"].escapeRegExp(emojiToolkit__default["default"].unicodeCharRegex());
var search = new RegExp("<object[^>]*>.*?</object>|<span[^>]*>.*?</span>|<(?:object|embed|svg|img|div|span|p|a)[^>]*>|(" + escapedFind + ")", 'gi');
var emojiStrategy = (function (contentBlock, callback) {
  utils.findWithRegex(search, contentBlock, callback);
});

var EMOJI_REGEX = /(\s|^):[\w]*:?/g;
var emojiSuggestionsStrategy = (function (contentBlock, callback) {
  utils.findWithRegex(EMOJI_REGEX, contentBlock, callback);
});

var unicodeRegex = new RegExp(emojiToolkit__default["default"].regAscii, 'g');
/*
 * Attaches Immutable DraftJS Entities to the Emoji text.
 *
 * This is necessary as emojis consist of 2 characters (unicode). By making them
 * immutable the whole Emoji is removed when hitting backspace.
 */

function attachImmutableEntitiesToEmojis(editorState) {
  var contentState = editorState.getCurrentContent();
  var blocks = contentState.getBlockMap();
  var newContentState = contentState;
  blocks.forEach(function (block) {
    if (block) {
      var plainText = block.getText();

      var addEntityToEmoji = function addEntityToEmoji(start, end) {
        var existingEntityKey = block.getEntityAt(start);

        if (existingEntityKey) {
          // avoid manipulation in case the emoji already has an entity
          var entity = newContentState.getEntity(existingEntityKey);

          if (entity && entity.getType() === 'emoji') {
            return;
          }
        }

        var selection = draftJs.SelectionState.createEmpty(block.getKey()).set('anchorOffset', start).set('focusOffset', end);
        var emojiText = plainText.substring(start, end);
        var contentStateWithEntity = newContentState.createEntity('emoji', 'IMMUTABLE', {
          emojiUnicode: emojiText
        });
        var entityKey = contentStateWithEntity.getLastCreatedEntityKey();
        newContentState = draftJs.Modifier.replaceText(newContentState, selection, emojiText, undefined, entityKey);
      };

      utils.findWithRegex(unicodeRegex, block, addEntityToEmoji);
    }
  });

  if (!newContentState.equals(contentState)) {
    return draftJs.EditorState.push(editorState, newContentState, 'change-block-data');
  }

  return editorState;
}

function getRelativeParent(element) {
  if (!element) {
    return null;
  }

  var position = window.getComputedStyle(element).getPropertyValue('position');

  if (position !== 'static') {
    return element;
  }

  return getRelativeParent(element.parentElement);
}

function positionSuggestions(_ref) {
  var decoratorRect = _ref.decoratorRect,
      popover = _ref.popover,
      state = _ref.state,
      filteredEmojis = _ref.filteredEmojis;
  var relativeParent = getRelativeParent(popover.parentElement);
  var relativeRect;

  if (relativeParent) {
    var relativeParentRect = relativeParent.getBoundingClientRect();
    relativeRect = {
      scrollLeft: relativeParent.scrollLeft,
      scrollTop: relativeParent.scrollTop,
      left: decoratorRect.left - relativeParentRect.left,
      top: decoratorRect.top - relativeParentRect.top
    };
  } else {
    relativeRect = {
      scrollLeft: window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop: window.pageYOffset || document.documentElement.scrollTop,
      left: decoratorRect.left,
      top: decoratorRect.top
    };
  }

  var left = relativeRect.left + relativeRect.scrollLeft;
  var top = relativeRect.top + relativeRect.scrollTop;
  var transform;
  var transition;

  if (state.isActive) {
    if (filteredEmojis.size > 0) {
      transform = 'scale(1)';
      transition = 'all 0.25s cubic-bezier(.3,1.2,.2,1)';
    } else {
      transform = 'scale(0)';
      transition = 'all 0.35s cubic-bezier(.3,1,.2,1)';
    }
  }

  return {
    left: left + "px",
    top: top + "px",
    transform: transform,
    transformOrigin: '1em 0%',
    transition: transition
  };
}

function newEmojiListWithOutPriorityList(priorityList) {
  var list = {};

  for (var key in emojiToolkit__default["default"].emojiList) {
    // eslint-disable-line no-restricted-syntax
    if (priorityList.hasOwnProperty(key)) {
      // eslint-disable-line no-prototype-builtins
      continue; // eslint-disable-line no-continue
    }

    list[key] = [emojiToolkit__default["default"].emojiList[key].uc_base];
  }

  return _extends({}, priorityList, list);
}

var emojiList = {
  setPriorityList: function setPriorityList(newPriorityList) {
    this.list = newEmojiListWithOutPriorityList(newPriorityList);
  },
  list: {}
}; // init emojiList

var priorityList = {
  ':thumbsup:': ['1f44d'],
  ':smile:': ['1f604'],
  ':heart:': ['2764-fe0f', '2764'],
  ':ok_hand:': ['1f44c'],
  ':joy:': ['1f602'],
  ':tada:': ['1f389'],
  ':see_no_evil:': ['1f648'],
  ':raised_hands:': ['1f64c'],
  ':100:': ['1f4af']
};
emojiList.setPriorityList(priorityList);
var emojiList$1 = emojiList;

var emojiSelectPopoverScrollbar = "e17si09n";
var emojiSelectPopoverGroupTitle = "e19xmvdb";
var defaultTheme = {
  emoji: "e1g1wugw",
  emojiSuggestions: "esyutjr",
  emojiSuggestionsEntry: "e1eijkox",
  emojiSuggestionsEntryFocused: "e1adbvmt",
  emojiSuggestionsEntryText: "e13wg9oj",
  emojiSuggestionsEntryIcon: "e1w5jrn9",
  emojiSelect: "e183m4hm",
  emojiSelectButton: "e8k2yoa",
  emojiSelectButtonPressed: "e13wqaj6",
  emojiSelectPopoverScrollbarOuter: "ec6zxdw",
  emojiSelectPopover: "ejr02pv",
  emojiSelectPopoverClosed: "e6amujp",
  emojiSelectPopoverTitle: "e16zneum",
  emojiSelectPopoverGroups: "e1kg9q3n",
  emojiSelectPopoverGroup: "e1m341vm",
  emojiSelectPopoverGroupTitle: emojiSelectPopoverGroupTitle,
  emojiSelectPopoverGroupList: "e13arc1",
  emojiSelectPopoverGroupItem: "e6nwac2",
  emojiSelectPopoverToneSelect: "e3h4qvg",
  emojiSelectPopoverToneSelectList: "e1129lxj",
  emojiSelectPopoverToneSelectItem: "eug7aee",
  emojiSelectPopoverEntry: "eyoq5wq",
  emojiSelectPopoverEntryFocused: "e1eigyu0",
  emojiSelectPopoverEntryIcon: "e11mkpma",
  emojiSelectPopoverNav: "e1cibj9i",
  emojiSelectPopoverNavItem: "e2bpndj",
  emojiSelectPopoverNavEntry: "e1qma4nk",
  emojiSelectPopoverNavEntryActive: "e1q5rpho",
  emojiSelectPopoverScrollbar: emojiSelectPopoverScrollbar,
  emojiSelectPopoverScrollbarThumb: "e1duapnp"
};

function JoyPixelEmojiImage(_ref) {
  var _$exec;

  var emoji = _ref.emoji,
      theme = _ref.theme;
  var imgTag = emojiToolkit.toImage(emoji);
  var path = (_$exec = /src="(.*)"/.exec(imgTag)) == null ? void 0 : _$exec[1];
  return /*#__PURE__*/React__default["default"].createElement("img", {
    src: path,
    className: theme.emojiSelectPopoverEntryIcon,
    title: emoji,
    draggable: false,
    role: "presentation"
  });
}

function NativeEmojiImage(_ref) {
  var unicode = _ref.unicode,
      emoji = _ref.emoji;
  return /*#__PURE__*/React__default["default"].createElement("span", {
    title: emoji
  }, unicode);
}

function NativeEmojiInlineText(_ref) {
  var decoratedText = _ref.decoratedText,
      children = _ref.children;
  return /*#__PURE__*/React__default["default"].createElement("span", {
    title: emojiToolkit.toShort(decoratedText)
  }, children);
}

function JoyPixelEmojiInlineText(_ref) {
  var _$exec;

  var decoratedText = _ref.decoratedText,
      theme = _ref.theme,
      children = _ref.children,
      className = _ref.className;
  var shortName = emojiToolkit.toShort(decoratedText);
  var imgTag = emojiToolkit.shortnameToImage(shortName);
  var path = (_$exec = /src="(.*)"/.exec(imgTag)) == null ? void 0 : _$exec[1];

  if (!path) {
    return /*#__PURE__*/React__default["default"].createElement(NativeEmojiInlineText, {
      decoratedText: decoratedText,
      theme: theme
    }, children);
  }

  var backgroundImage = "url(" + path + ")";
  var combinedClassName = clsx__default["default"](theme.emoji, className);
  return /*#__PURE__*/React__default["default"].createElement("span", {
    className: combinedClassName,
    title: shortName,
    style: {
      backgroundImage: backgroundImage
    }
  }, children);
}

// TODO activate/deactivate different the conversion or search part
var index = (function (config) {
  if (config === void 0) {
    config = {};
  }

  var callbacks = {
    keyBindingFn: undefined,
    handleKeyCommand: undefined,
    handleReturn: undefined,
    onChange: undefined
  };
  var ariaProps = {
    ariaHasPopup: 'false',
    ariaExpanded: false,
    ariaOwneeID: undefined,
    ariaActiveDescendantID: undefined
  };
  var searches = immutable.Map();
  var escapedSearch;
  var clientRectFunctions = immutable.Map();
  var store = {
    getEditorState: undefined,
    setEditorState: undefined,
    getPortalClientRect: function getPortalClientRect(offsetKey) {
      var _clientRectFunctions$;

      return (_clientRectFunctions$ = clientRectFunctions.get(offsetKey)) == null ? void 0 : _clientRectFunctions$();
    },
    getAllSearches: function getAllSearches() {
      return searches;
    },
    isEscaped: function isEscaped(offsetKey) {
      return escapedSearch === offsetKey;
    },
    escapeSearch: function escapeSearch(offsetKey) {
      escapedSearch = offsetKey;
    },
    resetEscapedSearch: function resetEscapedSearch() {
      escapedSearch = undefined;
    },
    register: function register(offsetKey) {
      searches = searches.set(offsetKey, offsetKey);
    },
    updatePortalClientRect: function updatePortalClientRect(offsetKey, func) {
      clientRectFunctions = clientRectFunctions.set(offsetKey, func);
    },
    unregister: function unregister(offsetKey) {
      searches = searches["delete"](offsetKey);
      clientRectFunctions = clientRectFunctions["delete"](offsetKey);
    }
  }; // Styles are overwritten instead of merged as merging causes a lot of confusion.
  //
  // Why? Because when merging a developer needs to know all of the underlying
  // styles which needs a deep dive into the code. Merging also makes it prone to
  // errors when upgrading as basically every styling change would become a major
  // breaking change. 1px of an increased padding can break a whole layout.

  var _config = config,
      _config$theme = _config.theme,
      theme = _config$theme === void 0 ? defaultTheme : _config$theme,
      _config$positionSugge = _config.positionSuggestions,
      positionSuggestions$1 = _config$positionSugge === void 0 ? positionSuggestions : _config$positionSugge,
      priorityList = _config.priorityList,
      selectGroups = _config.selectGroups,
      selectButtonContent = _config.selectButtonContent,
      toneSelectOpenDelay = _config.toneSelectOpenDelay,
      useNativeArt = _config.useNativeArt,
      disableInlineEmojis = _config.disableInlineEmojis,
      _config$emojiImage = _config.emojiImage,
      emojiImage = _config$emojiImage === void 0 ? useNativeArt ? NativeEmojiImage : JoyPixelEmojiImage : _config$emojiImage,
      _config$emojiInlineTe = _config.emojiInlineText,
      emojiInlineText = _config$emojiInlineTe === void 0 ? useNativeArt ? NativeEmojiInlineText : JoyPixelEmojiInlineText : _config$emojiInlineTe; // if priorityList is configured in config then set priorityList

  if (priorityList) {
    emojiList$1.setPriorityList(priorityList);
  }

  var suggestionsProps = {
    ariaProps: ariaProps,
    callbacks: callbacks,
    theme: theme,
    store: store,
    positionSuggestions: positionSuggestions$1,
    shortNames: immutable.List(keys__default["default"](emojiList$1.list)),
    emojiImage: emojiImage
  };
  var selectProps = {
    theme: theme,
    store: store,
    selectGroups: selectGroups,
    selectButtonContent: selectButtonContent,
    toneSelectOpenDelay: toneSelectOpenDelay,
    emojiImage: emojiImage
  };

  var DecoratedEmojiSuggestions = function DecoratedEmojiSuggestions(props) {
    return /*#__PURE__*/React__default["default"].createElement(EmojiSuggestions, _extends({}, props, suggestionsProps));
  };

  var DecoratedEmojiSelect = function DecoratedEmojiSelect(props) {
    return /*#__PURE__*/React__default["default"].createElement(EmojiSelect, _extends({}, props, selectProps));
  };

  var DecoratedEmoji = function DecoratedEmoji(props) {
    return /*#__PURE__*/React__default["default"].createElement(Emoji, _extends({}, props, {
      theme: theme,
      emojiInlineText: emojiInlineText
    }));
  };

  var DecoratedEmojiSuggestionsPortal = function DecoratedEmojiSuggestionsPortal(props) {
    return /*#__PURE__*/React__default["default"].createElement(EmojiSuggestionsPortal, _extends({}, props, {
      store: store
    }));
  };

  return {
    EmojiSuggestions: DecoratedEmojiSuggestions,
    EmojiSelect: DecoratedEmojiSelect,
    decorators: disableInlineEmojis ? [] : [{
      strategy: emojiStrategy,
      component: DecoratedEmoji
    }, {
      strategy: emojiSuggestionsStrategy,
      component: DecoratedEmojiSuggestionsPortal
    }],
    getAccessibilityProps: function getAccessibilityProps() {
      return {
        role: 'combobox',
        ariaAutoComplete: 'list',
        ariaHasPopup: ariaProps.ariaHasPopup,
        ariaExpanded: ariaProps.ariaExpanded,
        ariaActiveDescendantID: ariaProps.ariaActiveDescendantID,
        ariaOwneeID: ariaProps.ariaOwneeID
      };
    },
    initialize: function initialize(_ref) {
      var getEditorState = _ref.getEditorState,
          setEditorState = _ref.setEditorState;
      store.getEditorState = getEditorState;
      store.setEditorState = setEditorState;
    },
    keyBindingFn: function keyBindingFn(keyboardEvent) {
      return callbacks.keyBindingFn && callbacks.keyBindingFn(keyboardEvent);
    },
    handleReturn: function handleReturn(keyboardEvent) {
      return callbacks.handleReturn && callbacks.handleReturn(keyboardEvent);
    },
    onChange: function onChange(editorState) {
      var newEditorState = attachImmutableEntitiesToEmojis(editorState);

      if (!newEditorState.getCurrentContent().equals(editorState.getCurrentContent())) {
        var selection = editorState.getSelection(); // Forcing the current selection ensures that it will be at it's right place.
        // This solves the issue where inserting an Emoji on OSX with Apple's Emoji
        // selector led to the right selection the data, but wrong position in
        // the contenteditable.

        newEditorState = draftJs.EditorState.forceSelection(newEditorState, selection);
      }

      if (callbacks.onChange) {
        return callbacks.onChange(newEditorState);
      }

      return newEditorState;
    }
  };
});

exports["default"] = index;
exports.defaultTheme = defaultTheme;
