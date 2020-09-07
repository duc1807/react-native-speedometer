import React, { Component } from 'react';
<<<<<<< HEAD
import { Animated, Easing, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import calculateDegreeFromLabels from './utils/calculate-degree-from-labels.js';
import calculateLabelFromValue from './utils/calculate-label-from-value.js';
import limitValue from './utils/limit-value.js';
import validateSize from './utils/validate-size.js';
import style, { width } from './style/index.js';
=======
import {
  Dimensions, StyleSheet, Animated, Easing, View, Image, Text,
} from 'react-native';
import PropTypes from 'prop-types';
>>>>>>> de490f419fd8a90025ff4818e25910b4189d56f4

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

<<<<<<< HEAD
var Speedometer =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Speedometer, _Component);

  function Speedometer(props) {
    var _this;
=======
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

const _Dimensions$get = Dimensions.get('window');


const width = _Dimensions$get.width;
const style = StyleSheet.create({
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
>>>>>>> de490f419fd8a90025ff4818e25910b4189d56f4

    _this = _Component.call(this, props) || this;
    _this.speedometerValue = new Animated.Value(props.defaultValue);
    return _this;
  }

<<<<<<< HEAD
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
        labelNoteStyle = _this$props.labelNoteStyle,
        useNativeDriver = _this$props.useNativeDriver;
    var degree = 180;
    var perLevelDegree = calculateDegreeFromLabels(degree, labels);
    var label = calculateLabelFromValue(limitValue(value, minValue, maxValue, allowedDecimals), labels, minValue, maxValue);
=======
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
>>>>>>> de490f419fd8a90025ff4818e25910b4189d56f4
    Animated.timing(this.speedometerValue, {
      toValue: limitValue(value, minValue, maxValue, allowedDecimals),
      duration: easeDuration,
      easing: Easing.linear,
<<<<<<< HEAD
      useNativeDriver: useNativeDriver
    }).start();
    var rotate = this.speedometerValue.interpolate({
      inputRange: [minValue, maxValue],
      outputRange: ['-90deg', '90deg']
    });
    var currentSize = validateSize(size, width - 20);
    return React.createElement(View, {
      style: [style.wrapper, {
        width: currentSize,
        height: currentSize / 2
      }, wrapperStyle]
=======
      useNativeDriver,
    }).start();
    const rotate = this.speedometerValue.interpolate({
      inputRange: [minValue, maxValue],
      outputRange: ['-90deg', '90deg'],
    });
    const currentSize = validateSize(size, width - 20);
    return React.createElement(View, {
      style: [style.wrapper, {
        width: currentSize,
        height: currentSize / 2,
      }, wrapperStyle],
>>>>>>> de490f419fd8a90025ff4818e25910b4189d56f4
    }, React.createElement(View, {
      style: [style.outerCircle, {
        width: currentSize,
        height: currentSize / 2,
        borderTopLeftRadius: currentSize / 2,
<<<<<<< HEAD
        borderTopRightRadius: currentSize / 2
      }, outerCircleStyle]
    }, labels.map(function (level, index) {
      var circleDegree = 90 + index * perLevelDegree;
=======
        borderTopRightRadius: currentSize / 2,
      }, outerCircleStyle],
    }, labels.map((level, index) => {
      const circleDegree = 90 + index * perLevelDegree;
>>>>>>> de490f419fd8a90025ff4818e25910b4189d56f4
      return React.createElement(View, {
        key: level.name,
        style: [style.halfCircle, {
          backgroundColor: level.activeBarColor,
          width: currentSize / 2,
          height: currentSize,
          borderRadius: currentSize / 2,
          transform: [{
<<<<<<< HEAD
            translateX: currentSize / 4
          }, {
            rotate: circleDegree + "deg"
          }, {
            translateX: currentSize / 4 * -1
          }]
        }, halfCircleStyle]
=======
            translateX: currentSize / 4,
          }, {
            rotate: `${circleDegree}deg`,
          }, {
            translateX: currentSize / 4 * -1,
          }],
        }, halfCircleStyle],
>>>>>>> de490f419fd8a90025ff4818e25910b4189d56f4
      });
    }), React.createElement(Animated.View, {
      style: [style.imageWrapper, {
        top: -(currentSize / 15),
        transform: [{
<<<<<<< HEAD
          rotate: rotate
        }]
      }, imageWrapperStyle]
    }, React.createElement(Image, {
      style: [style.image, {
        width: currentSize,
        height: currentSize
      }, imageStyle],
      source: needleImage
=======
          rotate,
        }],
      }, imageWrapperStyle],
    }, React.createElement(Image, {
      style: [style.image, {
        width: currentSize,
        height: currentSize,
      }, imageStyle],
      source: needleImage,
>>>>>>> de490f419fd8a90025ff4818e25910b4189d56f4
    })), React.createElement(View, {
      style: [style.innerCircle, {
        width: currentSize * 0.6,
        height: currentSize / 2 * 0.6,
        borderTopLeftRadius: currentSize / 2,
<<<<<<< HEAD
        borderTopRightRadius: currentSize / 2
      }, innerCircleStyle]
    })), React.createElement(View, {
      style: [style.labelWrapper, labelWrapperStyle]
    }, React.createElement(Text, {
      style: [style.label, labelStyle]
    }, limitValue(value, minValue, maxValue, allowedDecimals)), React.createElement(Text, {
      style: [style.labelNote, {
        color: label.labelColor
      }, labelNoteStyle]
=======
        borderTopRightRadius: currentSize / 2,
      }, innerCircleStyle],
    })), React.createElement(View, {
      style: [style.labelWrapper, labelWrapperStyle],
    }, React.createElement(Text, {
      style: [style.label, labelStyle],
    }, limitValue(value, minValue, maxValue, allowedDecimals)), React.createElement(Text, {
      style: [style.labelNote, {
        color: label.labelColor,
      }, labelNoteStyle],
>>>>>>> de490f419fd8a90025ff4818e25910b4189d56f4
    }, label.name)));
  };

  return Speedometer;
<<<<<<< HEAD
}(Component);
=======
}(Component));
>>>>>>> de490f419fd8a90025ff4818e25910b4189d56f4

Speedometer.defaultProps = {
  defaultValue: 50,
  minValue: 0,
  maxValue: 100,
  easeDuration: 500,
  allowedDecimals: 0,
  labels: [{
    name: 'Pathetically weak',
    labelColor: '#ff2900',
<<<<<<< HEAD
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
  needleImage: require('../images/needle2.png'),
=======
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
>>>>>>> de490f419fd8a90025ff4818e25910b4189d56f4
  wrapperStyle: {},
  outerCircleStyle: {},
  halfCircleStyle: {},
  imageWrapperStyle: {},
  imageStyle: {},
  innerCircleStyle: {},
  labelWrapperStyle: {},
  labelStyle: {},
  labelNoteStyle: {},
<<<<<<< HEAD
  useNativeDriver: true
=======
  useNativeDriver: true,
>>>>>>> de490f419fd8a90025ff4818e25910b4189d56f4
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
<<<<<<< HEAD
  useNativeDriver: PropTypes.bool
};

export default Speedometer;
//# sourceMappingURL=react-native-speedometer.esm.js.map
=======
  useNativeDriver: PropTypes.bool,
};

export default Speedometer;
// # sourceMappingURL=react-native-speedometer.esm.js.map
>>>>>>> de490f419fd8a90025ff4818e25910b4189d56f4
