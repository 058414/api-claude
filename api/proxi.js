1 export default async function handler(req, res) {                                                                                                                                                                               2   res.setHeader('Access-Control-Allow-Origin', '*');                                                                                                                                                                            3   res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
       4   res.setHeader('Access-Control-Allow-Headers', 'Content-Type');                                                                                                                                                                5
       6   if (req.method === 'OPTIONS') return res.status(200).end();
       7   if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
       8
       9   const { messages } = req.body;
      10   if (!messages) return res.status(400).json({ error: 'Missing messages' });
     … +19 lines
