import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '0iz4ulma',   // 🔁 replace with your actual project ID
  dataset: 'production',        // or your dataset name
  apiVersion: '2023-07-01',     // use any recent date in YYYY-MM-DD
  useCdn: false,                // false to get fresh data and allow writes
  token: 'skFzui5CTzRnZ9LjLJ6eiNuEOp737kJKSgXYUvM2tL9x9kyfuIgiBvj8m8CHpyYjBwpxfAebOymRJSyUCSKb18RQ5eqzsIgPEjTqtbE5EeTImXa2p5jivcJhMhTpuPFq0Y4CqipDfUhxAuZlm1Plirdju4D9zLINHmrVZZVTNZ9LMKnRa0II',  // 🔒 REQUIRED for write access
});

export default client;