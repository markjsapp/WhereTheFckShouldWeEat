const React = require("react");

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
<script 
    type="text/javascript" 
    src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" 
    data-name="bmc-button" 
    data-slug="markjsapp" 
    data-color="#000000" 
    data-emoji="🍕" 
    data-font="Cookie" 
    data-text="Donate" 
    data-outline-color="#ffffff" 
    data-font-color="#ffffff" 
    data-coffee-color="#FFDD00" >
</script>,
  ]);
};