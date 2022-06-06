import * as d3 from "d3";

const getColorByType = (colorSchemeType, value = 0) => {
    switch (colorSchemeType) {
        case "Category10": return d3.scaleOrdinal(d3.schemeCategory10);
        case "Accent": return d3.scaleOrdinal(d3.schemeAccent);
        case "Dark2": return d3.scaleOrdinal(d3.schemeDark2);
        case "Paired": return d3.scaleOrdinal(d3.schemePaired);
        case "Pastel1": return d3.scaleOrdinal(d3.schemePastel1);
        case "Pastel2": return d3.scaleOrdinal(d3.schemePastel2);
        case "Set1": return d3.scaleOrdinal(d3.schemeSet1);
        case "Set2": return d3.scaleOrdinal(d3.schemeSet2);
        case "Set3": return d3.scaleOrdinal(d3.schemeSet3);
        case "Tableau10": return d3.scaleOrdinal(d3.schemeTableau10);
        case "BrBG": return d3.scaleOrdinal(d3.schemeBrBG);
        case "PRGn": return d3.scaleOrdinal(d3.schemePRGn);
        case "PiYG": return d3.scaleOrdinal(d3.schemePiYG);
        case "PuOr": return d3.scaleOrdinal(d3.schemePuOr);
        case "RdBu": return d3.scaleOrdinal(d3.schemeRdBu);
        case "RdGy": return d3.scaleOrdinal(d3.schemeRdGy);
        case "RdYlBu": return d3.scaleOrdinal(d3.schemeRdYlBu);
        case "RdYlGn": return d3.scaleOrdinal(d3.schemeRdYlGn);
        case "Spectral": return d3.scaleOrdinal(d3.schemeSpectral);
        case "Blues": return d3.scaleOrdinal(d3.schemeBlues);
        case "Greens": return d3.scaleOrdinal(d3.schemeGreens);
        case "Greys": return d3.scaleOrdinal(d3.schemeGreys);
        case "Oranges": return d3.scaleOrdinal(d3.schemeOranges);
        case "Purples": return d3.scaleOrdinal(d3.schemePurples);
        case "Reds": return d3.scaleOrdinal(d3.schemeReds);
        case "BuGn": return d3.scaleOrdinal(d3.schemeBuGn);
        case "BuPu": return d3.scaleOrdinal(d3.schemeBuPu);
        case "GnBu": return d3.scaleOrdinal(d3.schemeGnBu);
        case "OrRd": return d3.scaleOrdinal(d3.schemeOrRd);
        case "PuBuGn": return d3.scaleOrdinal(d3.schemePuBuGn);
        case "PuBu": return d3.scaleOrdinal(d3.schemePuBu);
        case "PuRd": return d3.scaleOrdinal(d3.schemePuRd);
        case "RdPu": return d3.scaleOrdinal(d3.schemeRdPu);
        case "YlGnBu": return d3.scaleOrdinal(d3.schemeYlGnBu);
        case "YlGn": return d3.scaleOrdinal(d3.schemeYlGn);
        case "YlOrBr": return d3.scaleOrdinal(d3.schemeYlOrBr);
        case "YlOrRd": return d3.scaleOrdinal(d3.schemeYlOrRd);
        case "Rainbow": return d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, value))
        default: return d3.scaleOrdinal(d3.schemeCategory10);
    }
}

const getColorNames = [
    "Category10",
    "Accent",
    "Dark2",
    "Paired",
    "Pastel1",
    "Pastel2",
    "Set1",
    "Set2",
    "Set3",
    "Tableau10",
    "BrBG",
    "PRGn",
    "PiYG",
    "PuOr",
    "RdBu",
    "RdGy",
    "RdYlBu",
    "RdYlGn",
    "Spectral",
    "Blues",
    "Greens",
    "Greys",
    "Oranges",
    "Purples",
    "Reds",
    "BuGn",
    "BuPu",
    "GnBu",
    "OrRd",
    "PuBuGn",
    "PuBu",
    "PuRd",
    "RdPu",
    "YlGnBu",
    "YlGn",
    "YlOrBr",
    "YlOrRd",
    "Rainbow",
]

const D3HelperColor = {
    getColorByType,
    getColorNames,
}


export default D3HelperColor