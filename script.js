class Header extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h1", null, "Broadway Netflix"), /*#__PURE__*/
      React.createElement("p", null, "Watch all of your favorite musicals online!")));


  }}

class Buttons extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("h2", null, "Featured Musicals"), /*#__PURE__*/
      React.createElement("button", null, /*#__PURE__*/React.createElement("a", { href: "DEH.html" }, "Dear Evan Hansen")), /*#__PURE__*/
      React.createElement("button", null, /*#__PURE__*/React.createElement("a", { href: "Wicked.html" }, "Wicked")), /*#__PURE__*/
      React.createElement("button", null, /*#__PURE__*/React.createElement("a", { href: "MeanGirls.html" }, "Mean Girls")), /*#__PURE__*/
      React.createElement("button", null, /*#__PURE__*/React.createElement("a", { href: "Beetlejuice.html" }, "Beetlejuice")), /*#__PURE__*/
      React.createElement("button", null, /*#__PURE__*/React.createElement("a", { href: "Hamilton.html" }, "Hamilton"))));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Header, null), document.getElementById('header'));
ReactDOM.render( /*#__PURE__*/React.createElement(Buttons, null), document.getElementById('buttons'));