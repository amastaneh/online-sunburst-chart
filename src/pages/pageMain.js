import React from "react";
import sample from "../data/sample.json";
import D3SunburstChart from './d3SunburstChart';
import D3HelperColor from './d3HelperColor';

const PageMain = () => {
    const [config, setConfig] = React.useState({
        json: JSON.stringify(sample),
        zoom: 40,
        maxVisibleLevel: 3,
        maxValue: 6,
        fontSize: 10,
        arcColorSchemeType: "Rainbow",
        valueColorSchemeType: "Greens",
    })

    const handleChange = (event) => {
        const { id, value, valueAsNumber } = event.target;
        if (valueAsNumber)
            setConfig({ ...config, [id]: valueAsNumber });
        else
            setConfig({ ...config, [id]: value });
    };

    const handleDownloadSVG = () => {
        const svg = document.querySelector("svg");
        const svgData = new XMLSerializer().serializeToString(svg);
        const canvas = document.createElement("canvas");
        canvas.width = svg.width.baseVal.value;
        canvas.height = svg.height.baseVal.value;
        const ctx = canvas.getContext("2d");
        const img = document.createElement("img");
        img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));
        img.onload = function () {
            ctx.drawImage(img, 0, 0);
            const canvasdata = canvas.toDataURL("image/png");
            const a = document.createElement("a");
            const timestamp = Math.round(+new Date() / 1000);
            a.download = `online-sunburst-chart-${timestamp}.png`;
            a.href = canvasdata;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
        };
    };

    return (<main className="fluid-container px-4">
        <div className="row ">
            <div className="col-2">
                <div className="card mb-3">
                    <div className="card-header">
                        <h5 className="m-0">Configuration</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="input-json">Json Data</label>
                            <textarea type="textarea" rows="5" className="form-control" id="json" defaultValue={config.json} onChange={handleChange} />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="input-radius">Zoom ({config.zoom}%):</label>
                            <input type="range" step="5" min="10" max="200" className="form-range" id="zoom" defaultValue={config.zoom} onChange={handleChange} />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="input-radius">Max Visiable Level ({config.maxVisibleLevel}):</label>
                            <input type="range" step="1" min="1" max="10" className="form-range" id="maxVisibleLevel" defaultValue={config.maxVisibleLevel} onChange={handleChange} />
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="input-radius">Max Value ({config.maxValue}):</label>
                            <input type="range" step="1" min="1" max="1000" className="form-range" id="maxValue" defaultValue={config.maxValue} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-header">
                        <h5 className="m-0">Visualization</h5>
                    </div>
                    <div className="card-body">
                        <div className="form-group mt-3">
                            <label htmlFor="input-radius">Chart Color Type ({config.arcColorSchemeType}):</label>
                            <select className="form-control" id="arcColorSchemeType" defaultValue={config.arcColorSchemeType} onChange={handleChange}>
                                {D3HelperColor.getColorNames.map(colorName => <option key={colorName} value={colorName}>{colorName}</option>)}
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="input-radius">Value Color Type ({config.valueColorSchemeType}):</label>
                            <select className="form-control" id="valueColorSchemeType" defaultValue={config.valueColorSchemeType} onChange={handleChange}>
                                {D3HelperColor.getColorNames.map(colorName => <option key={colorName} value={colorName}>{colorName}</option>)}
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="input-radius">Font Size ({config.fontSize}px):</label>
                            <input type="range" step="5" min="1" max="100" className="form-range" id="fontSize" defaultValue={config.fontSize} onChange={handleChange} />
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <button className="btn btn-primary" onClick={handleDownloadSVG}>Download SVG</button>
                </div>
            </div>
            <div className="col-10">
                <div className="card">
                    <div className="card-header">
                        <h5 className="m-0">Sunburst Chart</h5>
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