const React = require('react');

class Layout extends React.Component {
    render(){
        return (
            <html>
                <head>
                    <meta charSet="utf-8"/>
                    <link rel="stylesheet" href={this.props.stylesheet}/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                <h1>{this.props.title}</h1>
                <nav>
                    <ul>
                        <li className="navigation"><a href={'/'}>Home</a></li>
                        <li className="navigation"><a href={'/projects'}>Projects</a></li>
                        <li className="navigation"><a href={'/projects/about'}>About</a></li>
                        <li className="navigation"><a href={'/projects/contact'}>Contact</a></li>
                    </ul>
                </nav><br/>
                {this.props.children}
                <script src={this.props.js} ></script>
                </body>
            </html>
        )
    }
}

                
module.exports = Layout;