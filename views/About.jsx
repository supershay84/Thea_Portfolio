const React = require('react');
const Layout = require('./Layout.jsx');

class About extends React.Component {
    render(){
        return(
            <Layout
            title="I am Thea"
            stylesheet="/about.css"
            js="/app.js">
          
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur ad numquam sapiente adipisci perferendis architecto corporis blanditiis, quae eligendi error nesciunt molestiae veniam, reiciendis explicabo, soluta nemo a facere quibusdam?</p>
            </Layout>
        )
    }
}

module.exports = About