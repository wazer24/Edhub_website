const API_BASE = (process.env.REACT_APP_API_URL || 'http://localhost:5000').replace(/\/$/, '');

/**
 * POST /api/v1/enquiries — saves lead in MongoDB and appends to Google Sheet (when configured).
 */
export async function submitEnquiry(payload) {
  let res;
  try {
    res = await fetch(`${API_BASE}/api/v1/enquiries`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error(
      `Cannot reach the API (${API_BASE}). Start the backend from the backend folder (npm run dev) and ensure it shows "Server listening on port 5000".`
    );
  }
  let data = {};
  try {
    data = await res.json();
  } catch {
    /* ignore */
  }
  if (!res.ok) {
    const msg = data && data.message ? data.message : `Request failed (${res.status})`;
    throw new Error(msg);
  }
  return data;
}
