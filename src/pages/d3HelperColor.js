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
        case "BrBG": return d3.scaleOrdinal(d3.quantize(d3.interpolateBrBG, value))
        case "PRGn": return d3.scaleOrdinal(d3.quantize(d3.interpolatePRGn, value))
        case "PiYG": return d3.scaleOrdinal(d3.quantize(d3.interpolatePiYG, value))
        case "PuOr": return d3.scaleOrdinal(d3.quantize(d3.interpolatePuOr, value))
        case "RdBu": return d3.scaleOrdinal(d3.quantize(d3.interpolateRdBu, value))
        case "RdGy": return d3.scaleOrdinal(d3.quantize(d3.interpolateRdGy, value))
        case "RdYlBu": return d3.scaleOrdinal(d3.quantize(d3.interpolateRdYlBu, value))
        case "RdYlGn": return d3.scaleOrdinal(d3.quantize(d3.interpolateRdYlGn, value))
        case "Spectral": return d3.scaleOrdinal(d3.quantize(d3.interpolateSpectral, value))
        case "BuGn": return d3.scaleOrdinal(d3.quantize(d3.interpolateBuGn, value))
        case "BuPu": return d3.scaleOrdinal(d3.quantize(d3.interpolateBuPu, value))
        case "GnBu": return d3.scaleOrdinal(d3.quantize(d3.interpolateGnBu, value))
        case "OrRd": return d3.scaleOrdinal(d3.quantize(d3.interpolateOrRd, value))
        case "PuBuGn": return d3.scaleOrdinal(d3.quantize(d3.interpolatePuBuGn, value))
        case "PuBu": return d3.scaleOrdinal(d3.quantize(d3.interpolatePuBu, value))
        case "PuRd": return d3.scaleOrdinal(d3.quantize(d3.interpolatePuRd, value))
        case "RdPu": return d3.scaleOrdinal(d3.quantize(d3.interpolateRdPu, value))
        case "YlGnBu": return d3.scaleOrdinal(d3.quantize(d3.interpolateYlGnBu, value))
        case "YlGn": return d3.scaleOrdinal(d3.quantize(d3.interpolateYlGn, value))
        case "YlOrBr": return d3.scaleOrdinal(d3.quantize(d3.interpolateYlOrBr, value))
        case "YlOrRd": return d3.scaleOrdinal(d3.quantize(d3.interpolateYlOrRd, value))
        case "Blues": return d3.scaleOrdinal(d3.quantize(d3.interpolateBlues, value))
        case "Greens": return d3.scaleOrdinal(d3.quantize(d3.interpolateGreens, value))
        case "Greys": return d3.scaleOrdinal(d3.quantize(d3.interpolateGreys, value))
        case "Purples": return d3.scaleOrdinal(d3.quantize(d3.interpolatePurples, value))
        case "Reds": return d3.scaleOrdinal(d3.quantize(d3.interpolateReds, value))
        case "Oranges": return d3.scaleOrdinal(d3.quantize(d3.interpolateOranges, value))
        case "Cividis": return d3.scaleOrdinal(d3.quantize(d3.interpolateCividis, value))
        case "CubehelixDefault": return d3.scaleOrdinal(d3.quantize(d3.interpolateCubehelixDefault, value))
        case "Rainbow": return d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, value))
        case "Sinebow": return d3.scaleOrdinal(d3.quantize(d3.interpolateSinebow, value))
        case "Turbo": return d3.scaleOrdinal(d3.quantize(d3.interpolateTurbo, value))
        case "Viridis": return d3.scaleOrdinal(d3.quantize(d3.interpolateViridis, value))

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
    "Blues",
    "Greens",
    "Greys",
    "Purples",
    "Reds",
    "Oranges",
    "Cividis",
    "CubehelixDefault",
    "Rainbow",
    "Sinebow",
    "Turbo",
    "Viridis",
]

const D3HelperColor = {
    getColorByType,
    getColorNames,
}


export default D3HelperColor