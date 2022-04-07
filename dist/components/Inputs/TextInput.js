"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const TextInput = _ref => {
  let {
    name = 'name',
    placeholder = 'Enter your name'
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: name,
    placeholder: placeholder
  });
};

var _default = TextInput;
exports.default = _default;