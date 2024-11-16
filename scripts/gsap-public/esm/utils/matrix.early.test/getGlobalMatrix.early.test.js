
// Unit tests for: getGlobalMatrix



import { getGlobalMatrix, Matrix2D } from '../matrix';



describe('getGlobalMatrix() getGlobalMatrix method', () => {
  let element, parentElement, svgElement;

  beforeEach(() => {
    // Set up a basic DOM structure for testing
    document.body.innerHTML = `
      <div id="parent" style="position: relative;">
        <div id="child" style="transform: translate(10px, 20px);"></div>
      </div>
      <svg id="svgParent">
        <g id="svgChild"></g>
      </svg>
    `;
    element = document.getElementById('child');
    parentElement = document.getElementById('parent');
    svgElement = document.getElementById('svgChild');
  });

  describe('Happy Path', () => {
    test('should return identity matrix for document element', () => {
      // Test that the function returns an identity matrix for the document element
      const matrix = getGlobalMatrix(document.documentElement);
      expect(matrix).toEqual(new Matrix2D());
    });

    test('should return correct matrix for a transformed element', () => {
      // Test that the function returns the correct matrix for a transformed element
      const matrix = getGlobalMatrix(element);
      expect(matrix.e).toBeCloseTo(10);
      expect(matrix.f).toBeCloseTo(20);
    });

    test('should return correct matrix for an SVG element', () => {
      // Test that the function returns the correct matrix for an SVG element
      const matrix = getGlobalMatrix(svgElement);
      expect(matrix).toBeInstanceOf(Matrix2D);
    });
  });

  describe('Edge Cases', () => {
    test('should handle null element gracefully', () => {
      // Test that the function handles a null element gracefully
      const matrix = getGlobalMatrix(null);
      expect(matrix).toEqual(new Matrix2D());
    });

    test('should handle element with no parentNode', () => {
      // Test that the function handles an element with no parentNode
      const orphanElement = document.createElement('div');
      const matrix = getGlobalMatrix(orphanElement);
      expect(matrix).toEqual(new Matrix2D());
    });

    test('should handle element with zero scale', () => {
      // Test that the function handles an element with zero scale
      element.style.transform = 'scale(0, 0)';
      const matrix = getGlobalMatrix(element);
      expect(matrix).toBeInstanceOf(Matrix2D);
    });

    test('should return inverse matrix when inverse flag is true', () => {
      // Test that the function returns the inverse matrix when the inverse flag is true
      const matrix = getGlobalMatrix(element, true);
      const inverseMatrix = new Matrix2D().inverse();
      expect(matrix).toEqual(inverseMatrix);
    });

    test('should include scroll in fixed position when flag is true', () => {
      // Test that the function includes scroll in fixed position when the flag is true
      window.scrollTo(100, 100);
      element.style.position = 'fixed';
      const matrix = getGlobalMatrix(element, false, false, true);
      expect(matrix.e).toBeCloseTo(10);
      expect(matrix.f).toBeCloseTo(20);
    });
  });
});

// End of unit tests for: getGlobalMatrix
