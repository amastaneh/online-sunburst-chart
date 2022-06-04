import React from "react";
import D3SunburstChart from './d3SunburstChart';
import sample from "./../data/sample.json";

const PageMain = () => {
    const [config, setConfig] = React.useState({
        json: JSON.stringify(sample),
        width: 900,
        height: 300,
        marginTop: 30,
        marginRight: 30,
        marginBottom: 30,
        marginLeft: 60,
    })

    const handleChange = (event) => {
        const { id, value } = event.target;
        setConfig({ ...config, [id]: value });
    };

    return <section className="row mt-4">
        <div className="col-4">
            <div className="card">
                <div className="card-header">
                    <h5 className="pt-2">Configuration</h5>
                </div>
                <div className="card-body">
                    <div className="form-group mt-3">
                        <label htmlFor="input-json">Json Data</label>
                        <textarea type="textarea" rows="10" className="form-control" id="json" defaultValue={config.json} onChange={handleChange} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="input-radius">Width</label>
                        <input type="range" min="300" max="1800" className="form-range" id="width" defaultValue={config.width} onChange={handleChange} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="input-radius">Height</label>
                        <input type="range" min="200" max="900" className="form-range" id="height" defaultValue={config.height} onChange={handleChange} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="input-radius">Margin Top</label>
                        <input type="range" min="10" max="100" className="form-range" id="marginTop" defaultValue={config.marginTop} onChange={handleChange} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="input-radius">Margin Right</label>
                        <input type="range" min="10" max="100" className="form-range" id="marginRight" defaultValue={config.marginRight} onChange={handleChange} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="input-radius">Margin Bottom</label>
                        <input type="range" min="10" max="100" className="form-range" id="marginBottom" defaultValue={config.marginBottom} onChange={handleChange} />
                    </div>
                    <div className="form-group mt-3">
                        <label htmlFor="input-radius">Margin Left</label>
                        <input type="range" min="10" max="100" className="form-range" id="marginLeft" defaultValue={config.marginLeft} onChange={handleChange} />
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
                        {config && <D3SunburstChart config={config} />}
                    </div>
                </div>
            </div>
        </div>
    </section>
}


export default PageMain