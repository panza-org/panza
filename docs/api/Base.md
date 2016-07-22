## Base 
 
A general purpose component that converts our props into styles
defined by the user. Heavily inspired by (and somewhat directly copied)
from rebass.
 ### Props
Name | Type | Default Value | Description
--- | --- | --- | --- 
Component | any  |   | Custom Component
baseStyle | any  |   | The base style will be supplanted by style props, or regular style properties.
style | any  |   | Regular style attribute
underlayColor | string  |   | Underlay color. Use 'darken' to automatically darken the backgroundColor.
m | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin based on the configured scale
mt | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin top based on the configured scale
mr | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin right based on the configured scale
mb | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin bottom based on the configured scale
ml | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin left based on the configured scale
mx | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin x-axis based on the configured scale
my | 0&#124;1&#124;2&#124;3&#124;4 |   | Margin y-asix based on the configured scale
p | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding based on the configured scale
pt | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding top based on the configured scale
pr | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding right based on the configured scale
pb | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding bottom based on the configured scale
pl | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding left based on the configured scale
px | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding x-axis based on the configured scale
py | 0&#124;1&#124;2&#124;3&#124;4 |   | Padding y-axis based on the configured scale
backgroundColor | string  |   | Background color.
rounded | bool&#124;number |   | Border radius
borderColor | string  |   | Border color
flex | number  |   | Flex property
wrap | bool  |   | Flex-wrap property
column | bool  |   | Set the flex-direction to column
row | bool  |   | Set the flex-direction to row
align | string  |   | Align-items property
justify | string  |   | Justify-content property
height | number  |   | The height of the element
width | number  |   | The width of the element
 
