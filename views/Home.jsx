const React = require('react');
const Layout = require('./Layouts/Layout.jsx');

class Home extends React.Component {
    render(){
        return(
            <Layout
            title="I am Thea"
            stylesheet="/home.css"
            js="/home.js">
                <nav>
                    <a href={'/projects'}>Home</a>
                    <a href={''}>About</a>
                    <a href={''}>Contact</a>
                </nav>

            </Layout>
        )
    }
}