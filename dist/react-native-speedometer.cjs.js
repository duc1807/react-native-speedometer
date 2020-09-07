'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactNative = require('react-native');
var PropTypes = _interopDefault(require('prop-types'));
var calculateDegreeFromLabels = _interopDefault(require('./utils/calculate-degree-from-labels.js'));
var calculateLabelFromValue = _interopDefault(require('./utils/calculate-label-from-value.js'));
var limitValue = _interopDefault(require('./utils/limit-value.js'));
var validateSize = _interopDefault(require('./utils/validate-size.js'));
var style = require('./style/index.js');
var style__default = _interopDefault(style);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function calculateDegreeFromLabels(degree, labels) {
  const perLevelDegree = degree / labels.length;
  return perLevelDegree;
}

function calculateLabelFromValue(value, labels, minValue, maxValue) {
  const currentValue = (value - minValue) / (maxValue - minValue);
  const currentIndex = Math.round((labels.length - 1) * currentValue);
  const label = labels[currentIndex];
  return label;
}

/* eslint radix: ["error", "as-needed"] */

/* eslint-disable no-restricted-globals */
function limitValue(value, minValue, maxValue, allowedDecimals) {
  let currentValue = 0;

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
  let currentSize = original;

  if (!isNaN(current)) {
    currentSize = parseInt(current);
  }

  return currentSize;
}

/* eslint import/no-unresolved: [2, { ignore: ['react-native'] }] */

const _Dimensions$get = reactNative.Dimensions.get('window');


const width = _Dimensions$get.width;
const style = reactNative.StyleSheet.create({
  wrapper: {
    marginVertical: 5,
    alignSelf: 'center',
  },
  // Circular Container
  circleWrapper: {
    overflow: 'hidden',
  },
  outerCircle: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    overflow: 'hidden',
    borderColor: '#ffffff',
    backgroundColor: '#e6e6e6',
  },
  halfCircle: {
    position: 'absolute',
    top: 0,
    left: 0,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },
  imageWrapper: {
    position: 'absolute',
    left: 0,
    zIndex: 10,
  },
  image: {
    resizeMode: 'stretch',
    height: width - 20,
    width: width - 20,
  },
  innerCircle: {
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: width * 0.6,
    height: width / 2 * 0.6,
    borderTopLeftRadius: width / 2 - 10,
    borderTopRightRadius: width / 2 - 10,
  },
  labelWrapper: {
    marginVertical: 5,
    alignItems: 'center',
  },
  label: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  labelNote: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const Speedometer =
/* #__PURE__ */
(function (_Component) {
  _inheritsLoose(Speedometer, _Component);

  function Speedometer(props) {
    let _this;

    _this = _Component.call(this, props) || this;
    _this.speedometerValue = new reactNative.Animated.Value(props.defaultValue);
    return _this;
  }

  const _proto = Speedometer.prototype;

  _proto.render = function render() {
    const _this$props = this.props;


    const value = _this$props.value;


    const size = _this$props.size;


    const minValue = _this$props.minValue;


    const maxValue = _this$props.maxValue;


    const easeDuration = _this$props.easeDuration;


    const allowedDecimals = _this$props.allowedDecimals;


    const labels = _this$props.labels;


    const needleImage = _this$props.needleImage;


    const wrapperStyle = _this$props.wrapperStyle;


    const outerCircleStyle = _this$props.outerCircleStyle;


    const halfCircleStyle = _this$props.halfCircleStyle;


    const imageWrapperStyle = _this$props.imageWrapperStyle;


    const imageStyle = _this$props.imageStyle;


    const innerCircleStyle = _this$props.innerCircleStyle;


    const labelWrapperStyle = _this$props.labelWrapperStyle;


    const labelStyle = _this$props.labelStyle;


    const labelNoteStyle = _this$props.labelNoteStyle;


    const useNativeDriver = _this$props.useNativeDriver;
    const degree = 180;
    const perLevelDegree = calculateDegreeFromLabels(degree, labels);
    const label = calculateLabelFromValue(limitValue(value, minValue, maxValue, allowedDecimals), labels, minValue, maxValue);
    reactNative.Animated.timing(this.speedometerValue, {
      toValue: limitValue(value, minValue, maxValue, allowedDecimals),
      duration: easeDuration,
      easing: reactNative.Easing.linear,
      useNativeDriver,
    }).start();
    const rotate = this.speedometerValue.interpolate({
      inputRange: [minValue, maxValue],
      outputRange: ['-90deg', '90deg'],
    });
    const currentSize = validateSize(size, width - 20);
    return React__default.createElement(reactNative.View, {
      style: [style.wrapper, {
        width: currentSize,
        height: currentSize / 2,
      }, wrapperStyle],
    }, React__default.createElement(reactNative.View, {
      style: [style.outerCircle, {
        width: currentSize,
        height: currentSize / 2,
        borderTopLeftRadius: currentSize / 2,
        borderTopRightRadius: currentSize / 2,
      }, outerCircleStyle],
    }, labels.map((level, index) => {
      const circleDegree = 90 + index * perLevelDegree;
      return React__default.createElement(reactNative.View, {
        key: level.name,
        style: [style.halfCircle, {
          backgroundColor: level.activeBarColor,
          width: currentSize / 2,
          height: currentSize,
          borderRadius: currentSize / 2,
          transform: [{
            translateX: currentSize / 4,
          }, {
            rotate: `${circleDegree}deg`,
          }, {
            translateX: currentSize / 4 * -1,
          }],
        }, halfCircleStyle],
      });
    }), React__default.createElement(reactNative.Animated.View, {
      style: [style.imageWrapper, {
        top: -(currentSize / 15),
        transform: [{
          rotate,
        }],
      }, imageWrapperStyle],
    }, React__default.createElement(reactNative.Image, {
      style: [style.image, {
        width: currentSize,
        height: currentSize,
      }, imageStyle],
      source: needleImage,
    })), React__default.createElement(reactNative.View, {
      style: [style.innerCircle, {
        width: currentSize * 0.6,
        height: currentSize / 2 * 0.6,
        borderTopLeftRadius: currentSize / 2,
        borderTopRightRadius: currentSize / 2,
      }, innerCircleStyle],
    })), React__default.createElement(reactNative.View, {
      style: [style.labelWrapper, labelWrapperStyle],
    }, React__default.createElement(reactNative.Text, {
      style: [style.label, labelStyle],
    }, limitValue(value, minValue, maxValue, allowedDecimals)), React__default.createElement(reactNative.Text, {
      style: [style.labelNote, {
        color: label.labelColor,
      }, labelNoteStyle],
    }, label.name)));
  };

  return Speedometer;
}(React.Component));

Speedometer.defaultProps = {
  defaultValue: 50,
  minValue: 0,
  maxValue: 100,
  easeDuration: 500,
  allowedDecimals: 0,
  labels: [{
    name: 'Pathetically weak',
    labelColor: '#ff2900',
    activeBarColor: '#ff2900',
  }, {
    name: 'Very weak',
    labelColor: '#ff5400',
    activeBarColor: '#ff5400',
  }, {
    name: 'So-so',
    labelColor: '#f4ab44',
    activeBarColor: '#f4ab44',
  }, {
    name: 'Fair',
    labelColor: '#f2cf1f',
    activeBarColor: '#f2cf1f',
  }, {
    name: 'Strong',
    labelColor: '#14eb6e',
    activeBarColor: '#14eb6e',
  }, {
    name: 'Unbelievably strong',
    labelColor: '#00ff6b',
    activeBarColor: '#00ff6b',
  }],
  needleImage: require('../images/speedometer-needle.png'),
  wrapperStyle: {},
  outerCircleStyle: {},
  halfCircleStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  innerCircleStyle: {},
  labelWrapperStyle: {},
  labelStyle: {},
  labelNoteStyle: {},
  useNativeDriver: true,
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
  labelNoteStyle: PropTypes.object,
  useNativeDriver: PropTypes.bool,
};

exports.default = Speedometer;
// # sourceMappingURL=react-native-speedometer.cjs.js.map
