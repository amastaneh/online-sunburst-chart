
const PageMain = () =>
    <section className="row mt-4">
        <div className="col-4">
            <div className="card">
                <div className="card-header">
                    <h5 className="pt-2">Configuration</h5>
                </div>
                <div className="card-body">
                    <div className="form-group mt-3">
                        <label htmlFor="input-json">Json Data</label>
                        <textarea type="textarea" rows="10" className="form-control" id="input-json" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="input-radius">Radius</label>
                        <input type="range" defaultValue="15" min="10" max="20" className="form-range" id="input-radius" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="input-padding">Padding</label>
                        <input type="range" defaultValue="15" min="10" max="20" className="form-range" id="input-padding" />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="input-padding-outline">Padding Outline</label>
                        <input type="range" defaultValue="15" min="10" max="20" className="form-range" id="input-padding-outline" />
                    </div>
                </div>
            </div>
        </div>
        <div className="col-8">
            <div className="card">
                <div className="card-header">
                    <h5 className="pt-2">Chart</h5>
                </div>
                <div className="card-body">
                    <div className="chart-container">
                        <div className="chart-wrapper">
                            <div className="chart-canvas" id="chart-canvas"></div>
                            <div id="svg"></div>
                            <div id="chart"></div>
                            <div id="size"></div>
                            <div id="count"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



export default PageMain