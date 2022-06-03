import { Fragment } from 'react';

const PageLayout = ({ child }) =>
    <Fragment>
        <header className="container my-5">
            <div className="row text-center">
                <h1>D3 Sunburst Cart</h1>
                <p>
                    D3 Sunburst chart is a ring chart or radial treemap for displaying
                    a hierarchical dataset with percentage values in the leaf nodes.
                </p>
            </div>
        </header>
        <main className="container my-5">
        </main>
        <footer className="container my-5">
            <div className="row text-center text-muted">
                <small className="mt-5">©{new Date().getFullYear()} - v{require('./../../package.json')?.version ?? 0.0}</small>
            </div>
        </footer>
    </Fragment>

export default PageLayout;