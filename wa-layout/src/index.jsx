import Layout from "./components/Layout"
import "./index.less"

const Index = () => {
	return (
        <Layout>
			<h1>这里放置路由</h1>
		</Layout>
	);
};

ReactDOM.render(<Index/>, document.querySelector('#root'))
