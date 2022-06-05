import React from "react";
import D3SunburstChart from './d3SunburstChart';
import sample from "../data/sample.json";

const PageMain = () => {
    const [config, setConfig] = React.useState({
        json: JSON.stringify(sample),
        zoom: 40,
        fontSize: 10
    })

    const handleChange = (event) => {
        const { id, value } = event.target;
        setConfig({ ...config, [id]: value });
    };

    return (<main className="fluid-container px-4">
        <div className="row ">
            <div className="col-2">
                <div className="card">
                    <div className="card-header">
                        <h5 className="pt-2">Configuration</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="input-json">Json Data</label>
                            <textarea type="textarea" rows="5" className="form-control" id="json" defaultValue={config.json} onChange={handleChange} />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="input-radius">Zoom</label>
                            <input type="range" step="5" min="10" max="200" className="form-range" id="zoom" defaultValue={config.zoom} onChange={handleChange} />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="input-radius">Font Size</label>
                            <input type="range" step="5" min="1" max="100" className="form-range" id="fontSize" defaultValue={config.fontSize} onChange={handleChange} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-10">
                <div className="card">
                    <div className="card-header">
                        <h5 className="pt-2">Chart</h5>
                    </div>
                    <div className="card-body">
                        {config && <D3SunburstChart config={config} />}
                    </div>
                </div>
            </div>
        </div>
    </main>)
}


export default PageMain