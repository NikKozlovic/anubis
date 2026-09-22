// Cloudflare Worker: proxies Discord webhook calls so the real webhook URLs
// never appear in client-side code. Deploy this at https://dash.cloudflare.com
// (Workers & Pages -> Create Worker -> paste this code).
//
// Setup:
// 1. Create the worker, paste this file's contents in the editor, deploy.
// 2. In the worker's Settings -> Variables, add these as encrypted "Secret" env vars
//    (use NEW webhook URLs created in Discord — delete the old leaked ones first):
//      WEBHOOK_SUBMISSION = <new submission webhook URL>
//      WEBHOOK_BOOKING    = <new booking webhook URL>
// 3. Set ALLOWED_ORIGIN below to your real site origin (e.g. https://anubisunderground.com).
// 4. Note the worker URL (e.g. https://anubis-discord-proxy.<subdomain>.workers.dev)
//    and use it as PROXY_URL in the site's HTML files.

const ALLOWED_ORIGIN = 'https://anubisunderground.com';

export default {
  async fetch(request, env) {
    const corsHeaders = {
      'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    if (request.method !== 'POST') {
      return new Response('Method not allowed', { status: 405, headers: corsHeaders });
    }

    if ((request.headers.get('Origin') || '') !== ALLOWED_ORIGIN) {
      return new Response('Forbidden', { status: 403, headers: corsHeaders });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return new Response('Invalid JSON', { status: 400, headers: corsHeaders });
    }

    const webhooks = {
      submission: env.WEBHOOK_SUBMISSION,
      booking: env.WEBHOOK_BOOKING,
    };

    const webhookUrl = webhooks[body?.type];
    if (!webhookUrl) {
      return new Response('Unknown type', { status: 400, headers: corsHeaders });
    }

    const discordRes = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body.payload || {}),
    });

    return new Response(JSON.stringify({ ok: discordRes.ok }), {
      status: discordRes.ok ? 200 : 502,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  },
};
