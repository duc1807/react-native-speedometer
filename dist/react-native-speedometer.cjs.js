'use strict';


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');
var PropTypes = _interopDefault(require('prop-types'));

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function calculateDegreeFromLabels(degree, labels) {
  var perLevelDegree = degree / labels.length;
  return perLevelDegree;
}

function calculateLabelFromValue(value, labels, minValue, maxValue) {
  var currentValue = value / (maxValue - minValue);
  var currentIndex = Math.round((labels.length - 1) * currentValue);
  var label = labels[currentIndex];
  return label;
}

/* eslint radix: ["error", "as-needed"] */

/* eslint-disable no-restricted-globals */
function limitValue(value, minValue, maxValue, allowedDecimals) {
  var currentValue = 0;

  if (!isNaN(value)) {
    if (!isNaN(allowedDecimals) && allowedDecimals > 0) {
      currentValue = parseFloat(value).toFixed(allowedDecimals < 4 ? parseInt(allowedDecimals) : 4);
    } else {
      currentValue = parseInt(value);
    }
  }

  return Math.min(Math.max(currentValue, minValue), maxValue);
}

/* eslint radix: ["error", "as-needed"] */

/* eslint-disable no-restricted-globals */
function validateSize(current, original) {
  var currentSize = original;

  if (!isNaN(current)) {
    currentSize = parseInt(current);
  }

  return currentSize;
}

/* eslint import/no-unresolved: [2, { ignore: ['react-native'] }] */

var _Dimensions$get = reactNative.Dimensions.get('window'),
    width = _Dimensions$get.width;
var style = reactNative.StyleSheet.create({
  wrapper: {
    marginVertical: 5,
    alignSelf: 'center'
  },
  // Circular Container
  circleWrapper: {
    overflow: 'hidden'
  },
  outerCircle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderColor: '#ffffff',
    backgroundColor: 'white'        // Background
  },
  halfCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  imageWrapper: {
    position: 'absolute',
    left: 0,
    zIndex: 2
  },
  image: {
    resizeMode: 'stretch',
    height: width - 20,
    width: width - 20
  },
  innerCircle: {                    // o mau trang halfcircle
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
    width: width * 0.6,
    height: width / 2 * 0.6,
    borderTopLeftRadius: width / 2 - 10,
    borderTopRightRadius: width / 2 - 10
  },
  labelWrapper: {               //Chu va trang thai
    marginVertical: 5,
    alignItems: 'center'
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  labelNote: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

var Speedometer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Speedometer, _Component);

  function Speedometer(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.speedometerValue = new reactNative.Animated.Value(props.defaultValue);
    return _this;
  }

  var _proto = Speedometer.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        value = _this$props.value,
        size = _this$props.size,
        minValue = _this$props.minValue,
        maxValue = _this$props.maxValue,
        easeDuration = _this$props.easeDuration,
        allowedDecimals = _this$props.allowedDecimals,
        labels = _this$props.labels,
        needleImage = _this$props.needleImage,
        wrapperStyle = _this$props.wrapperStyle,
        outerCircleStyle = _this$props.outerCircleStyle,
        halfCircleStyle = _this$props.halfCircleStyle,
        imageWrapperStyle = _this$props.imageWrapperStyle,
        imageStyle = _this$props.imageStyle,
        innerCircleStyle = _this$props.innerCircleStyle,
        labelWrapperStyle = _this$props.labelWrapperStyle,
        labelStyle = _this$props.labelStyle,
        labelNoteStyle = _this$props.labelNoteStyle;
    var degree = 180;
    var perLevelDegree = calculateDegreeFromLabels(degree, labels);
    var label = calculateLabelFromValue(limitValue(value, minValue, maxValue, allowedDecimals), labels, minValue, maxValue);
    reactNative.Animated.timing(this.speedometerValue, {
      toValue: limitValue(value, minValue, maxValue, allowedDecimals),
      duration: easeDuration,
      easing: reactNative.Easing.linear
    }).start();
    var rotate = this.speedometerValue.interpolate({
      inputRange: [minValue, maxValue],
      outputRange: ['-90deg', '90deg']
    });
    var currentSize = validateSize(size, width - 20);
    return React__default.createElement(reactNative.View, {
      style: [style.wrapper, {
        width: currentSize,
        height: currentSize / 2
      }, wrapperStyle]
    }, React__default.createElement(reactNative.View, {       //Background do
      style: [style.outerCircle, {
        width: currentSize,
        height: currentSize / 2,
        borderTopLeftRadius: currentSize / 2,
        borderTopRightRadius: currentSize / 2
      }, outerCircleStyle]
    }, React__default.createElement(reactNative.Animated.View, {
      style: [style.imageWrapper, {
        top: -(currentSize / 80),               /// CHinh do cao cua needle
        transform: [{
          rotate: rotate
        }]
      }, imageWrapperStyle]
    }, React__default.createElement(reactNative.Image, {
      style: [style.image, {
        width: currentSize * 0.97,
        height: currentSize
      }, imageStyle],
      source: needleImage
    })), React__default.createElement(reactNative.View, {
      style: [style.innerCircle, {
        width: currentSize * 0.6,
        height: currentSize / 2 * 0.6,
        borderTopLeftRadius: currentSize / 2,
        borderTopRightRadius: currentSize / 2
      }, innerCircleStyle]
    })));
  };

  return Speedometer;
}(React.Component);

Speedometer.defaultProps = {
  defaultValue: 50,
  minValue: 0,
  maxValue: 100,
  easeDuration: 500,
  allowedDecimals: 0,
  labels: [{
    name: 'Pathetically weak',
    labelColor: '#ff2900',
    activeBarColor: '#ff2900'
  }, {
    name: 'Very weak',
    labelColor: '#ff5400',
    activeBarColor: '#ff5400'
  }, {
    name: 'So-so',
    labelColor: '#f4ab44',
    activeBarColor: '#f4ab44'
  }, {
    name: 'Fair',
    labelColor: '#f2cf1f',
    activeBarColor: '#f2cf1f'
  }, {
    name: 'Strong',
    labelColor: '#14eb6e',
    activeBarColor: '#14eb6e'
  }, {
    name: 'Unbelievably strong',
    labelColor: '#00ff6b',
    activeBarColor: '#00ff6b'
  }],
  needleImage: require('./images/needle2.png'),  /// LINK ANH
  wrapperStyle: {},
  outerCircleStyle: {},
  halfCircleStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  innerCircleStyle: {},
  labelWrapperStyle: {},
  labelStyle: {},
  labelNoteStyle: {}
};
Speedometer.propTypes = {
  value: PropTypes.number.isRequired,
  defaultValue: PropTypes.number,
  size: PropTypes.number,
  minValue: PropTypes.number,
  maxValue: PropTypes.number,
  easeDuration: PropTypes.number,
  allowedDecimals: PropTypes.number,
  labels: PropTypes.array,
  needleImage: PropTypes.any,
  wrapperStyle: PropTypes.object,
  outerCircleStyle: PropTypes.object,
  halfCircleStyle: PropTypes.object,
  imageWrapperStyle: PropTypes.object,
  imageStyle: PropTypes.object,
  innerCircleStyle: PropTypes.object,
  labelWrapperStyle: PropTypes.object,
  labelStyle: PropTypes.object,
  labelNoteStyle: PropTypes.object
};

exports.default = Speedometer;
//# sourceMappingURL=react-native-speedometer.cjs.js.map
