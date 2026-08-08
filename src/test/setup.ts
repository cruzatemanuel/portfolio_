import '@testing-library/jest-dom';

// Mock window.matchMedia for jsdom environment
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  }),
});

// Mock ResizeObserver for jsdom environment
global.ResizeObserver = class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
};

// Mock HTMLCanvasElement getContext for WebGL/Canvas testing in jsdom
HTMLCanvasElement.prototype.getContext = function (contextId: string) {
  if (contextId === '2d') {
    return {
      clearRect: () => {},
      beginPath: () => {},
      moveTo: () => {},
      lineTo: () => {},
      stroke: () => {},
      strokeStyle: '',
      lineWidth: 1,
    } as unknown as CanvasRenderingContext2D;
  }
  if (contextId === 'webgl' || contextId === 'webgl2') {
    return {
      getExtension: () => null,
      getParameter: () => 0,
      createShader: () => ({}),
      shaderSource: () => {},
      compileShader: () => {},
      getShaderParameter: () => true,
      createProgram: () => ({}),
      attachShader: () => {},
      linkProgram: () => {},
      getProgramParameter: () => true,
      useProgram: () => {},
      createBuffer: () => ({}),
      bindBuffer: () => {},
      bufferData: () => {},
      enableVertexAttribArray: () => {},
      vertexAttribPointer: () => {},
      drawArrays: () => {},
      drawElements: () => {},
      viewport: () => {},
      clearColor: () => {},
      clear: () => {},
      enable: () => {},
      disable: () => {},
      depthFunc: () => {},
      blendFunc: () => {},
      getUniformLocation: () => ({}),
      getAttribLocation: () => 0,
      uniform1f: () => {},
      uniform2f: () => {},
      uniform3f: () => {},
      uniform1i: () => {},
      uniformMatrix4fv: () => {},
    } as unknown as WebGLRenderingContext;
  }
  return null;
} as unknown as typeof HTMLCanvasElement.prototype.getContext;
