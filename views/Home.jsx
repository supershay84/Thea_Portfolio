const React = require('react');
const Layout = require('./Layout.jsx');

class Home extends React.Component {
    render(){
        return(
            <Layout
            title="I am Thea"
            stylesheet="/home.css"
            js="/app.js">
            </Layout>
        )
    }
}

module.exports = Home