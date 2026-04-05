/**
 * Wraps an async Express route handler so rejected promises forward to error middleware.
 * (Express 5 handles async errors natively; this remains useful for Express 4 or extra safety.)
 */
function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

module.exports = asyncHandler;
