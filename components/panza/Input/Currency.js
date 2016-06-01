import React, {PropTypes} from 'react'
var {
	View,
	Text,
	TextInput,
	StyleSheet
} = require('react-native')
var {
	formatCurrency,
	getMaxLength
} = require('../../util/ensureCurrency')
var variables = require('../../styles')
var validator = require('validator')

const styles = StyleSheet.create({
	input: {
    height: variables.rowActionHeight,
    flex: 1,
    fontSize: variables.actionFontSize,
		color: 'black',
    padding: 0,
    paddingLeft: 15,
    paddingRight: 15
  },
	invalid: {
		color: 'red'
	}
})

class Currency extends React.Component {

	static propTypes = {
		onChangeText: PropTypes.func.isRequired,
		value: PropTypes.string.isRequired,
		maxLength: PropTypes.number.isRequired,
		editable: PropTypes.bool
	}

	static defaultProps = {
		maxLength: 10,
		isValid: true
	}

  focus() {
    this.refs.input.focus()
  }

	render() {
		const {
			style,
			maxLength,
			onChangeText,
			value,
			editable,
			...other
		} = this.props

		return (
			<TextInput
        ref='input'
				style={[styles.input, style]}
				value={value}
				editable={editable}
				underlineColorAndroid="transparent"
				maxLength={this.props.maxLength}
        keyboardType='numeric'
				onChangeText={(text) => {
					if (!text) {
						return onChangeText(text)
					}

					if (validator.isFloat(text)) {
						if ((text.split('.')[1] || []).length > 2) {
							onChangeText(value)
							// onValid(false)
						} else {
							onChangeText(text)
							// onValid(true)
						}
					} else {
						onChangeText(value)
						// onValid(false)
					}
				}}
				{...other}
			/>
		)
	}

}



module.exports = Currency
