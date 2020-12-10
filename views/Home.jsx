const React = require('react');
const Layout = require('./Layout.jsx');

class Home extends React.Component {
    render(){
        return(
            <Layout
            title=""
            stylesheet="/Home.css"
            js="/app.js">
                <body>
                <h1>i am Thea</h1>
                </body>
               
            </Layout>
        )
    }
}

module.exports = Home