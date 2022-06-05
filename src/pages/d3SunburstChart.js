import React from "react";
import * as d3 from "d3";

const D3SunburstChart = ({ config }) => {
    const svgRef = React.useRef(null);

    React.useEffect(() => {
        drawChart()
    }, [config]);

    const drawChart = () => {
        if (!config || !svgRef.current) return

        const width = config.zoom / 100.0 * svgRef.current.offsetWidth
        const radius = width / 6
        const data = JSON.parse(config.json)
        const partition = data => {
            const root1 = d3
                .hierarchy(data)
                .sum(d => d.value)
                .sort((a, b) => b.value - a.value);
            return d3
                .partition()
                .size([2 * Math.PI, root1.height + 1])
                (root1);
        }
        const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1))
        const format = d3.format(",d")
        const arc = d3
            .arc()
            .startAngle(d => d.x0)
            .endAngle(d => d.x1)
            .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
            .padRadius(radius * 2)
            .innerRadius(d => d.y0 * radius)
            .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))

        const root = partition(data);
        root.each(d => d.current = d);

        // Remove old chart
        d3.select(svgRef.current)
            .selectAll("*")
            .remove()

        // Create Main SVG
        const svg = d3
            .select(svgRef.current)
            .append("svg")
            .attr("width", width)
            .attr("height", width)
            .attr("viewBox", [0, 0, width, width])
            .style("font", config.fontSize + "px sans-serif")

        // Create g
        const g = svg
            .append("g")
            .attr("transform", `translate(${width / 2},${width / 2})`);

        const path = g
            .append("g")
            .selectAll("path")
            .data(root.descendants().slice(1))
            .join("path")
            .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.data.name); })
            .attr("fill-opacity", d => arcVisible(d.current) ? (d.children ? 0.6 : 0.4) : 0)
            .attr("pointer-events", d => arcVisible(d.current) ? "auto" : "none")
            .attr("d", d => arc(d.current));

        path
            .filter(d => d.children)
            .style("cursor", "pointer")
            .on("click", clicked);

        path
            .append("title")
            .text(d => `${d.ancestors().map(d => d.data.name).reverse().join("/")}\n${format(d.value)}`);

        const label = g
            .append("g")
            .attr("pointer-events", "none")
            .attr("text-anchor", "middle")
            .style("user-select", "none")
            .selectAll("text")
            .data(root.descendants().slice(1))
            .join("text")
            .attr("dy", "0.35em")
            .attr("fill-opacity", d => +labelVisible(d.current))
            .attr("transform", d => labelTransform(d.current))
            .text(d => d.data.name);

        const parent = g
            .append("circle")
            .datum(root)
            .attr("r", radius)
            .attr("fill", "none")
            .attr("pointer-events", "all")
            .on("click", clicked);

        function clicked(event, p) {
            parent.datum(p.parent || root);

            root.each(d => d.target = {
                x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
                y0: Math.max(0, d.y0 - p.depth),
                y1: Math.max(0, d.y1 - p.depth)
            });

            const t = g.transition().duration(750);

            // Transition the data on all arcs, even the ones that aren’t visible,
            // so that if this transition is interrupted, entering arcs will start
            // the next transition from the desired position.
            path
                .transition(t)
                .tween("data", d => {
                    const i = d3.interpolate(d.current, d.target);
                    return t1 => d.current = i(t1);
                })
                .filter(function (d) { return +this.getAttribute("fill-opacity") || arcVisible(d.target); })
                .attr("fill-opacity", d => arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0)
                .attr("pointer-events", d => arcVisible(d.target) ? "auto" : "none")
                .attrTween("d", d => () => arc(d.current));

            label.filter(function (d) {
                return +this.getAttribute("fill-opacity") || labelVisible(d.target);
            }).transition(t)
                .attr("fill-opacity", d => +labelVisible(d.target))
                .attrTween("transform", d => () => labelTransform(d.current));
        }


        function arcVisible(d) {
            return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0;
        }

        function labelVisible(d) {
            return d.y1 <= 3 && d.y0 >= 1 && (d.y1 - d.y0) * (d.x1 - d.x0) > 0.03;
        }

        function labelTransform(d) {
            const x = (d.x0 + d.x1) / 2 * 180 / Math.PI;
            const y = (d.y0 + d.y1) / 2 * radius;
            return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`;
        }

        return svg.node();
    }

    return <div className="text-center" ref={svgRef}></div>
}

export default D3SunburstChart