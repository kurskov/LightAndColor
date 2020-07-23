"use strict";

class BinMaps {
  
  constructor(id) {
    this.place = document.getElementById(id);
    if (this.place === null) window.stop();
  }

  initializeCanvas(startX = 2850, startY = 2850, width = 2200, height = 1600, flip = true) {
    this.startCanvasX = startX;
    this.startCanvasY = startY;
    this.widthCanvas = width;
    this.heightCanvas = height;

    this.canvas = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    this.canvas.id = "binmapCanvas";
    this.canvas.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    this.canvas.setAttribute(`viewBox`, `${this.startCanvasX} ${this.startCanvasY} ${this.widthCanvas} ${this.heightCanvas}`);
    this.canvas.textContent = "No SVG - no cartoons!";

    if (flip) { 
      this.canvas.setAttribute("transform", "scale(1,-1)"); 
    }

    this.place.append(this.canvas);
    
    return this;
  }

  showFullGrid() {
    let group = document.createElementNS("http://www.w3.org/2000/svg", "g");
    group.id  = "grid456";
    group.setAttribute("class", "bm-grid");;
    this.canvas.append(group);

    let grid = document.getElementById('grid456');

    let linesV = document.createElementNS("http://www.w3.org/2000/svg", "path");
    linesV.setAttribute("d", "M 3990 3000 V 4501");
    linesV.setAttribute("stroke-width", "2020");
    linesV.setAttribute("stroke-dasharray", "1,99");
    grid.append(linesV);

    let linesH = document.createElementNS("http://www.w3.org/2000/svg", "path");
    linesH.setAttribute("d", "M 3000 3690 H 5001");
    linesH.setAttribute("stroke-width", "1420");
    linesH.setAttribute("stroke-dasharray", "1,99");
    grid.append(linesH);

    grid.append(this.getSVG('path', {"d": "M 3500 3500 H 4000"}));

    for (let i = 0; i < 10; i++) {
      let textLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
      textLabel.setAttribute('x', 2960 + (i * 100));
      textLabel.setAttribute('y', 2950);
      //textLabel.setAttribute("rotate", "90"); 
      textLabel.textContent = 3000 + (i * 100);
      grid.append(textLabel);
    }

    return this;
  }

  showAncorsCanvas() {
    this.canvas.innerHTML += `<g class="bm-grid">
      <path d="M 2850 2850 h 100" stroke-width="10" />
      <path d="M 2850 2850 v 100" stroke-width="10" />
      <path d="M 5050 4450 h -100" stroke-width="10" />
      <path d="M 5050 4450 v -100" stroke-width="10" />
    </g>`;

    return this;
  }

  getSVG(node, attr) {
    node = document.createElementNS("http://www.w3.org/2000/svg", node);
    
    for (let property in attr) {
      node.setAttributeNS("http://www.w3.org/2000/svg", property, attr[property]);
    }

    return node;
  }

}