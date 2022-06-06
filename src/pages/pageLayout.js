import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";

export default function PageLayout() {
    const [context, setContext] = React.useState(null);

    return <Fragment>
        <header className="container my-5">
            <div className="row text-center">
                <h1>Online Sunburst Chart</h1>
                <p className="col-8 offset-2">
                    {require('./../../package.json')?.description ?? "Online Sunburst Chart"}
                </p>
            </div>
            <a className="github-fork-ribbon" href="https://github.com/amastaneh/online-sunburst-chart" data-ribbon="Fork me on GitHub" title="Fork me on GitHub" alt="Fork Online Sunburst Chart on GitHub">Fork me on GitHub</a>
        </header>
        <Outlet context={[context, setContext]} />
        <footer className="container my-5">
            <div className="row text-center text-muted">
                <small className="mt-5">©{new Date().getFullYear()} - v{require('./../../package.json')?.version ?? 0.0}</small>
            </div>
        </footer>
    </Fragment>
}

