"use strict";

class BinMaps {
  
  minX = 3000;
  maxX = 5000;
  minY = 3000;
  maxY = 4500;
  pitchGridX = 100;
  pitchGridY = 100;
  axisXWidth = 150;
  axisYWidth = 150;
  mapField = 50;

  constructor(id) {
    this.place = document.getElementById(id);
    if (this.place === null) window.stop();
  }

  initMap() {
    this.map = this.getSVGNode('svg', {'id': 'binmapsGraph', 'width': '100%',
      'viewBox': `${this.minX - this.axisYWidth - this.mapField} ${this.minY - this.axisXWidth - this.mapField} ${this.maxX - this.minX + 1 + 2 * this.mapField + this.axisYWidth} ${this.maxY - this.minY + 1 + 2 * this.mapField + this.axisYWidth}`, 
      'transform': 'scale(1,-1)'});
    this.map.textContent = "No SVG - no cartoons!";
    this.place.append(this.map);
    
    return this;
  }

  showGrid() {
    let grid = this.getSVGNode('g', {'class': 'bm-grid', 'id': 'bm-grid'});
    this.map.append(grid);
    
    //H lines
    for (let i = this.minY; i <= this.maxY + 1;) {
      grid.append(this.getSVGNode('path', {'d': `M ${this.minX - 20} ${i} H ${this.maxX}`}));
      i += this.pitchGridY;
    }
    //V lines
    for (let i = this.minX; i <= this.maxX + 1;) {
      grid.append(this.getSVGNode('path', {'d': `M ${i} ${this.minY - 20} V ${this.maxY}`}));
      i += this.pitchGridX;
    }

    let axis = this.getSVGNode('g', {'class': 'bm-grid', 'id': 'bm-grid-axis', 'transform': 'scale(1,-1)'});
    this.map.append(axis);

    // axis X
    for (let i = 0; i < 21; i++) {
      let textLabel = this.getSVGNode('text', {'x': 2960 + (i * 100), 'y': -2930, });
      textLabel.textContent = "0." + (3000 + (i * 100));
      axis.append(textLabel);
    }

    // axis Y
    for (let i = 0; i < 16; i++) {
      let textLabel = this.getSVGNode('text', {'x': 2880, 'y': -2995 - (i * 100)});
      textLabel.textContent = 3000 + (i * 100);
      axis.append(textLabel);
    }

    return this;
  }

  showFullGrid() {
    this.showGrid();

    //let grid = document.getElementById('fullGrid');
    return this;
  }
  
  /**
   * Draws marks around the edges of the picture to display its dimensions.
   * This is a utility function for debugging a program.
   * 
   * @param {SVGElement} map
   */
  showCanvasAnchors(target) {
    map.append(this.getSVGNode('g',{'class': 'bm-grid bm-anchors', 'id': 'svgCanvasAnchors'}));

    let canvasAnchors = document.getElementById('svgCanvasAnchors');

    canvasAnchors.append(this.getSVGNode('path', {'d': `M ${this.startCanvasX} ${this.startCanvasY} h 100`}));
    canvasAnchors.append(this.getSVGNode('path', {'d': `M ${this.startCanvasX} ${this.startCanvasY} v 100`}));
    canvasAnchors.append(this.getSVGNode('path', {'d': `M ${this.startCanvasX + this.widthCanvas} ${this.startCanvasY + this.heightCanvas} h -100`}));
    canvasAnchors.append(this.getSVGNode('path', {'d': `M ${this.startCanvasX + this.widthCanvas} ${this.startCanvasY + this.heightCanvas} v -100`}));

    return this;
  }

  /**
   * Create DOM node as SVG element with any parameters
   * @param {string} node - node name (f.e.: svg, g, path...)
   * @param {object} attr - an object containing parameters ({name: value, ...})
   * @returns {SVGElement} DOM node
   */
  getSVGNode(node, attr) {
    node = document.createElementNS('http://www.w3.org/2000/svg', node);
    
    for (let property in attr) {
      node.setAttributeNS(null, property, attr[property]);
    }

    return node;
  }

}